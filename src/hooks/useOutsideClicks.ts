import { useEffect, useRef } from "react";

interface OutsideClickProps {
  handler: () => void;
  listenCapturing?: boolean;
}

export function useOutsideClick({
  handler,
  listenCapturing = true,
}: OutsideClickProps) {
  const ref = useRef();
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }

    document.addEventListener("click", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [handler, listenCapturing]);

  return { ref };
}
