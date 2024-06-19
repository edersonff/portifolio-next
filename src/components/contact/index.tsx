import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export default function Contact() {
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
          Me envie uma mensagem, vamos conversar!
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
          <form className="lg:max-w-[500px] flex flex-col space-y-6">
            <div className="flex-center gap-6">
              <div className="field-row flex-1">
                <label htmlFor="name">Nome</label>
                <input id="name" type="text" className="flex-1" />
              </div>

              <div
                className="field-row flex-1"
                style={{
                  marginTop: 0,
                }}
              >
                <label htmlFor="lastname">Sobrenome</label>
                <input id="lastname" type="text" className="flex-1" />
              </div>
            </div>
            <div className="field-row-stacked">
              <label htmlFor="message">Mensagem</label>
              <textarea
                placeholder="Escreva sua mensagem aqui, ou apenas diga um oi!"
                id="message"
                rows={8}
              ></textarea>
            </div>

            <fieldset>
              <div className="field-row">Assunto:</div>
              <div className="field-row">
                <input id="proposal" type="radio" name="fieldset-example" />
                <label htmlFor="proposal">Proposta</label>
              </div>
              <div className="field-row">
                <input id="question" type="radio" name="fieldset-example" />
                <label htmlFor="question">Dúvida</label>
              </div>
              <div className="field-row">
                <input id="other" type="radio" name="fieldset-example" />
                <label htmlFor="other">Outro</label>
              </div>
            </fieldset>
            <input type="checkbox" id="example1" />
            <label htmlFor="example1">Gostaria de receber resposta</label>

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
