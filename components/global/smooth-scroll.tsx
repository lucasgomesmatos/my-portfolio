"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    // Configurar navegação por scroll wheel
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;
    let lastScrollTime = 0;
    const scrollCooldown = 800; // Tempo mínimo entre scrolls

    const scrollToSection = (targetSection: Element) => {
      const targetY =
        targetSection.getBoundingClientRect().top + window.scrollY;

      // Usar smooth scroll nativo
      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });

      // Reset flag após animação
      setTimeout(() => {
        isScrolling = false;
      }, 1000);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const currentTime = Date.now();

      // Verificar cooldown
      if (currentTime - lastScrollTime < scrollCooldown) {
        return;
      }

      if (isScrolling) return;

      // Verificar se o scroll é significativo (evitar micro movimentos)
      if (Math.abs(e.deltaY) < 10) return;

      isScrolling = true;
      lastScrollTime = currentTime;

      const sections = document.querySelectorAll(".scroll-section");
      let targetSection: Element | null = null;

      // Encontrar a seção atual com mais precisão
      let currentSectionIndex = -1;
      const viewportCenter = window.innerHeight / 2;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;

        // Verificar se o centro da seção está próximo do centro da viewport
        if (Math.abs(sectionCenter - viewportCenter) < window.innerHeight / 2) {
          currentSectionIndex = index;
        }
      });

      // Se não encontrou seção atual, usar a mais próxima
      if (currentSectionIndex === -1) {
        let minDistance = Infinity;
        sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          if (distance < minDistance) {
            minDistance = distance;
            currentSectionIndex = index;
          }
        });
      }

      // Determinar próxima seção baseado na direção do scroll
      if (e.deltaY > 0) {
        // Scroll para baixo - próxima seção
        if (currentSectionIndex < sections.length - 1) {
          targetSection = sections[currentSectionIndex + 1];
        }
      } else {
        // Scroll para cima - seção anterior
        if (currentSectionIndex > 0) {
          targetSection = sections[currentSectionIndex - 1];
        }
      }

      if (targetSection) {
        scrollToSection(targetSection);
      } else {
        isScrolling = false;
      }

      // Timeout de segurança
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 1200);
    };

    // Adicionar event listeners
    window.addEventListener("wheel", handleWheel, { passive: false });

    // Adicionar navegação por teclado
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;

      let direction = 0;

      switch (e.key) {
        case "ArrowDown":
        case "PageDown":
        case " ": // Spacebar
          e.preventDefault();
          direction = 1;
          break;
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          direction = -1;
          break;
        default:
          return;
      }

      if (direction !== 0) {
        const fakeWheelEvent = new WheelEvent("wheel", {
          deltaY: direction > 0 ? 100 : -100,
        });
        handleWheel(fakeWheelEvent);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return null;
}
