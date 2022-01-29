const calculaPrecoFinal = require('.')

test('lista vazia retorna zero', () => {
  const resultadoAtual = calculaPrecoFinal([])
  const resultadoEsperado = 0

  expect(resultadoAtual).toBe(resultadoEsperado)
})
