# Larissa | Portfólio Multidisciplinar

Um site portfólio profissional e elegante que apresenta a trajetória multidisciplinar em Teatro, Design Gráfico, Marketing, Branding e Tecnologia.

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

## 🚀 Como Rodar Localmente

### Pré-requisitos

- Node.js (v18+)
- pnpm (gerenciador de pacotes)

### Instalação

1. **Clone ou extraia o projeto:**
   ```bash
   cd site-larissa
   ```

2. **Instale as dependências:**
   ```bash
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   pnpm dev
   ```

4. **Abra no navegador:**
   - Acesse `http://localhost:3000`

### Comandos Disponíveis

```bash
# Desenvolvimento
pnpm dev          # Inicia servidor de desenvolvimento

# Build
pnpm build        # Cria build de produção

# Preview
pnpm preview      # Visualiza build de produção

# Verificação
pnpm check        # Verifica erros de TypeScript
pnpm format       # Formata código com Prettier
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

### 5. **Psique** (`/psique`)
- Página de login com autenticação simples
- Credenciais de teste incluídas
- Design minimalista e elegante

### 6. **Dashboard** (`/dashboard`)
- Área privada para usuários autenticados
- Resumo de projetos, clientes e experiência
- Informações importantes (contato, localização, disponibilidade)
- Acesso a conteúdos pessoais (notas, documentos, análises)
- Mensagens recentes

## 🔐 Autenticação

### Credenciais de Teste

- **Usuário:** `larissa`
- **Senha:** `psique2025`

O sistema de autenticação utiliza localStorage para manter o estado de login. As credenciais são verificadas localmente no navegador.

## 🎯 Funcionalidades Principais

✅ **Navegação Responsiva:** Menu adaptável para mobile e desktop
✅ **Portfólio Filtrável:** Filtros por categoria de projeto
✅ **Sistema de Login:** Autenticação simples com Psique
✅ **Dashboard Privado:** Área restrita para usuários autenticados
✅ **Design Elegante:** Modernismo tipográfico com muito espaço em branco
✅ **Animações Suaves:** Transições e hover effects refinados
✅ **Tipografia em Escala:** Hierarquia clara com Playfair Display e Poppins
✅ **Paleta de Cores Estratégica:** Cinza chumbo, laranja e amarelo sutil

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

## 🚀 Deploy

O projeto pode ser facilmente deployado em plataformas como:

- **Vercel:** `vercel deploy`
- **Netlify:** Conecte o repositório Git
- **GitHub Pages:** Configure build estático
- **Manus:** Utilize o botão Publish na interface

## 📞 Contato

Para dúvidas ou sugestões sobre o portfólio, entre em contato através das informações no site.

---

**Desenvolvido com ❤️ usando React, Tailwind CSS e Vite**
