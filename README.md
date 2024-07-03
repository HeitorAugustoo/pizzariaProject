# pizzariaProject

Este repositório contém o projeto prático desenvolvido como parte de um curso que realizei. Aqui é possível encontrar todos os arquivos e recursos que utilizei durante o curso para a criação deste projeto específico.

## Descrição do Projeto

O projeto se trata de uma API para sistema de restaurante, neste caso uma pizzaria. Será possivel a criação do frontend para sistema de retirada de pedidos e acompanhar pedidos da cozinha e caixa. 
Sei que possui alguns pontos para melhorar, e por isso busco cada vez mais conhecimento que me permita acrescentar novas funcionalidades e trazer melhorias de performance e regras de negócio.

## Funcionalidades

- Cadastro de usuários
- Autenticação
- Visualização dos detalhes de usuário
- Criação, edição, visualização, conclusão e exclusão de pedidos
- Criação de categorias de alimentos e acrescentar produtos as categorias
- Listar produtos por categoria

## Endpoints e Funcionalidades

### Usuários

- `POST /users` - Cria um novo usuário
- `POST /session` - Autentica um usuário e retorna um token JWT
- `GET /me` - Retorna informações de um usuário específico

### Categorias

- `POST /category` - Criar uma nova categoria
- `GET /category` - Listar todas as categorias

### Produtos

- `POST /product` - Cadastrar um produto em uma categoria
- `GET /category/products` - Listar todos os produtos de uma categoria
### Pedidos

- `POST /order` - Cria um novo pedido
- `DELETE /orders?order_id=<id>` - Remove um pedido específico
- `POST /orders/add` - Adiciona um item a um pedido específico
- `DELETE /order/remove?item_id=<id>` - Remove um item de um pedido específico
- `PUT /order/send` - Envia um pedido para iniciar preparo
- `GET /orders` - Lista todos os pedidos
- `GET /orders?order_id=<id>` - Exibe detalhes de um pedido específico
- `PUT /order/finish` - Finaliza um pedido específico

## Tecnologias/Ferramentas Utilizadas

- NodeJs (Express)
- Typescript
- PostgreSQL
- Prisma
- Figma
- Autenticação de usuário com JSON Web Token (JWT)
- Insomnia
- Beekeeper Studio

## Estrutura do Projeto

backend/
├── node_modules/           # Diretório com as dependências do Node.js
├── prisma/                 # Arquivos relacionados ao Prisma ORM
│   └── schema.prisma       # Esquema do banco de dados do Prisma
├── src/                    # Código fonte do projeto
│   ├── @types/             # Definições de tipos TypeScript
│   ├── config/             # Configurações da aplicação
│   ├── controllers/        # Controladores que contêm a lógica dos endpoints
│   ├── middlewares/        # Middlewares para manipulação de requisições
│   ├── prisma/             # Inicialização e configuração do Prisma
│   ├── services/           # Serviços que contêm a lógica de negócio
│   ├── routes.ts           # Definição das rotas da aplicação
│   └── server.ts           # Inicialização do servidor Express
├── tmp/                    # Diretório temporário
├── .env                    # Variáveis de ambiente
├── .gitignore              # Arquivo para ignorar arquivos e diretórios no Git
├── package.json            # Dependências e scripts do projeto
├── tsconfig.json           # Configurações do TypeScript
├── yarn.lock               # Arquivo de lock do Yarn
└── README.md               # Documentação do projeto

## Contato

Informações de contato caso alguém queira tirar dúvidas ou dar feedback sobre o projeto.

- Email: heitorsantos377@gmail.com
- LinkedIn: https://www.linkedin.com/in/heitor-augusto-dev/