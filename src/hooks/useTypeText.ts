import { useEffect, useState, useRef } from "react";

export function useTypeText(
  textToType: string,
  typingSpeed: number,
  stopAt?: number, // Optional: index to stop at (exclusive)
  paused?: boolean // New: control pause/resume
) {
  const [typedText, setTypedText] = useState("");
  const currentRef = useRef(0);

  useEffect(() => {
    if (paused) return; // Pause typing if paused is true

    const maxLength = stopAt !== undefined ? Math.min(stopAt, textToType.length) : textToType.length;
    const interval = setInterval(() => {
      setTypedText(textToType.slice(0, currentRef.current + 1));
      currentRef.current++;
      if (currentRef.current === maxLength) {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [textToType, typingSpeed, stopAt, paused]);

  // Resume typing when paused becomes false and not finished
  useEffect(() => {
    if (!paused && typedText.length < (stopAt ?? textToType.length)) {
      currentRef.current = typedText.length;
    }
  }, [paused, typedText, stopAt, textToType.length]);

  return typedText;
}