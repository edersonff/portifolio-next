import React, { useState, useEffect } from "react";

const Typewriter = ({
  children,
  delay,
  ...props
}: { delay: number } & React.HTMLProps<HTMLSpanElement>) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const text = children as string;

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span {...props} dangerouslySetInnerHTML={{ __html: currentText }} />;
};

export default Typewriter;
