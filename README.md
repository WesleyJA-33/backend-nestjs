# Backend de Gerenciamento de Usuários com NestJS

Este repositório contém o backend da aplicação de gerenciamento de usuários, desenvolvido com NestJS. Ele é responsável por fornecer uma API RESTful para consumir e expor dados de usuários, que serão utilizados por um frontend (como o projeto Angular que desenvolvemos).

## Funcionalidades

-   **Consumo de API Externa:** Busca dados de usuários de uma API externa (JSONPlaceholder).
-   **API RESTful:** Expõe um endpoint `/users` para que aplicações cliente possam acessar os dados.
-   **CORS Configurado:** Permite que aplicações frontend em diferentes origens (como `http://localhost:4200` para o Angular) acessem esta API de forma segura.

## Tecnologias Utilizadas

-   [**NestJS**](https://nestjs.com/): Um framework progressivo Node.js para a construção de aplicações corporativas eficientes, confiáveis e escaláveis do lado do servidor.
-   [**TypeScript**](https://www.typescriptlang.org/): Um superconjunto tipado de JavaScript que compila para JavaScript puro.
-   [**RxJS**](https://rxjs.dev/): Biblioteca para programação reativa usando Observables, facilitando o trabalho com fluxos de dados assíncronos.
-   [**Axios**](https://axios-http.com/): Cliente HTTP baseado em Promises para o navegador e Node.js (utilizado internamente pelo `@nestjs/axios`).

## Configuração do Projeto

Siga estes passos para configurar e rodar o projeto em sua máquina local.

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

-   [Node.js](https://nodejs.org/en/download/) (versão 18.x ou superior recomendada)
-   [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js) ou [Yarn](https://yarnpkg.com/)
-   [NestJS CLI](https://docs.nestjs.com/cli/overview) (instalado globalmente: `npm install -g @nestjs/cli`)

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/WesleyJA-33/backend-nestjs.git backend
    cd backend
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou yarn install
    ```

## ▶Como Rodar a Aplicação

Para iniciar o servidor de desenvolvimento do NestJS:

```bash
npm run start:dev
# ou yarn start:dev