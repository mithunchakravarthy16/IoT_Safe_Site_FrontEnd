import { useState, useEffect } from "react";

export default function useWindowDimensions(): any {
  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions() {
    const width : number | null = hasWindow ? window.innerWidth : null;
    const height : number | null = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const handleResize = () => {
    setWindowDimensions(getWindowDimensions());
  };

  useEffect(() => {
    if (hasWindow) {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}
