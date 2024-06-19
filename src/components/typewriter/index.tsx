import React, { useEffect, useRef } from "react";

export default function Typewriter({ text = "", speed = 50, delay = 0 }) {
  const initialized = useRef(false);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    async function main() {
      await new Promise((resolve) => setTimeout(resolve, delay));
      let i = 0;

      const typingInterval = setInterval(() => {
        if (textRef.current) {
          textRef.current.innerHTML += text.charAt(i);
          i++;
        }
      }, speed);

      return () => {
        clearInterval(typingInterval);
      };
    }

    if (!initialized.current) {
      initialized.current = true;
      main();
    }
  }, []);

  return (
    <span
      ref={textRef}
      //dangerouslySetInnerHTML={{ __html: typewriter }}
    />
  );
}
