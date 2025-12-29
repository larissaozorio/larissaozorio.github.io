# 🎨 Portfólio Larissa - Versão Estática

Um portfólio profissional moderno e elegante, desenvolvido com React, Tailwind CSS e Vite. **Pronto para ser deployado no GitHub Pages.**

## 🎨 Design e Conceito

O site foi desenvolvido seguindo a filosofia de **Modernismo Tipográfico com Geometria Limpa**, transmitindo:

- **Sofisticação:** Hierarquia tipográfica clara e espaço em branco generoso
- **Autoridade:** Paleta de cores com cinza chumbo como dominante
- **Criatividade:** Laranja vibrante como accent estratégico
- **Clareza:** Organização limpa da trajetória multidisciplinar

### Paleta de Cores

- **Cinza Chumbo:** #2A2A2A (textos, headers, autoridade)
- **Laranja:** #FF6B35 (CTAs, accents, energia)
- **Amarelo Sutil:** #FFF8DC (backgrounds delicados)
- **Branco:** #FFFFFF (fundo principal)
- **Cinza Claro:** #F5F5F5 (separações, cards)

### Tipografia

- **Display:** Playfair Display (headlines, impacto)
- **Body:** Poppins (legibilidade, modernidade)

## 📁 Estrutura do Projeto

```
site-larissa/
├── client/
│   ├── public/           # Arquivos estáticos
│   │   └── images/       # Imagens do site
│   ├── src/
│   │   ├── pages/        # Páginas do site
│   │   │   ├── Home.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── Sobre.tsx
│   │   │   ├── Formacao.tsx
│   │   │   ├── Psique.tsx (Login)
│   │   │   ├── Dashboard.tsx
│   │   │   └── NotFound.tsx
│   │   ├── components/   # Componentes reutilizáveis
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── contexts/     # React contexts
│   │   ├── App.tsx       # Router principal
│   │   ├── main.tsx      # Entry point
│   │   └── index.css     # Estilos globais
│   └── index.html        # HTML principal
├── package.json
└── README.md
```

## 🚀 Como Usar

### 1. Pré-requisitos

- Node.js v18+
- pnpm (ou npm/yarn)

### 2. Instalação

```bash
# Extrair o arquivo
unzip site-larissa.zip
cd site-larissa

# Instalar dependências
pnpm install
```

### 3. Desenvolvimento Local

```bash
pnpm dev
```

O site estará disponível em `http://localhost:5173`

### 4. Build para Produção

```bash
pnpm build
```

Os arquivos estáticos serão gerados em `dist/`

## 📤 Deploy no GitHub Pages

### Opção 1: Automático com GitHub Actions (Recomendado)

1. Crie um arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 10.4.1
          
      - name: Install dependencies
        run: pnpm install
        
      - name: Build
        run: pnpm build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. Faça push para a branch `main`
3. GitHub Actions fará o deploy automaticamente

### Opção 2: Manual

```bash
# Build
pnpm build

# Copiar arquivos de dist/ para a raiz ou para a branch gh-pages
# Depois fazer push
```

### Configurar GitHub Pages

1. Vá para **Settings** do repositório
2. Navegue até **Pages**
3. Em "Source", selecione **Deploy from a branch**
4. Escolha a branch `gh-pages` e pasta `/ (root)`
5. Salve

Seu site estará disponível em: `https://larissaozorio.github.io`

## 🛠️ Comandos Disponíveis

```bash
pnpm dev       # Inicia servidor de desenvolvimento
pnpm build     # Cria build de produção
pnpm preview   # Visualiza build localmente
pnpm check     # Verifica erros TypeScript
pnpm format    # Formata código com Prettier
```

## 📄 Páginas do Site

### 1. **Home** (`/`)
- Apresentação impactante com headline e subtítulo
- Portfólio em destaque com filtros por categoria
- Seção de estatísticas (anos de experiência, projetos, áreas)
- CTAs para contato e portfólio completo

### 2. **Portfólio** (`/portfolio`)
- Visualização completa de projetos
- Filtros por categoria (Arte/Teatro, Design, Marketing, Tecnologia)
- Modal com detalhes de cada projeto
- Informações de cliente, ano e descrição completa

### 3. **Sobre** (`/sobre`)
- Apresentação detalhada da trajetória profissional
- Descrição das 4 áreas de expertise
- Metodologia de trabalho em 5 etapas
- CTA para contato

### 4. **Formação** (`/formacao`)
- Formação artística (3 cursos/certificações)
- Formação tecnológica (3 cursos/certificações)
- Formação em marketing (3 cursos/certificações)
- Seção de competências principais



## ✨ Características

- ✨ **Design Minimalista Elegante** - Tipografia Poppins, paleta cinza chumbo + laranja
- 📱 **Totalmente Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- ⚡ **Performance Otimizada** - Vite + React 19 para carregamento ultra-rápido
- 🎯 **Navegação Intuitiva** - Menu limpo e CTAs estratégicos
- 📊 **Portfólio Filtrável** - Visualize projetos por categoria
- 🎬 **Animações Suaves** - Transições elegantes e hover effects

## 🛠️ Tecnologias Utilizadas

- **React 19:** Framework frontend
- **TypeScript:** Tipagem estática
- **Tailwind CSS 4:** Utilitários CSS
- **Vite:** Build tool e dev server
- **Wouter:** Roteamento leve
- **Lucide React:** Ícones
- **shadcn/ui:** Componentes UI

## 📝 Notas de Desenvolvimento

### Customização

Para editar informações do portfólio:

1. **Projetos:** Edite o array `projects` em `client/src/pages/Home.tsx` e `Portfolio.tsx`
2. **Sobre:** Atualize o conteúdo em `client/src/pages/Sobre.tsx`
3. **Formação:** Modifique o objeto `formation` em `client/src/pages/Formacao.tsx`
4. **Contato:** Atualize emails e telefones em `Header.tsx` e `Footer.tsx`

### Cores e Estilos

Todas as cores e estilos globais estão definidos em `client/src/index.css`. Modifique as variáveis CSS para alterar a paleta de cores do site.

### Adicionar Imagens

1. Coloque as imagens em `client/public/images/`
2. Referencie-as com caminhos absolutos: `/images/nome-da-imagem.jpg`

## 🌐 Domínio Personalizado

Para usar um domínio personalizado no GitHub Pages:

1. Crie arquivo `CNAME` em `client/public/`:
```
seudominio.com
```

2. Configure o domínio nas configurações do GitHub Pages
3. Atualize DNS do seu registrador

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- **Vite**: Build ultra-rápido
- **React 19**: Renderização otimizada
- **Tailwind CSS**: CSS purificado (apenas classes usadas)
- **Code Splitting**: Carregamento eficiente

## 🐛 Troubleshooting

**Porta 5173 em uso:**
```bash
pnpm dev -- --port 3000
```

**Build com erro:**
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

**GitHub Pages não atualiza:**
- Limpe cache do navegador (Ctrl+Shift+Delete)
- Aguarde alguns minutos pelo deploy

---

**Desenvolvido com ❤️ para Larissa**
