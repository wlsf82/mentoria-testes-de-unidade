const calculaPrecoFinal = require('.')

test('lista vazia retorna zero', () => {
  const resultadoAtual = calculaPrecoFinal([])
  const resultadoEsperado = 0

  expect(resultadoAtual).toBe(resultadoEsperado)
})

test('lista com um produto retorna preco * quantidade', () => {
  const resultadoAtual = calculaPrecoFinal([{
    id: 1,
    preco: 99,
    quantidade: 1
  }])
  const resultadoEsperado = 99

  expect(resultadoAtual).toBe(resultadoEsperado)
})

test('lista com mais de um produto retorna soma de (preco * quantidade) de cada produto', () => {
  const resultadoAtual = calculaPrecoFinal([
    {
      id: 1,
      preco: 90,
      quantidade: 1
    },
    {
      id: 2,
      preco: 4,
      quantidade: 2
    },
    {
      id: 3,
      preco: 1,
      quantidade: 2
    },
  ])
  const resultadoEsperado = 100

  expect(resultadoAtual).toBe(resultadoEsperado)
})
