import { useEffect, useState } from "react";

const useScreen = () => {
  const [width, setWidth] = useState(0);
  const isMobile = width <= 425;
  const isTablet = width > 425 && width <= 1024;
  const isDesktop = width > 1024 && width <= 1536;
  const isLarge = width > 1536;

  const sizeHandler = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", sizeHandler);
    return () =>
      window.removeEventListener("resize", sizeHandler);
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLarge,
  };
};

export default useScreen;
