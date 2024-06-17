import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [isInView]);

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
      <div className="window-body flex-center h-full" ref={ref}>
        {loading ? (
          <progress></progress>
        ) : (
          <form className="w-[200px] flex flex-col space-y-6">
            <select>
              <option>5 - Incredible!</option>
              <option>4 - Great!</option>
              <option>3 - Pretty good</option>
              <option>2 - Not so great</option>
              <option>1 - Unfortunate</option>
            </select>
            <div className="field-row-stacked" style={{ width: 200 }}>
              <label htmlFor="text24">Additional notes</label>
              <textarea id="text24" rows={8}></textarea>
            </div>
            <input type="checkbox" id="example1" />
            <label htmlFor="example1">This is a checkbox</label>

            <fieldset>
              <div className="field-row">Select one:</div>
              <div className="field-row">
                <input id="radio14" type="radio" name="fieldset-example" />
                <label htmlFor="radio14">Diners</label>
              </div>
              <div className="field-row">
                <input id="radio15" type="radio" name="fieldset-example" />
                <label htmlFor="radio15">Drive-Ins</label>
              </div>
              <div className="field-row">
                <input id="radio16" type="radio" name="fieldset-example" />
                <label htmlFor="radio16">Dives</label>
              </div>
            </fieldset>

            <div className="field-row">
              <label htmlFor="text21">Occupation</label>
              <input id="text21" type="text" />
            </div>
            <button>Click me</button>
          </form>
        )}
      </div>
    </div>
  );
}
