import { useEffect, useState, useRef } from "react";

export function useTypeText(
  textToType: string,
  typingSpeed: number,
) {
  const [typedText, setTypedText] = useState("");
  const currentRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedText(textToType.slice(0, currentRef.current + 1));
      currentRef.current++;
      if (currentRef.current === textToType.length) {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [textToType, typingSpeed]);

  return typedText;
}