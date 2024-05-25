import { conectaAPI } from "./conectaApi.js";

const formulario = document.querySelector("#formulario")

async function criarProdutos(evento){
  evento.preventDefault()

  const nome = document.querySelector("#inome").value
  const preco = document.querySelector("#ivalor").value
  const img = document.querySelector("#iimagem").files[0]

  if(!img){
    alert("Por favor, selecione uma imagem.")
    return
  }

  const reader = new FileReader()

  reader.onloadend = async () => {
    const imgBase = reader.result

    try{
      await conectaAPI.criarProdutos(nome, preco, imgBase);
      window.location.href = "../pages/produtoCriado.html"
    } 
    catch (e){
      alert(e)
    }
  }

  reader.readAsDataURL(img)
}

formulario.addEventListener("submit", evento => criarProdutos(evento))