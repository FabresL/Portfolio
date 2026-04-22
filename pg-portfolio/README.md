# Portfólio Fabrestack

Página de portfólio da Fabrestack feita com HTML, CSS e JavaScript puro.

## Objetivo

Apresentar modelos de sites e canais de contato de forma rápida, leve e visualmente profissional.

## Funcionalidades

- Logomarca principal no topo
- Favicon com cubo da marca
- Sessão de modelos com links diretos
- Sessão de contato com WhatsApp e Instagram
- Botão flutuante de WhatsApp
- Animação de entrada e efeito de clique nos cards
- Estilo responsivo para desktop e celular

## Estrutura

```text
Portf-lio-main/
├─ index.html
├─ style.css
├─ script.js
├─ README.md
└─ assets/
   ├─ fabrestack-branco-bg.png
   ├─ fabrestack-laranja-bg.png
   ├─ favicon-cubo.svg
   └─ fabrestack-logo.svg
```

## Personalização rápida

### Alterar links
No `index.html`, edite os `href` dos elementos com classe `cartao`.

### Alterar textos
No `index.html`, ajuste os textos dentro de:
- `cartao-titulo`
- `rotulo-secao`

### Ajustar bordas
No `style.css`, ajuste os valores:
- `border: 1.6px solid var(--borda);`
- `border-bottom: 1.6px solid var(--borda);`

### Ajustar cores
No `style.css`, seção `:root`:
- `--fundo`
- `--texto-principal`
- `--texto-suave`
- `--borda`

## Publicação

Este projeto pode ser publicado em:
- Vercel
- Netlify
- GitHub Pages

## Autor

Desenvolvido por **Fabrestack**.
