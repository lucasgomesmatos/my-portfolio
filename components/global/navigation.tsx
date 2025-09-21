"use client";

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
      const scrollTop = window.scrollY;

      // Se preventMinimize estiver ativo, não muda o estado na primeira vez
      if (preventMinimize) {
        setPreventMinimize(false); // Remove a prevenção para próximos scrolls
        return;
      }

      setIsScrolled(scrollTop > 50);

      // Fecha o menu expandido ao fazer scroll
      if (scrollTop > 50) {
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [preventMinimize]);

  const handleSectionClick = (sectionId: string) => {
    // Scroll to section if it exists
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Previne a minimização no próximo scroll após clicar em uma seção
      setPreventMinimize(true);
    }
    // Fecha o menu expandido após navegar
    setIsExpanded(false);
  };

  const handleNavClick = () => {
    if (isScrolled) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <nav
      className={`fixed left-1/2 h-12 transform -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled && !isExpanded ? "top-0" : "top-0 mt-4"}`}
    >
      {/* Estado normal (no topo) ou expandido */}
      {(!isScrolled || isExpanded) && (
        <div className="backdrop-blur-sm rounded-full shadow-full border">
          <div className="flex items-center space-x-1">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => handleSectionClick(section.id)}
                className="px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out cursor-pointer"
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Estado minimalizado (durante scroll) */}
      {isScrolled && !isExpanded && (
        <button
          type="button"
          className="backdrop-blur-sm rounded-b-full w-72 md:w-96 flex justify-center shadow-full border cursor-pointer transition-all ease-in-out "
          onClick={handleNavClick}
          aria-label="Expandir menu de navegação"
        >
          <div className="px-4 py-3">
            <div className="w-28 h-1.5 bg-primary rounded-full" />
          </div>
        </button>
      )}

      {/* Overlay para fechar quando expandido */}
      {isExpanded && (
        <button
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
        />
      )}
    </nav>
  );
}
