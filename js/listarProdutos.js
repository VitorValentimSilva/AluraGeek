import { conectaAPI } from "./index.js";

const lista = document.querySelector("#conteudoProdutos")

function constroiCard(nome, preco, imagem) {
  const produto = document.createElement("div");
  produto.className = "produtos";
  produto.innerHTML = `
    <img src="${imagem}" alt="Imagem do Produto">
    <p>${nome}</p>
    <p class="precoProduto">R$ ${preco}<img src="img/lixeira.svg" alt="Lixeira"></p>
    `

  return produto;
}

async function listarProdutos(){
  try{
    const listaAPI = await conectaAPI.listarProdutos()
    listaAPI.forEach(elemento => lista.appendChild(constroiCard(elemento.nome, elemento.preco, elemento.imagem)))
  }
  catch{
    lista.innerHTML = `<h2>Não foi possível carregar a lista de produtos.</h2>`
  }
}

listarProdutos()