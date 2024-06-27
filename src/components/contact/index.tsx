import { contactService } from "@/services/contact";
import { ContactForm } from "@/services/contact/types";
import { useAlertStore } from "@/store/alert";
import { useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const pushAlert = useAlertStore((state) => state.pushAlert);
  const { push } = useRouter();

  const {
    setValue,
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>();

  async function onSubmit() {
    const data = getValues();

    await contactService.send(data);

    pushAlert({
      message: "Mensagem enviada com sucesso!",
      status: 200,
    });
  }

  const ref = useRef(null);
  const inView = useInView(ref);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [inView]);

  require("xp.css/dist/XP.css");

  return (
    <div className="w-full flex-1 window border-2 border-stone-300 box-border">
      <div
        className="title-bar"
        style={{
          height: "auto",
        }}
      >
        <div className="title-bar-text">
          Me envie uma mensagem
          <span className="small:hidden">, vamos conversar!</span>
        </div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body flex-center h-full p-10" ref={ref}>
        {loading ? (
          <progress></progress>
        ) : (
          <form
            className="lg:max-w-[500px] w-full flex flex-col space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex-center gap-6 small:flex-col w-full">
              <div className="field-row flex-1 small:w-full">
                <label htmlFor="name">Nome</label>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: true })}
                  className="flex-1 small:w-full"
                />
              </div>

              <div
                className="field-row flex-1 small:w-full"
                style={{
                  marginTop: 0,
                }}
              >
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="text"
                  {...register("email", { required: true })}
                  className="flex-1 small:w-full"
                />
              </div>
            </div>
            <div className="field-row-stacked">
              <label htmlFor="message">Mensagem</label>
              <textarea
                placeholder="Escreva sua mensagem aqui, ou apenas diga um oi!"
                id="message"
                {...register("message", { required: true })}
                rows={8}
              ></textarea>
            </div>

            <fieldset>
              <div className="field-row">Assunto:</div>
              <div className="field-row">
                <input
                  id="proposal"
                  type="radio"
                  value="proposal"
                  onChange={(e) => setValue("subject", e.target.value)}
                />
                <label htmlFor="proposal">Proposta</label>
              </div>
              <div className="field-row">
                <input
                  id="question"
                  type="radio"
                  value="question"
                  onChange={(e) => setValue("subject", e.target.value)}
                />
                <label htmlFor="question">Dúvida</label>
              </div>
              <div className="field-row">
                <input
                  id="other"
                  type="radio"
                  value="other"
                  onChange={(e) => setValue("subject", e.target.value)}
                />
                <label htmlFor="other">Outro</label>
              </div>
            </fieldset>
            <input
              type="checkbox"
              id="shouldReturn"
              {...register("shouldReturn")}
            />
            <label htmlFor="shouldReturn">Gostaria de receber resposta</label>

            <div className="flex justify-between">
              <button>Cancelar</button>
              <button>Enviar Mensagem</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
