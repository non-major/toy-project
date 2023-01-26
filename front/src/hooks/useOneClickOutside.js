import React, { useEffect } from "react";

const useOneClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (ref.current === event.target) {
        handler();
      }
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

export default useOneClickOutside;
