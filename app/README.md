# Benner Grife - E-commerce Frontend

## 📋 Sobre o Projeto

Este é o frontend de um e-commerce especializado em roupas masculinas, desenvolvido como parte do sistema **Benner Grife**. A aplicação oferece uma experiência moderna e responsiva para os clientes navegarem, pesquisarem e comprarem produtos de moda masculina.

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção da interface
- **TypeScript** - Superset do JavaScript que adiciona tipagem estática
- **Vite** - Build tool moderna e rápida para desenvolvimento
- **CSS3** - Estilização customizada dos componentes
- **ESLint** - Linter para manter a qualidade do código

## 🏗️ Arquitetura do Sistema

O projeto segue uma arquitetura full-stack:

### Frontend (Esta aplicação)
- **Framework**: React com TypeScript
- **Build Tool**: Vite
- **Estilização**: CSS módulos/customizado
- **Estrutura**: Componentes reutilizáveis e páginas específicas

### Backend (API)
- **Framework**: ASP.NET Core 8.0
- **Arquitetura**: Clean Architecture
- **Padrões**: Repository Pattern, Result Pattern
- **Autenticação**: Sistema de autenticação integrado

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.tsx      # Cabeçalho da aplicação
│   └── HamburgerMenu.tsx # Menu mobile
├── pages/              # Páginas da aplicação
│   └── AdminDashboard.tsx # Dashboard administrativo
├── styles/             # Arquivos de estilo
├── assets/             # Recursos estáticos
└── App.tsx            # Componente principal
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação e Execução
```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

## 🎯 Funcionalidades Principais

### Para Clientes
- Catálogo de produtos masculinos
- Sistema de busca e filtros
- Carrinho de compras
- Processo de checkout
- Histórico de pedidos
- Perfil do usuário

### Para Administradores
- Dashboard administrativo
- Gerenciamento de produtos
- Controle de estoque
- Relatórios de vendas
- Gerenciamento de usuários

## 🎨 Design e UX

- **Responsivo**: Adaptado para desktop, tablet e mobile
- **Moderno**: Interface limpa e intuitiva
- **Performance**: Otimizado para carregamento rápido
- **Acessibilidade**: Seguindo boas práticas de acessibilidade web

## 🔗 Integração com API

A aplicação frontend se comunica com uma API REST desenvolvida em ASP.NET Core, que fornece:

- Autenticação e autorização de usuários
- CRUD de produtos e categorias
- Processamento de pedidos
- Gerenciamento de estoque
- Relatórios e analytics

## 📱 Recursos Mobile

- Menu hambúrguer para navegação mobile
- Interface touch-friendly
- Imagens otimizadas para diferentes tamanhos de tela
- Performance otimizada para dispositivos móveis

## 🔧 Desenvolvimento

### Scripts Disponíveis
- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter ESLint

### Padrões de Código
- TypeScript strict mode habilitado
- ESLint configurado para React e TypeScript
- Componentes funcionais com hooks
- Props tipadas com TypeScript interfaces

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e comerciais da loja Benner Grife.

---

**Desenvolvido com ❤️ para a melhor experiência em moda masculina**