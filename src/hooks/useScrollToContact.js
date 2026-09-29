import { useRef } from "react";

export function useScrollToContact() {
  const nameInputRef = useRef(null);

  function scrollToContact() {
    const input = nameInputRef.current;

    if (!input) {
      return;
    }

    input.focus({ preventScroll: true });
    input.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  return { nameInputRef, scrollToContact };
}
