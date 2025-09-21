# Custom Cursor

Este projeto agora inclui um cursor customizado moderno e interativo que substitui o cursor padrão do navegador.

## Funcionalidades

- **Cursor Principal**: Um círculo que segue o mouse com uma animação suave
- **Map Pin Cursor**: Um pin de mapa (marcador de localização) que segue mais de perto o mouse
- **Estados Interativos**:
  - **Hover**: O cursor se expande e o pin faz uma animação de bounce quando passa por elementos clicáveis
  - **Click**: O cursor se contrai e o pin faz uma animação de click
  - **Visibilidade**: Ambos os cursors desaparecem quando o mouse sai da janela

## Como Usar

### 1. Elementos Interativos Automáticos

O cursor automaticamente detecta e reage aos seguintes elementos:

- Links (`<a>`)
- Botões (`<button>`)
- Elementos com `onclick`
- Elementos com `cursor: pointer`

### 2. Classes CSS Utilitárias

Você pode adicionar classes específicas para controlar o comportamento do cursor:

```tsx
// Para elementos que devem ativar o estado hover
<div className="cursor-hover">
  Elemento interativo
</div>

// Para áreas de texto
<div className="cursor-text">
  Área de texto
</div>

// Para elementos arrastáveis
<div className="cursor-grab">
  Elemento arrastável
</div>

// Para quando estiver arrastando
<div className="cursor-grabbing">
  Sendo arrastado
</div>
```

### 3. Atributo data-cursor-hover

Você também pode usar o atributo `data-cursor-hover` em qualquer elemento:

```tsx
<div data-cursor-hover>Este elemento ativará o estado hover</div>
```

## Responsividade

O cursor customizado é automaticamente desabilitado em dispositivos touch (tablets e smartphones) para manter a experiência nativa desses dispositivos.

## Personalização

### Cores e Tamanhos

As cores e tamanhos do cursor podem ser personalizados através das variáveis CSS no arquivo `globals.css`:

```css
.custom-cursor {
  background: var(--primary); /* Cor do cursor principal */
  width: 20px; /* Tamanho padrão */
  height: 20px;
}

.custom-cursor.hover {
  width: 40px; /* Tamanho quando hover */
  height: 40px;
  border: 2px solid var(--primary); /* Borda no hover */
}

.custom-cursor-dot {
  background: var(--primary); /* Cor do pin do mapa */
  width: 16px; /* Largura do pin */
  height: 20px; /* Altura do pin */
}

.custom-cursor-dot.hover {
  background: var(--accent); /* Cor do pin no hover */
  width: 20px; /* Tamanho expandido no hover */
  height: 24px;
}
```

### Performance

O cursor usa `requestAnimationFrame` para animações suaves e `mix-blend-mode: difference` para criar efeitos visuais interessantes sem impactar a performance.

## Estrutura dos Arquivos

- `components/global/custom-cursor.tsx` - Componente principal do cursor
- `lib/hooks/use-cursor.ts` - Hook para gerenciar estados do cursor
- `app/globals.css` - Estilos CSS do cursor
- `app/layout.tsx` - Integração do cursor no layout principal
