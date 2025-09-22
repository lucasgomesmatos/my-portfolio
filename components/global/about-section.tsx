"use client";

import { motion } from "framer-motion";

export const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center px-4 gap-6 max-w-4xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="text-center" variants={itemVariants}>
        <h2 className="text-3xl font-semibold mb-4">Sobre mim</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Sou um desenvolvedor apaixonado por criar soluções que fazem a
          diferença na vida das pessoas. Com experiência em desenvolvimento de
          APIs e Interfaces modernas, sempre busco aprender novas tecnologias e
          aplicar as melhores práticas para entregar produtos de qualidade.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        variants={containerVariants}
      >
        <motion.div
          className="text-center p-6 rounded-lg border border-gray-200 dark:border-gray-700"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            transition: { duration: 0.2 },
          }}
        >
          <h3 className="text-xl font-medium mb-2">Frontend</h3>
          <p className="text-gray-600 dark:text-gray-300">
            React, Next.js, TypeScript e Tailwind CSS
          </p>
        </motion.div>

        <motion.div
          className="text-center p-6 rounded-lg border border-gray-200 dark:border-gray-700"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            transition: { duration: 0.2 },
          }}
        >
          <h3 className="text-xl font-medium mb-2">Backend</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Node.js, Spring Boot, Banco de Dados SQL/NoSQL e API RESTful
          </p>
        </motion.div>

        <motion.div
          className="text-center p-6 rounded-lg border border-gray-200 dark:border-gray-700"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            transition: { duration: 0.2 },
          }}
        >
          <h3 className="text-xl font-medium mb-2">Ferramentas</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Git, Docker, Linux, CI/CD, AWS e etc.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
