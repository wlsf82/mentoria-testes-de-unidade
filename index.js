module.exports = function(listaDeProdutos) {
  if (listaDeProdutos.length === 0) return 0
  return listaDeProdutos[0].preco * listaDeProdutos[0].quantidade
}
