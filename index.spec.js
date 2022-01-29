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

test('lista com mais de um produto retorna soma de (preco * quantidade) de cada produto', () => {
  const resultadoAtual = calculaPrecoFinal([
    {
      id: 1,
      preco: 200,
      quantidade: 1
    },
    {
      id: 2,
      preco: 400,
      quantidade: 2
    },
    {
      id: 3,
      preco: 400,
      quantidade: 3
    },
  ])
  const resultadoEsperado = 2200

  expect(resultadoAtual).toBe(resultadoEsperado)
})
