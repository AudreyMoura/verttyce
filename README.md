# Verttyce

Site institucional desenvolvido para a Verttyce, empresa especializada em terceirização estratégica de mão de obra operacional, facilities e soluções corporativas.

Projeto desenvolvido utilizando HTML5, CSS3 e JavaScript Vanilla, priorizando performance, acessibilidade, SEO e responsividade.

---

# Demonstração

https://audreymoura.github.io/verttyce/

---

# Objetivos do Projeto

- Apresentação institucional
- Geração de leads
- Captação via WhatsApp
- Navegação fluida
- Layout responsivo
- Boa performance
- Estrutura preparada para expansão futura da Holding Verttyce

---

# Tecnologias Utilizadas

## HTML5

Estrutura semântica utilizando:

- header
- nav
- main
- section
- article
- footer
- button
- picture
- img
- ul
- li

Foram utilizados atributos de acessibilidade (ARIA), textos alternativos e organização semântica visando SEO.

---

## CSS3

O projeto utiliza CSS puro.

Sem Bootstrap.

Sem Tailwind.

Sem frameworks.

Principais recursos utilizados:

- CSS Variables
- Flexbox
- CSS Grid
- Media Queries
- Mobile First
- Position Sticky
- Backdrop Filter
- Gradientes
- Hover Animations
- Transitions
- Transform
- Box Shadow
- Blur
- Object-fit
- Responsive Images

---

## JavaScript

JavaScript Vanilla (ES6).

Sem JQuery.

Sem React.

Sem Vue.

Sem Angular.

A lógica é baseada em:

- Event Listeners
- DOM Manipulation
- Dataset API
- Objects
- Arrays
- Template Rendering
- Accessibility Events

---

# Arquitetura

```
/
│
├── index.html
├── style.css
├── script.js
│
└── src/
    ├── imagens
    ├── ícones
    ├── logo
    └── hero
```

---

# Organização das Seções

## Header

- Logo
- Navegação
- Mega Menu
- CTA WhatsApp

---

## Hero

Banner principal contendo:

- Headline
- Subheadline
- CTA
- Background responsivo
- Overlay para contraste

---

## Sobre

Linha de processo composta por:

- Recrutamento
- Contratação
- Treinamento
- Gestão
- Substituição
- Garantia

Representada como timeline responsiva.

---

## Segmentos

Cards para:

- Hospitalidade
- Food Service
- Construção Civil
- Indústria
- Logística
- Facilities

Cada card abre um modal com informações específicas.

---

## Modal Inteligente

Todo o conteúdo é alimentado pelo JavaScript.

Cada segmento possui:

- título
- descrição
- ícone
- lista de entregas

O modal é montado dinamicamente.

---

## Profissionais

Grid institucional apresentando cargos fornecidos para cada segmento.

---

## Diferenciais

Cards contendo:

- reposição rápida
- SST
- compliance
- cobertura nacional
- implantação
- gestão completa

---

## Indicadores

Barra institucional apresentando números da empresa.

---

## Presença Nacional

Mapa institucional.

---

## Empresas do Grupo

Mega Menu preparado para expansão da holding.

Atualmente contém:

- Verttyce Pessoas
- Verttyce SST
- Verttyce Facilities
- Verttyce Tecnologia

Estrutura preparada para futuras empresas.

---

## Rodapé

Informações institucionais.

---

# Funcionalidades

## Mega Menu

Dropdown totalmente customizado.

Sem bibliotecas.

Inclui:

- animações
- hover
- centralização automática
- cards internos

---

## Modal

Construído completamente em JavaScript.

Funcionalidades:

- abertura dinâmica
- fechamento por botão
- fechamento clicando fora
- fechamento via ESC
- bloqueio do scroll

---

## Responsividade

O projeto utiliza Mobile First.

Breakpoints principais:

- Mobile
- Tablet
- Desktop
- Desktop Wide

Layouts adaptam automaticamente:

- grids
- imagens
- tipografia
- espaçamentos

---

# Acessibilidade

Foram implementados:

- aria-label
- aria-hidden
- alt em imagens
- navegação semântica
- contraste elevado
- botão Skip Content
- fechamento por teclado

---

# SEO

Estrutura preparada para indexação.

Inclui:

- Title
- Description
- HTML semântico
- Hierarquia H1 → H2 → H3
- ALT nas imagens
- Navegação limpa

---

# Performance

Sem frameworks.

Sem dependências pesadas.

Todo o projeto utiliza apenas:

- HTML
- CSS
- JavaScript

O resultado é:

- carregamento rápido
- baixo consumo de memória
- excelente compatibilidade

---

# Fontes

Fonte principal:

Inter

Fallback:

```
system-ui
-apple-system
sans-serif
```

---

# Biblioteca Externa

Font Awesome

https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css

Utilizada apenas para ícones.

---

# Paleta

Azul Institucional

```
#0F2B5C
```

Verde

```
#22C55E
```

Verde Claro

```
#4ADE80
```

Cinza

```
#64748B
```

Branco

```
#FFFFFF
```

---

# Estrutura CSS

Organizado em módulos:

- Reset
- Variáveis
- Header
- Navegação
- Mega Menu
- Hero
- Sobre
- Processo
- Serviços
- Modal
- Profissionais
- Benefícios
- Indicadores
- Footer
- Responsividade

São aproximadamente 1900 linhas de CSS.

---

# Estrutura JavaScript

Arquivo único contendo:

- Base de dados dos segmentos
- Controle do Modal
- Eventos
- Fechamento
- Controle de Scroll

A lógica utiliza objetos para permitir expansão simples.

Novos segmentos podem ser adicionados alterando apenas um objeto JavaScript.

---

# Compatibilidade

Compatível com:

- Chrome
- Edge
- Firefox
- Safari
- Opera
- Navegadores Mobile

---

# Melhorias Futuras

- Integração com CRM
- CMS
- Blog institucional
- LGPD Cookie Banner
- Formulário próprio
- API WhatsApp Business
- Google Maps integrado
- Painel administrativo
- Sistema multilíngue
- Animações por Scroll
- Lazy Loading avançado

---

# Licença

Projeto desenvolvido exclusivamente para a Verttyce como um desafio técnico sem fins lucrativos.
Todos os direitos reservados.
