async function listarProdutos(){
  const conexao = await fetch("https://json-test-indol.vercel.app/produtos")
  const conexaoConvertida = await conexao.json()

  return conexaoConvertida
}

async function criarProdutos(nome, preco, imagem){
  const conexao = await fetch("https://json-test-indol.vercel.app/produtos", {
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

  const conexaoConvertida = conexao.json();

  return conexaoConvertida;
}

async function excluirProduto(id){
  console.log("ID do produto a ser excluído:", id);
  const url = `https://json-test-indol.vercel.app/produtos${id}`;
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