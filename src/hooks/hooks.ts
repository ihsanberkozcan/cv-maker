import { RefObject, useEffect } from "react";
export const useOnClickOutside = (
  ref: RefObject<HTMLDivElement>,
  buttonRef: RefObject<HTMLButtonElement>,
  handler: (event: Event) => void
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref.current;
      if (!el || el.contains(event.target as Node)) {
        return;
      }
      if (
        event.target instanceof Element &&
        event.target == buttonRef.current
      ) {
        return;
      }
      
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};