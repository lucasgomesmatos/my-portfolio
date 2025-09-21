"use client";

export function Navigation() {
  const sections = [
    { id: "sobre", label: "Sobre" },
    { id: "experiencia", label: "Experiência" },
    { id: "cases", label: "Cases" },
  ];

  const handleSectionClick = (sectionId: string) => {
    // Scroll to section if it exists
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className=" backdrop-blur-sm rounded-full shadow-full border">
        <div className="flex items-center space-x-1">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => handleSectionClick(section.id)}
              className="px-6 py-3 rounded-full  font-semibold transition-all duration-300 ease-in-out "
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
