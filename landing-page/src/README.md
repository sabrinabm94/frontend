# Landing Page - Especialistas em WordPress

## Objetivo do Projeto

Esta é uma landing page criada para a consultoria **Especialistas em WordPress**, com o objetivo de gerar leads, apresentar os serviços da empresa e aumentar a captação de clientes.
O site é leve, responsivo, otimizado para SEO e totalmente focado em conversão.

A página é construída com **HTML5, CSS3 e JavaScript puro**, sem frameworks, e utiliza **Firebase Hosting** para hospedagem gratuita e suporte a domínio personalizado.

---

## Tecnologias Utilizadas

- **HTML5** → Estrutura do conteúdo.
- **CSS3** → Estilização, responsividade e design otimizado.
- **JavaScript** → Funcionalidades dinâmicas, como FAQ interativo e alternância de tema.
- **Bootstrap Icons** → Ícones utilizados para botões, estrelas e WhatsApp.
- **Firebase Hosting** → Hospedagem gratuita com HTTPS e integração de domínio personalizado.

---

## Estrutura de Pastas

```
landing-page/
│
├─ public/                  # Pasta final com arquivos que serão publicados no Firebase
│  ├─ index.html            # Página principal
│  ├─ assets/
│  │  ├─ css/
│  │  │  └─ styles.css
│  │  ├─ js/
│  │  │  └─ scripts.js
│  │  └─ images/
│
├─ assets/                  # Arquivos originais de imagens, CSS e JS
│
├─ index.html               # HTML principal
│
├─ package.json             # Configuração do projeto
├─ firebase.json            # Configuração do Firebase Hosting
└─ README.md
```

> **Observação**: Os arquivos `index.html` e a pasta `assets` são copiados automaticamente para `public/` no processo de deploy. Não é necessário fazer isso manualmente.

---

## URLs de Acesso

- **URL local**: [http://localhost:5000/](http://localhost:5000/)
- **URL Firebase (principal)**: [https://especialistas-wordpress-f07b0.web.app](https://especialistas-wordpress-f07b0.web.app)
- **URL Firebase (alternativa)**: [https://especialistas-wordpress-f07b0.firebaseapp.com](https://especialistas-wordpress-f07b0.firebaseapp.com)
- **URL personalizada**: [https://especialistaswp.com.br](https://especialistaswp.com.br)

---

## Comandos Principais

Os comandos estão definidos no `package.json` e devem ser executados via terminal:

### **Instalar dependências**

```bash
npm install
```

---

### **Start (local)**

Executa um servidor local para visualizar a página.

```bash
npm run start
```

---

### **Dev (Firebase local)**

Inicia o ambiente de hospedagem do Firebase localmente.

```bash
npm run dev
```

---

### **Build**

Não necessário para HTML puro. Comando existe apenas como placeholder.

```bash
npm run build
```

---

### **Deploy (Firebase)**

Executa automaticamente os seguintes passos:

1. Apaga a pasta `public/`
2. Recria a estrutura `public/assets`
3. Copia `index.html` e todos os arquivos de `assets/`
4. Publica no **Firebase Hosting**

```bash
npm run deploy
```

---

## Setup Inicial

1. **Clonar o projeto**

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd landing-page
   ```

2. **Instalar dependências**

   ```bash
   npm install
   ```

3. **Login no Firebase** (se ainda não fez login)

   ```bash
   firebase login
   ```

4. **Inicializar Firebase** (se ainda não configurou)

   ```bash
   firebase init
   ```

   - Escolha **Hosting**.
   - Defina `public` como pasta pública.
   - Não sobrescreva `index.html`.

5. **Deploy**

   ```bash
   npm run deploy
   ```

---

## Dependências do Projeto

- **cpy-cli** → Copia arquivos de `index.html` e `assets` para `public/`
- **mkdirp** → Cria pastas automaticamente se não existirem
- **rimraf** → Remove a pasta `public/` antes do deploy
- **npm-run-all** → Permite rodar múltiplos comandos em sequência

---

## Licença

**Projeto privado** — proibida a cópia, redistribuição ou reutilização do código e layout.

---

## Observações Importantes

- Todas as alterações em `index.html` ou nos arquivos da pasta `assets` devem ser feitas na raiz do projeto, e não diretamente na pasta `public/`.
- A pasta `public/` **é recriada a cada deploy** — não edite nada diretamente nela.
