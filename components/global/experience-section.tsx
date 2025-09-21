"use client";

import { useState } from "react";

const experiences = [
  {
    company: "dti digital (flow)",
    role: "Júnior em Desenvolvimento de Software",
    period: "SET 2022 - JUL 2023",
    achievements: [
      "Refatorei um sistema legado de planejamento da empresa VLI logística, melhorando a performance e reduzindo custos operacionais.",
      "Migrei um banco de dados legado, melhorando a performace das consultas e também restabelecendo a integridade dos dados.",
    ],
  },
  {
    company: "dti digital (nee)",
    role: "Pleno em Desenvolvimento de Software",
    period: "JAN 2024 - JUL 2025",
    achievements: [
      "Refatorei um sistema legado de Fiscal da empresa VLI logística, melhorando usabilidade e performance.",
      "Implementei novas funcionalidades em um sistema de gestão fiscal, atendendo às necessidades dos usuários e melhorando a eficiência operacional.",
    ],
  },
  {
    company: "dti digital (Banco Inter)",
    role: "Pleno em Desenvolvimento de Software",
    period: "JUL 2025 - PRESENTE",
    achievements: [
      "Estou refatorando um sistema legado onboarding para cadastro de empresas PJs americanas, melhorando a performance e reduzindo custos operacionais.",
      "Implementei novas funcionalidades em um sistema de gestão fiscal, atendendo às necessidades dos usuários e melhorando a eficiência operacional.",
    ],
  },
];

export const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">Minha experiência:</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Tabs Navigation */}
        <div className="flex flex-col lg:flex-col lg:min-w-[200px]">
          <div className="flex flex-col lg:flex-col gap-2 lg:gap-1 w-full">
            {experiences.map((exp, index) => (
              <button
                key={`${exp.company}-${exp.period}`}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 text-left text-sm font-medium transition-colors border-l-2 whitespace-normal ${
                  activeTab === index
                    ? "border-zinc-500 bg-zinc-500/10 text-zinc-700"
                    : "border-border hover:border-zinc-500/50 hover:bg-zinc-500/5 text-muted-foreground hover:text-foreground"
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="flex-1 min-h-[400px]">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.period}`}
              className={`${
                activeTab === index ? "block" : "hidden"
              } animate-in fade-in duration-200`}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {exp.role}{" "}
                  <span className="text-muted-foreground">@ {exp.company}</span>
                </h3>
                <p className="text-muted-foreground">{exp.period}</p>
              </div>

              <ul className="space-y-4">
                {exp.achievements.map((achievement) => (
                  <li
                    key={achievement.substring(0, 30)}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-zinc-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {achievement}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
