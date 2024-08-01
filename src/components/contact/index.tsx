import useDictionary from "@/hooks/useDictionary";
import { contactService } from "@/services/contact";
import { ContactForm } from "@/services/contact/types";
import { useAlertStore } from "@/store/alert";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import { useForm } from "react-hook-form";

import "xp.css/dist/XP.css";

export default function Contact() {
  const { contact } = useDictionary();
  const pushAlert = useAlertStore((state) => state.pushAlert);

  const {
    setValue,
    getValues,
    register,
    handleSubmit,
    reset,
    clearErrors,
    setError,
    formState: { errors },
  } = useForm<ContactForm>();

  async function onSubmit() {
    const data = getValues();

    if (!data.subject) {
      setError("subject", {
        type: "required",
      });
      return;
    }

    await contactService.send(data);

    pushAlert({
      message: "Mensagem enviada com sucesso!",
      status: 200,
    });

    resetForm();
  }

  function resetForm() {
    reset();
    clearErrors();
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

  return (
    <div className="relative w-full flex justify-center items-center rounded-md overflow-hidden min-h-[70vh]">
      <Image
        src="/images/background/wallpaper.jpg"
        alt="Wallpaper do Windows XP"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />

      <Draggable bounds="parent">
        <div className="window border-2 border-stone-300 box-border">
          <div
            className="title-bar"
            style={{
              height: "auto",
            }}
          >
            <div
              className="title-bar-text"
              dangerouslySetInnerHTML={{ __html: contact["form_tile"] }}
            ></div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body flex-center h-full py-4 px-6" ref={ref}>
            {loading && <progress></progress>}
            <form
              className={
                "lg:min-w-[500px] w-full flex flex-col space-y-6 " +
                (loading ? "hidden" : "")
              }
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex-center gap-6 small:flex-col w-full">
                <div className="field-row flex-1 small:w-full">
                  <label htmlFor="name">
                    {contact.form.name.label}
                    {errors.name && (
                      <span className="text-red-500 ml-2">
                        - {contact.form.required}
                      </span>
                    )}
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: true })}
                    onInput={(e) => setValue("name", e.currentTarget.value)}
                    placeholder={contact.form.name.placeholder}
                    className="flex-1 small:w-full"
                  />
                </div>

                <div
                  className="field-row flex-1 small:w-full"
                  style={{
                    marginTop: 0,
                  }}
                >
                  <label htmlFor="email">
                    {contact.form.email.label}{" "}
                    {errors.email && (
                      <span className="text-red-500 ml-2">
                        - {contact.form.required}
                      </span>
                    )}
                  </label>
                  <input
                    id="email"
                    type="text"
                    {...register("email", { required: true })}
                    onInput={(e) => setValue("email", e.currentTarget.value)}
                    placeholder={contact.form.email.placeholder}
                    className="flex-1 small:w-full"
                  />
                </div>
              </div>
              <div className="field-row-stacked">
                <label htmlFor="message">
                  {contact.form.message.label}{" "}
                  {errors.message && (
                    <span className="text-red-500 ml-2">
                      - {contact.form.required}
                    </span>
                  )}
                </label>
                <textarea
                  placeholder={contact.form.message.placeholder}
                  onInput={(e) => setValue("message", e.currentTarget.value)}
                  id="message"
                  {...register("message", { required: true })}
                  rows={8}
                ></textarea>
              </div>

              <fieldset>
                <div className="field-row">
                  {contact.form.subject.label}
                  {errors.subject && (
                    <span className="text-red-500 ml-2">
                      - {contact.form.required}
                    </span>
                  )}
                </div>
                <div className="field-row">
                  <input
                    id="proposal"
                    type="radio"
                    value="proposal"
                    {...register("subject", { required: true })}
                  />
                  <label htmlFor="proposal">
                    {contact.form.subject.options[0]}
                  </label>
                </div>
                <div className="field-row">
                  <input
                    id="question"
                    type="radio"
                    value="question"
                    {...register("subject", { required: true })}
                  />
                  <label htmlFor="question">
                    {contact.form.subject.options[1]}
                  </label>
                </div>
                <div className="field-row">
                  <input
                    id="other"
                    type="radio"
                    value="other"
                    {...register("subject", { required: true })}
                  />
                  <label htmlFor="other">
                    {contact.form.subject.options[2]}
                  </label>
                </div>
              </fieldset>
              <input
                type="checkbox"
                id="shouldReply"
                {...register("shouldReply")}
              />
              <label htmlFor="shouldReply">{contact.form.should_reply}</label>

              <div className="flex justify-between">
                <button type="reset" onClick={() => resetForm()}>
                  {contact.form.cancel}
                </button>
                <button type="submit">{contact.form.send}</button>
              </div>
            </form>
          </div>
        </div>
      </Draggable>
    </div>
  );
}
