const calculaPrecoFinal = require('.')

test('lista vazia retorna zero', () => {
  const resultadoAtual = calculaPrecoFinal([])
  const resultadoEsperado = 0

  expect(resultadoAtual).toBe(resultadoEsperado)
})

test('lista com um produto retorna preco * quantidade', () => {
  const resultadoAtual = calculaPrecoFinal([{
    id: 1,
    preco: 200,
    quantidade: 1
  }])
  const resultadoEsperado = 200

  expect(resultadoAtual).toBe(resultadoEsperado)
})
