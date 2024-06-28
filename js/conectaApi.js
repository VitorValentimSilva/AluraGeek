async function listarProdutos(){
  const conexao = await fetch("https://tourmaline-climbing-runner.glitch.me/produtos")
  const conexaoConvertida = await conexao.json()

  return conexaoConvertida
}

async function criarProdutos(nome, preco, imagem){
  const conexao = await fetch("https://tourmaline-climbing-runner.glitch.me/produtos", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      nome: nome,
      preco: preco,
      imagem: imagem
    })
  })
  if (!conexao.ok) {
    throw new Error("Não foi possível enviar o produto")
  }

  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

async function excluirProduto(id){
  console.log("ID do produto a ser excluído:", id);
  const url = `https://tourmaline-climbing-runner.glitch.me/produtos/${id}`;
  const conexao = await fetch(url, {
    method: "DELETE"
  });

  if (!conexao.ok) {
    throw new Error("Não foi possível excluir o produto");
  }

  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

export const conectaAPI = {
  listarProdutos,
  criarProdutos,
  excluirProduto
}
