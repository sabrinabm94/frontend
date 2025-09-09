# Landing Page - Especialistas em WordPress

## Objetivo do Projeto

Esta é uma landing page criada para a consultoria com o objetivo de fornecer uma página institucional clara, responsiva e otimizada, capaz de gerar leads e apresentar os serviços da empresa.

A landing page é construída em **HTML5, CSS3 e JavaScript puro**, sem frameworks complexos, e utiliza **Firebase Hosting** para hospedagem gratuita, permitindo fácil atualização e publicação do conteúdo.

---

## Tecnologias Utilizadas

* **HTML5**: estrutura da página.
* **CSS3**: estilos visuais, incluindo responsividade.
* **JavaScript**: funcionalidades interativas, como alternância de tema.
* **Bootstrap Icons**: biblioteca de ícones para estrelas, WhatsApp e outros elementos.
* **Firebase Hosting**: hospedagem gratuita para páginas estáticas com suporte a domínio customizado.

---

## Estrutura de Pastas

O projeto possui a seguinte estrutura:

```
landing-page/
│
├─ public/                  # Pasta onde ficam os arquivos que serão publicados no Firebase
│  ├─ index.html             # Página principal
│  ├─ assets/
│  │  ├─ css/
│  │  │  └─ styles.css
│  │  ├─ js/
│  │  │  └─ theme-toggle.js
│  │  └─ images/             # Todas as imagens do site
│
├─ package.json
├─ firebase.json
└─ README.md
```

> Observação: os arquivos `index.html` e a pasta `assets` devem ser **copiados manualmente** para a pasta `public` antes de qualquer deploy.

---

## URLs de Acesso

* URL local: [http://localhost:5000/](http://localhost:5000/)
* URL de hospedagem no Firebase (padrão): [https://especialistas-wordpress-f07b0.web.app](https://especialistas-wordpress-f07b0.web.app)
* URL de hospedagem no Firebase (alternativa): [https://especialistas-wordpress-f07b0.firebaseapp.com](https://especialistas-wordpress-f07b0.firebaseapp.com)
* URL personalizada: [https://especialistaswp.com.br](https://especialistaswp.com.br)

---

## Comandos Principais

Todos os comandos são definidos no `package.json` e podem ser utilizados via terminal:

* **Start (local)**:
  Executa um servidor local simples para pré-visualizar a página.

  ```bash
  npm run start
  ```

* **Dev (Firebase local)**:
  Inicia o Firebase Hosting local para testes.

  ```bash
  npm run dev
  ```

* **Build**:
  Build não necessário para HTML puro. Comando serve apenas como placeholder.

  ```bash
  npm run build
  ```

* **Deploy (Firebase)**:
  Faz o deploy da pasta `public` para o Firebase Hosting.

  ```bash
  npm run deploy
  ```

> Antes de executar `npm run deploy`, certifique-se que os arquivos `index.html` e `assets` estejam dentro da pasta `public`.

---

## Setup Inicial

1. Clone ou faça download do repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd landing-page
   ```

2. Instale as dependências (serve apenas para preview local):

   ```bash
   npm install
   ```

3. Copie manualmente `index.html` e a pasta `assets` para a pasta `public`.

4. Teste localmente:

   ```bash
   npm run start
   ```

   ou

   ```bash
   npm run dev
   ```

5. Faça login no Firebase (caso ainda não tenha feito):

   ```bash
   firebase login
   ```

6. Inicialize o Firebase (caso ainda não tenha feito):

   ```bash
   firebase init
   ```

   * Selecione **Hosting**.
   * Escolha a pasta `public` como diretório público.
   * Configure como **Single-page app** se desejar redirecionamento de rotas.
   * Não sobrescreva `index.html` se já existir.

7. Faça o deploy para o Firebase:

   ```bash
   npm run deploy
   ```

---

## Licença

Este projeto é privado e não deve ser usado, copiado ou distribuído por terceiros.
