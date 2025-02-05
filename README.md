# Projeto de Livraria

## Descrição

Este projeto é uma aplicação de **livraria online**, onde é possível cadastrar, alterar e excluir produtos (livros) no catálogo. A aplicação está estruturada com **React** e utiliza **Rotas** para navegação entre diferentes páginas, como a página de cadastro e a de alteração de produtos.

### Funcionalidades Implementadas

- **Cadastro de Produtos**: Permite adicionar novos livros ao catálogo com informações como nome, descrição, preço e imagem.
- **Alteração de Produtos**: Permite editar os detalhes de um produto existente, incluindo nome, descrição, preço e imagem.
- **Exclusão de Produtos**: Permite excluir um livro do catálogo.
- **Exibição de Produtos**: A página principal exibe todos os produtos cadastrados em um layout responsivo.

## Instruções para Rodar o Projeto Localmente

1. **Clone o repositório**:
   ```
   git clone https://github.com/seu-usuario/livraria.git
   ```

2. **Navegue até o diretório do projeto**:
   ```
   cd livraria
   ```

3. **Instale as dependências**:
   Se você ainda não tem o **Node.js** instalado, faça isso primeiro. Depois, instale as dependências do projeto com:
   ```
   npm install
   ```

4. **Rodando a aplicação**:
   Após a instalação das dependências, você pode rodar o projeto com o comando:
   ```
   npm start
   ```


## Link do Projeto na Vercel

Você pode acessar o projeto online na Vercel através do seguinte link:  
[https://1022b-ft-marketplace-front-end.vercel.app]

---

## Estrutura do Projeto

- **App.tsx**: Componente principal que exibe os produtos e permite excluir e alterar produtos.
- **CadastroProduto.tsx**: Formulário para cadastrar novos produtos.
- **AlterarProduto.tsx**: Formulário para editar um produto existente.
- **main.tsx**: Configuração das rotas da aplicação.
- **index.css**: Arquivo de estilos principais, incluindo o estilo de fundo rosa e os estilos dos botões e formulários.

---

## Como Funciona o Código

- **Rotas**: A navegação entre as páginas é feita utilizando **React Router**. O arquivo `main.tsx` contém as rotas para a página principal, cadastro de produto e alteração de produto.
  
- **Cadastro de Produto**: A página de cadastro (`CadastroProduto.tsx`) possui um formulário que envia os dados para a API, criando um novo produto.
  
- **Alteração de Produto**: A página de alteração (`AlterarProduto.tsx`) permite editar os dados de um produto existente, utilizando o ID para buscar o produto e atualizá-lo.

- **Exclusão de Produto**: Na página principal (`App.tsx`), cada produto possui um botão para exclusão, que interage com a API para remover o item do catálogo.

