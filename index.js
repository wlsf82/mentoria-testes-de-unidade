module.exports = function(listaDeProdutos) {
  const precoSemiFinal = listaDeProdutos
    .map(produto => calculaPrecoProduto(produto))
    .reduce((a, b) => a + b, 0)

  if (precoSemiFinal < 100) return precoSemiFinal
  if (precoSemiFinal >= 100 && precoSemiFinal < 250) return precoSemiFinal * .95
  if (precoSemiFinal >= 250) return precoSemiFinal * .9
}

function calculaPrecoProduto(produto) {
  return produto.preco * produto.quantidade
}
