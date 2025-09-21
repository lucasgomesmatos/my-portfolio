"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [preventMinimize, setPreventMinimize] = useState(false);

  const sections = [
    { id: "sobre", label: "Sobre" },
    { id: "experiencia", label: "Experiência" },
    { id: "cases", label: "Cases" },
  ];

  // Detecta o scroll da página
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      setIsScrolled(scrollTop > 20);

      // Debug para verificar se o scroll está sendo detectado (remover em produção)
      if (
        typeof window !== "undefined" &&
        process.env.NODE_ENV === "development"
      ) {
        console.log("Scroll detected:", {
          scrollTop,
          isScrolled: scrollTop > 20,
        });
      }

      // Se preventMinimize estiver ativo, não fecha o menu expandido
      if (preventMinimize) {
        return;
      }

      // Fecha o menu expandido ao fazer scroll manual
      if (scrollTop > 20 && isExpanded) {
        setIsExpanded(false);
      }
    };

    // Adiciona listeners para diferentes tipos de scroll (incluindo mobile)
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });

    // Chama handleScroll uma vez para definir o estado inicial
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [preventMinimize, isExpanded]);

  const handleSectionClick = (sectionId: string) => {
    // Scroll to section if it exists
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Previne a minimização durante o scroll suave e por mais um tempo
      setPreventMinimize(true);

      // Remove a prevenção após 2 segundos (tempo suficiente para o scroll suave terminar)
      setTimeout(() => {
        setPreventMinimize(false);
      }, 2000);
    }
    // Mantém o menu expandido após navegar (não fecha mais)
    // setIsExpanded(false); // Removido para manter expandido
  };

  const handleNavClick = () => {
    if (isScrolled) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <motion.nav
      className={`fixed left-1/2 h-12 transform -translate-x-1/2 z-50`}
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        top: isScrolled && !isExpanded ? "0px" : "16px",
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        top: { duration: 0.3, ease: "easeInOut" },
      }}
      style={{
        // Garante que funcione em todos os dispositivos
        position: "fixed",
        willChange: "transform, top, opacity",
      }}
    >
      {/* Estado normal (no topo) ou expandido */}
      <AnimatePresence>
        {(!isScrolled || isExpanded) && (
          <motion.div
            className="backdrop-blur-sm rounded-full shadow-full border w-72 md:w-96 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            <div className="flex items-center space-x-1">
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  type="button"
                  onClick={() => handleSectionClick(section.id)}
                  className="px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out cursor-pointer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.1,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  {section.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Estado minimalizado (durante scroll) */}
      <AnimatePresence>
        {isScrolled && !isExpanded && (
          <motion.button
            type="button"
            className="backdrop-blur-sm rounded-b-full w-72 md:w-96 flex justify-center shadow-full border cursor-pointer touch-manipulation"
            onClick={handleNavClick}
            aria-label="Expandir menu de navegação"
            initial={{ opacity: 0, scaleX: 0.5, y: -20 }}
            animate={{ opacity: 1, scaleX: 1, y: 0 }}
            exit={{ opacity: 0, scaleX: 0.5, y: -20 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              scaleX: { duration: 0.3 },
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              // Força exibição no mobile
              display: "flex",
              minHeight: "48px",
              touchAction: "manipulation",
            }}
          >
            <motion.div
              className="px-4 py-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <motion.div
                className="w-28 h-1.5 bg-primary rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
              />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Overlay para fechar quando expandido */}
      <AnimatePresence>
        {isExpanded && (
          <motion.button
            type="button"
            className="fixed inset-0 -z-10"
            aria-label="Fechar menu"
            tabIndex={0}
            onClick={() => setIsExpanded(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIsExpanded(false);
              }
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
