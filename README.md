# 💼 My Portfolio

Um portfólio moderno e responsivo desenvolvido com Next.js 15, TypeScript e Tailwind CSS, apresentando minhas habilidades, experiências e projetos.

## ✨ Funcionalidades

- 🎨 Design moderno e responsivo
- ⚡ Performance otimizada com Next.js 15 e Turbopack
- 🎯 Componentes reutilizáveis com Radix UI
- 🎪 Animações suaves com tw-animate-css
- 📱 Totalmente responsivo para todos os dispositivos
- 🔧 Configuração de linting e formatação com Biome

## 🛠️ Tecnologias Utilizadas

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI:** [Radix UI](https://www.radix-ui.com/)
- **Ícones:** [Tabler Icons](https://tabler-icons.io/) e [Lucide React](https://lucide.dev/)
- **Linting/Formatação:** [Biome](https://biomejs.dev/)

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) ou [pnpm](https://pnpm.io/)

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/lucasgomesmatos/portfolio.git
cd portfolio
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Execute o projeto em modo de desenvolvimento

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

O projeto estará disponível em [http://localhost:3000](http://localhost:3000).

## 📝 Scripts disponíveis

- `npm run dev` - Executa o projeto em modo de desenvolvimento com Turbopack
- `npm run build` - Cria uma build de produção
- `npm run start` - Executa a aplicação em modo de produção
- `npm run lint` - Executa o linting do código com Biome
- `npm run format` - Formata o código automaticamente com Biome

## 📁 Estrutura do projeto

```
my-portfolio/
├── app/                    # App Router do Next.js
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes React
│   ├── global/           # Componentes específicos do projeto
│   │   ├── about-section.tsx
│   │   ├── experience-section.tsx
│   │   ├── hero-section.tsx
│   │   └── navbar.tsx
│   └── ui/               # Componentes de UI reutilizáveis
│       └── button.tsx
├── lib/                  # Utilitários e configurações
│   └── utils.ts
├── public/               # Arquivos estáticos
└── ...                   # Arquivos de configuração
```

## 🎨 Customização

### Cores e Tema

As cores e temas podem ser customizados através do arquivo `globals.css` e das configurações do Tailwind CSS.

### Componentes

Os componentes estão organizados em duas categorias:

- **global/**: Componentes específicos do portfólio
- **ui/**: Componentes reutilizáveis baseados em Radix UI

## 🚢 Deploy

### Vercel (Recomendado)

O deploy mais fácil é usando a [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push na branch principal

### Outros provedores

O projeto também pode ser deployado em outros provedores como:

- [Netlify](https://netlify.com/)
- [Railway](https://railway.app/)
- [AWS Amplify](https://aws.amazon.com/amplify/)

Consulte a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📧 Contato

Lucas Gomes Matos - [GitHub](https://github.com/lucasgomesmatos)

Link do projeto: [https://github.com/lucasgomesmatos/portfolio](https://github.com/lucasgomesmatos/portfolio)

---

Feito com ❤️ por [Lucas Gomes Matos](https://github.com/lucasgomesmatos)
