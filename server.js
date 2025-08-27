import express from "express"; // Importa o framework Express, que facilita a criação de APIs.


const posts = [
    {
      descricao: "Uma foto teste", // Descrição do post.
      imagem: "https://placecats.com/millie/300/150", // URL da imagem associada ao post.
      id: 1, // ID único do post.
    },
    {
      descricao: "Paisagem montanhosa",
      imagem: "https://placecats.com/millie/300/150",
      id: 2,
    },
    {
      descricao: "Cachorro brincando",
      imagem: "https://placecats.com/millie/300/150",
      id: 3,
    },
    {
      descricao: "Comida deliciosa",
      imagem: "https://placecats.com/millie/300/150",
      id: 4,
    },
    {
      descricao: "Cidade à noite",
      imagem: "https://placecats.com/millie/300/150",
      id: 5,
    },
    {
      descricao: "Gato dormindo",
      imagem: "https://placecats.com/millie/300/150",
      id: 6,
    },
    {
      descricao: "Pôr do sol na praia",
      imagem: "https://placecats.com/millie/300/150",
      id: 7,
    },
  ]; // Array de objetos representando posts.
  

  const coments = [
    {
      text: "esse é o primeiro post", // Texto do comentário.
      author: "", // Autor do comentário.
      postId: 1, // ID do post ao qual o comentário pertence.
      id: 1, // ID único do comentário.
    },
    {
      text: "esse é o segundo post",
      author: "",
      postId: 2,
      id: 2,
    },
    {
      text: "esse é o terceiro post",
      author: "",
      postId: 3,
      id: 3,
    },
    {
      text: "esse é o quarto post",
      author: "",
      postId: 4,
      id: 4,
    },
    {
      text: "esse é o quinto post",
      author: "",
      postId: 5,
      id: 5,
    },
  ]; // Array de objetos representando comentários associados a posts.
  

// let idCounter = 1;
// function generateId() {
//   return idCounter++;
// }

// posts.forEach((post) => {
//   post.id = generateId();
// });

// console.log(posts);

const app = express(); // Inicializa o servidor Express.

app.use(express.json()); // Adiciona suporte ao parsing de JSON no corpo das requisições.

app.listen(4000, () => {
  console.log("servidor está funcionando..."); // Inicia o servidor na porta 4000 e exibe uma mensagem.
});


app.get("/posts", (req, res) => {
    res.status(200).json(posts); // Retorna todos os posts no formato JSON com código de status 200 (OK).
  });

function buscarPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id); // Retorna o índice do post cujo ID corresponde ao número fornecido.
    });
  }
  

function buscarComentPorId(id2) {
    return coments.findIndex((coment) => {
        return coment.postId === Number(id2); // Retorna o índice do comentário associado ao post fornecido.
    });
  }
  

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id); // Encontra o índice do post com base no ID fornecido.
    res.status(200).json(posts[index]); // Retorna o post correspondente.
});
  

app.get("/posts/:id/coments", (req, res) => {
    const index2 = buscarComentPorId(req.params.id); // Encontra o índice do comentário associado ao post.
    res.status(200).json(coments[index2]); // Retorna o comentário correspondente.
});
  