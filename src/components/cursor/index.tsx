import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  function setCursorPos(e: { x: number; y: number }) {
    if (!cursorRef.current) {
      return;
    }
    cursorRef.current.style.top = `${e.y}px`;
    cursorRef.current.style.left = `${e.x}px`;
  }

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setCursorPos({ x: e.clientX, y: e.clientY });
    }

    function handleMouseExitScreen() {
      if (cursorRef.current) {
        cursorRef.current.style.display = "none";
      }
    }

    function handleMouseEnterScreen() {
      if (cursorRef.current) {
        cursorRef.current.style.display = "block";
      }
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseExitScreen);
    document.addEventListener("mouseenter", handleMouseEnterScreen);

    function onHover() {
      if (cursorRef.current) {
        cursorRef.current.classList.add("hovered");
      }
    }

    function onLeave() {
      if (cursorRef.current) {
        cursorRef.current.classList.remove("hovered");
      }
    }

    const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

    let elements: Element[];

    async function enterAndLeaveCursorEvents() {
      await wait(1000);

      const h2 = document.querySelectorAll("h2");
      const links = document.querySelectorAll("a");
      const imgs = document.querySelectorAll("img");
      const inputs = document.querySelectorAll("input");
      const buttons = document.querySelectorAll("button");
      const buttonsRole = document.querySelectorAll('[role="button"]');
      const textareas = document.querySelectorAll("textarea");
      const selects = document.querySelectorAll("select");

      elements = [
        ...h2,
        ...links,
        ...imgs,
        ...inputs,
        ...buttonsRole,
        ...buttons,
        ...textareas,
        ...selects,
      ];

      elements.forEach((element) => {
        element.addEventListener("mouseenter", onHover);
        element.addEventListener("mouseleave", onLeave);
      });
    }

    enterAndLeaveCursorEvents();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);

      wait(1000).then(() => {
        elements.forEach((element) => {
          element.removeEventListener("mouseenter", onHover);
          element.removeEventListener("mouseleave", onLeave);
        });
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor fixed z-[99999999] border border-white bg-white w-3 h-3 -top-6 -left-6 rounded-full pointer-events-none transform translate-x-[-50%] translate-y-[-50%] mix-blend-difference"
      ></div>
    </>
  );
}
