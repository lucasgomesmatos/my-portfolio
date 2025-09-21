export const AboutSection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 gap-6 max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Sobre mim</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Sou um desenvolvedor apaixonado por criar soluções que fazem a
          diferença na vida das pessoas. Com experiência em desenvolvimento de
          APIs e Interfaces modernas, sempre busco aprender novas tecnologias e
          aplicar as melhores práticas para entregar produtos de qualidade.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <div className="text-center p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-medium mb-2">Frontend</h3>
          <p className="text-gray-600 dark:text-gray-300">
            React, Next.js, TypeScript e Tailwind CSS
          </p>
        </div>

        <div className="text-center p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-medium mb-2">Backend</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Node.js, Spring Boot, Banco de Dados SQL/NoSQL e API RESTful
          </p>
        </div>

        <div className="text-center p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-medium mb-2">Ferramentas</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Git, Docker, Linux, CI/CD, AWS e etc.
          </p>
        </div>
      </div>
    </div>
  );
};
