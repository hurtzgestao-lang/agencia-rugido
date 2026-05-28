# Design System — Sócio Estratégico

> Versão 1.0.0 | Atualizado em 2026-03-27

Sistema de design extraído das apresentações do Sócio Estratégico (Max Satiro).

---

## Visão Geral

O design system do Sócio Estratégico segue uma estética **premium escura** com toques de **verde como cor de acento**. A linguagem visual transmite seriedade, estratégia e sofisticação — adequada para um produto de alto valor (R$ 42 mil).

### Características principais

- **Tema escuro** com fundo quase preto (#080706)
- **Verde vibrante** (#35c12e) como cor de destaque
- **Efeitos glass** com blur e transparências sutis
- **Tipografia serifada** para títulos (Season Mix / Playfair Display)
- **Tipografia mono** para labels e metadados (Geist Mono / DM Mono)

---

## Paleta de Cores

### Primitivas (Base)

| Nome | Hex | Uso |
|------|-----|-----|
| Background Dark | `#080706` | Fundo da página |
| Background Base | `#0f0e0c` | Fundo do shell/deck |
| Background Elevated | `#211f1f` | Cards elevados |
| Background Card | `#252422` | Cards padrão |
| Cream | `#efedea` | Texto principal |
| Beige | `#e8dec4` | Acento secundário |
| Green | `#35c12e` | Acento principal |
| Red | `#fa4863` | Erros / Números de problema |
| Gold | `#9a7c3a` | Acento terciário |

### Semânticas (Propósito)

```css
--color-bg-page: #080706;
--color-bg-shell: #0f0e0c;
--color-bg-card: #211f1f;

--color-text-primary: #efedea;
--color-text-secondary: rgba(239, 237, 234, 0.70);
--color-text-muted: rgba(239, 237, 234, 0.50);

--color-accent-primary: #35c12e;
--color-accent-secondary: #e8dec4;

--color-border: rgba(239, 237, 234, 0.08);
```

### Fases (Framework)

| Fase | Cor | Hex |
|------|-----|-----|
| 01 - Sobrevivência | Marrom | `#6b4f2a` |
| 02 - Talentos | Azul | `#2a4f6b` |
| 03 - Organização | Verde | `#2a6b4f` |
| 04 - Excelência | Roxo | `#4a3570` |

---

## Tipografia

### Famílias

| Função | Fonte | Fallback |
|--------|-------|----------|
| Display (títulos) | Season Mix Regular | Georgia, serif |
| Corpo | Inter | -apple-system, sans-serif |
| Mono (labels) | Geist Mono | DM Mono, monospace |

### Escala

| Token | Tamanho | Uso |
|-------|---------|-----|
| Display | `clamp(4rem, 8vw, 7rem)` | Títulos hero |
| Title | `clamp(2.6rem, 5vw, 4.6rem)` | Títulos de seção |
| CTA | `clamp(3rem, 6vw, 5.8rem)` | Títulos de fechamento |
| H3 | `22px` | Subtítulos |
| Body | `16px` | Texto corrido |
| Eyebrow | `13px` | Labels acima de títulos |
| Label | `11px` | Labels de componentes |
| Meta | `12px` | Metadados, navegação |

### Classes de Tipografia

```html
<h1 class="display">Título Hero</h1>
<h2 class="title">Título de Seção</h2>
<h2 class="title title--wide">Título Largo</h2>
<p class="eyebrow">LABEL ACIMA</p>
<p class="lead">Texto de introdução...</p>
<p class="body">Texto corrido...</p>
```

---

## Espaçamento

### Escala Base

| Token | Valor |
|-------|-------|
| `--space-2xs` | 4px |
| `--space-xs` | 8px |
| `--space-sm` | 12px |
| `--space-md` | 16px |
| `--space-lg` | 22px |
| `--space-xl` | 28px |
| `--space-2xl` | 36px |
| `--space-3xl` | 48px |
| `--space-4xl` | 56px |
| `--space-5xl` | 72px |

### Gaps de Grid

| Token | Valor | Uso |
|-------|-------|-----|
| `--gap-xs` | 10px | Pills, rail |
| `--gap-sm` | 12px | Phases, pills |
| `--gap-md` | 16px | Cards, timeline |
| `--gap-lg` | 18px | Grid de cards |
| `--gap-xl` | 22px | Grid principal |

---

## Componentes

### Pill / Tag

Pills são usados para destacar informações rápidas.

```html
<span class="pill">6 meses</span>
<span class="pill">R$ 42 mil</span>
<span class="pill pill--dark">Dark variant</span>
```

**Specs:**
- Min-height: 44px
- Padding: 10px 16px
- Border-radius: 999px (pill shaped)
- Border: 1px solid rgba(239, 237, 234, 0.08)

---

### Glass Panel

Painel com efeito de vidro (blur + transparência).

```html
<div class="glass">
  <!-- conteúdo -->
</div>

<div class="glass glass--highlight">
  <!-- com glow verde -->
</div>
```

**Specs:**
- Padding: 28px
- Border-radius: 22px
- Shadow: 0 30px 80px rgba(0, 0, 0, 0.35)

---

### Card

Card básico para conteúdo.

```html
<div class="card">
  <span class="card__label">Label</span>
  <strong>Conteúdo principal</strong>
</div>

<div class="card card--accent">
  <!-- com acento verde -->
</div>
```

**Specs:**
- Padding: 22px
- Border-radius: 20px
- Background: rgba(239, 237, 234, 0.03)

---

### Signal (Info Block)

Bloco de informação com label e conteúdo.

```html
<div class="signal">
  <span class="signal__label">Posicionamento</span>
  <strong>Não é mentoria genérica.</strong>
</div>
```

---

### Issue Card

Card de problemas com número.

```html
<article class="issue-card">
  <span class="issue-card__number">01</span>
  <h3>Prioridade difusa</h3>
  <p>Descrição do problema...</p>
</article>
```

**Specs:**
- Número em vermelho (#fa4863)
- H3: 22px
- Padding: 22px
- Border-radius: 18px

---

### Phase (Framework 4 Fases)

Linha de fase do framework.

```html
<div class="phase">
  <span>01</span>
  <strong>Sobrevivência</strong>
</div>
```

**Specs:**
- Número em verde (#35c12e)
- Strong: 24px
- Justify-content: space-between

---

### Timeline

Lista temporal com meses/etapas.

```html
<div class="timeline glass">
  <div class="timeline__item">
    <span>Mês 1</span>
    <strong>Diagnóstico e fase atual</strong>
  </div>
  <div class="timeline__item">
    <span>Mês 2</span>
    <strong>Receita e gargalo dominante</strong>
  </div>
</div>
```

---

### Ladder Card

Card da escada de produtos.

```html
<article class="ladder-card">
  <span class="ladder-card__label">Backend</span>
  <h3>Aceleração Sócio Estratégico</h3>
  <p>Descrição do produto...</p>
  <strong class="ladder-card__price">R$ 42 mil</strong>
</article>

<article class="ladder-card ladder-card--core">
  <!-- Versão destacada (core) -->
</article>
```

**Tiers:**
- `ladder__tier--entry`: Front-end (entrada)
- `ladder__tier--core`: Backend principal (destacado com glow verde)
- `ladder__tier--high`: High end (glow bege)

---

### CTA Block

Bloco de call-to-action com fundo claro.

```html
<div class="cta-block">
  <p class="eyebrow eyebrow--dark">Resumo executivo</p>
  <h2 class="cta-title">Título do CTA</h2>
  <p class="cta-copy">Texto de copy...</p>
  <div class="hero-pills hero-pills--dark">
    <span class="pill pill--dark">Pill 1</span>
    <span class="pill pill--dark">Pill 2</span>
  </div>
</div>
```

**Specs:**
- Background: gradiente radial bege
- Padding: 56px
- Border-radius: 28px
- Texto escuro

---

### Pricing Table

Tabela de preços.

```html
<div class="pricing-table">
  <div class="pricing-table__head">Nível</div>
  <div class="pricing-table__head">Produto</div>
  <div class="pricing-table__head">Preço</div>
  <div class="pricing-table__head">Status</div>

  <div class="pricing-table__cell">3</div>
  <div class="pricing-table__cell">Aceleração Sócio Estratégico</div>
  <div class="pricing-table__cell">R$ 42 mil</div>
  <div class="pricing-table__cell">Definido</div>
</div>
```

---

## Layout

### Grid Principal (Split)

```css
.hero-grid,
.split,
.price-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  gap: 36px;
  align-items: center;
}
```

### Grid de Cards

```css
.problem-grid,
.icp-grid,
.deliverables__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}
```

### Grid de 4 Colunas

```css
.axis-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}
```

---

## Navegação

### Topbar

Barra superior sticky com blur.

```html
<header class="topbar">
  <div class="brand">
    <span class="brand__dot"></span>
    <span class="brand__name">Sócio Estratégico</span>
  </div>
  <div class="topbar__meta">Apresentação Estratégica</div>
</header>
```

**Especs:**
- Position: sticky, top: 0
- Backdrop-filter: blur(18px)
- Z-index: 30

### Rail (Navegação Lateral)

Navegação fixa lateral com números.

```html
<aside class="rail">
  <a href="#capa" class="rail__item">01</a>
  <a href="#tese" class="rail__item">02</a>
  <a href="#problema" class="rail__item">03</a>
  <!-- ... -->
</aside>
```

**Especs:**
- Position: fixed, left: 24px, top: 96px
- Item size: 42px x 42px
- Border-radius: 999px (circular)

---

## Efeitos

### Pattern Grid

Grid sutil de fundo.

```css
.pattern {
  position: fixed;
  inset: 14px;
  pointer-events: none;
  opacity: 0.06;
  background-image:
    repeating-linear-gradient(0deg, rgba(239, 237, 234, 0.12) 0, rgba(239, 237, 234, 0.12) 1px, transparent 1px, transparent 56px),
    repeating-linear-gradient(90deg, rgba(239, 237, 234, 0.12) 0, rgba(239, 237, 234, 0.12) 1px, transparent 1px, transparent 56px);
}
```

### Gradient Glow Verde

```css
background: radial-gradient(
  circle at top center,
  rgba(53, 193, 46, 0.12),
  transparent 60%
);
```

### Gradient Glow Bege

```css
background: radial-gradient(
  circle at right top,
  rgba(232, 222, 196, 0.1),
  transparent 45%
);
```

---

## Responsivo

### Breakpoints

| Nome | Largura | Comportamento |
|------|---------|---------------|
| Desktop | > 1100px | Layout completo |
| Tablet | 780px - 1100px | Rail escondido, grids 1 coluna |
| Mobile | < 780px | Stacked, padding reduzido |

### Media Queries

```css
@media (max-width: 1100px) {
  .rail { display: none; }
  .hero-grid, .split, .price-layout { grid-template-columns: 1fr; }
}

@media (max-width: 780px) {
  .problem-grid, .icp-grid, .deliverables__grid { grid-template-columns: 1fr; }
  .cta-block { padding: 30px; }
}
```

---

## Arquivos do Sistema

| Arquivo | Descrição |
|---------|-----------|
| `socio-estrategico-design-system.css` | CSS completo com todos os tokens |
| `socio-estrategico-design-tokens.json` | Tokens em formato JSON |
| `socio-estrategico-design-system.md` | Esta documentação |

---

## Uso Rápido

### Importar

```html
<link rel="stylesheet" href="socio-estrategico-design-system.css">
```

### Estrutura Base

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sócio Estratégico</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Playfair+Display:wght@400;600;700&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="socio-estrategico-design-system.css">
</head>
<body>
  <div class="deck-shell">
    <div class="pattern" aria-hidden="true"></div>
    <!-- conteúdo -->
  </div>
</body>
</html>
```

---

## Créditos

Extraído de:
- `apresentacao-socio-estrategico-icp-ampliado.html`
- `apresentacao-socio-estrategico-icp-ampliado.css`
- `socio-estrategico__apresentacao__v02.html`

Cliente: **Max Satiro**
Projeto: **Sócio Estratégico**
