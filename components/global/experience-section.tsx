"use client";

import { AnimatePresence, motion } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const tabVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const achievementVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.div
      className="w-full max-w-6xl mx-auto px-4 py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div className="text-center mb-12" variants={tabVariants}>
        <h2 className="text-3xl font-semibold mb-4">Minha experiência:</h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Tabs Navigation */}
        <motion.div
          className="flex flex-col lg:flex-col lg:min-w-[200px]"
          variants={containerVariants}
        >
          <div className="flex flex-col lg:flex-col gap-2 lg:gap-1 w-full">
            {experiences.map((exp, index) => (
              <motion.button
                key={`${exp.company}-${exp.period}`}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 text-left text-sm font-medium transition-colors border-l-2 whitespace-normal ${
                  activeTab === index
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border hover:border-primary/50 hover:bg-primary/5 text-muted-foreground hover:text-foreground"
                }`}
                variants={tabVariants}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                {exp.company}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <div className="flex-1 min-h-[400px] relative">
          <AnimatePresence mode="wait">
            {experiences.map(
              (exp, index) =>
                activeTab === index && (
                  <motion.div
                    key={`${exp.company}-${exp.period}`}
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute inset-0"
                  >
                    <motion.div
                      className="mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        {exp.role}{" "}
                        <span className="text-muted-foreground">
                          @ {exp.company}
                        </span>
                      </h3>
                      <p className="text-muted-foreground">{exp.period}</p>
                    </motion.div>

                    <ul className="space-y-4">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievement.substring(0, 30)}
                          className="flex items-start gap-3"
                          custom={achievementIndex}
                          variants={achievementVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          <motion.div
                            className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              delay: achievementIndex * 0.1 + 0.3,
                              duration: 0.3,
                            }}
                          />
                          <p className="text-muted-foreground leading-relaxed text-base">
                            {achievement}
                          </p>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ),
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
