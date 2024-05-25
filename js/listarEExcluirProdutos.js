import { conectaAPI } from "./conectaApi.js";

const lista = document.querySelector("#conteudoProdutos")

function constroiCard(nome, preco, imagem, id) {
  const produto = document.createElement("div");
  produto.className = "produtos";
  produto.innerHTML = `
    <img src="${imagem}" alt="Imagem do Produto">
    <p>${nome}</p>
    <p class="precoProduto">R$ ${preco}<img src="img/lixeira.svg" alt="Lixeira" data-id="${id}" class="lixeiras"></p>
    `

  return produto
}

async function listarProdutos(){
  try{
    const listaAPI = await conectaAPI.listarProdutos()
    listaAPI.forEach(elemento => {
      const card = constroiCard(elemento.nome, elemento.preco, elemento.imagem, elemento.id)
      lista.appendChild(card)
      
      const lixeiras = card.querySelectorAll(".lixeiras")
      
      lixeiras.forEach(lixeira => {
        lixeira.addEventListener("click", evento => excluirProduto(evento));
      })
    })
  }
  catch{
    lista.innerHTML = `<h2>Não foi possível carregar a lista de produtos.</h2>`
  }
}

async function excluirProduto(evento) {
  const produto = evento.currentTarget.dataset.id

  try {
    await conectaAPI.excluirProduto(produto)

    location.reload()
  } catch (e) {
    alert(e)
  }
}

listarProdutos()