module.exports = function(listaDeProdutos) {
  return listaDeProdutos
    .map(produto => calculaPrecoProduto(produto))
    .reduce((a, b) => a + b, 0)
}

function calculaPrecoProduto(produto) {
  return produto.preco * produto.quantidade
}
