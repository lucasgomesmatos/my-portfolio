import { useEffect, useState } from "react";

/**
 * Hook para detectar se o usuário prefere animações reduzidas
 */
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return prefersReducedMotion;
};

/**
 * Hook para detectar se o dispositivo tem capacidade reduzida (mobile/tablet)
 */
export const useReducedPerformance = () => {
  const [isReducedPerformance, setIsReducedPerformance] = useState(false);

  useEffect(() => {
    // Detecta dispositivos móveis e tablets
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );

    // Detecta conexão lenta
    const connection = (
      navigator as unknown as {
        connection?: { effectiveType?: string; saveData?: boolean };
      }
    ).connection;
    const isSlowConnection =
      connection &&
      (connection.effectiveType === "slow-2g" ||
        connection.effectiveType === "2g" ||
        connection.saveData);

    setIsReducedPerformance(isMobile || Boolean(isSlowConnection));
  }, []);

  return isReducedPerformance;
};

/**
 * Variantes de animação otimizadas baseadas nas preferências do usuário
 */
export const getOptimizedVariants = (
  prefersReducedMotion: boolean,
  isReducedPerformance: boolean,
) => {
  const duration = isReducedPerformance ? 0.3 : 0.6;
  const staggerDelay = isReducedPerformance ? 0.05 : 0.1;

  if (prefersReducedMotion) {
    return {
      container: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.2 },
        },
      },
      item: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
      },
    };
  }

  return {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration,
          delayChildren: 0.2,
          staggerChildren: staggerDelay,
        },
      },
    },
    item: {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration },
      },
    },
    itemHover: isReducedPerformance
      ? {}
      : {
          scale: 1.05,
          transition: { duration: 0.2 },
        },
  };
};
