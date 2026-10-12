// Testes adicionados para matar os mutantes que sobreviveram à primeira
// execução do StrykerJS. Os números entre colchetes referem-se à tabela em
// relatorio-evidencias/sobreviventes-inicial.md.
const {
  divisao, raizQuadrada, fatorial, mediaArray, maximoArray, minimoArray,
  isPar, isImpar, isPrimo, produtoArray, clamp, isDivisivel,
  celsiusParaFahrenheit, fahrenheitParaCelsius, inverso, isMaiorQue,
  isMenorQue, isEqual, medianaArray
} = require('../src/operacoes');

describe('Mensagens de erro e guardas de entrada inválida', () => {
  test('divisao lança a mensagem exata ao dividir por zero [1]', () => {
    expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
  });

  test('raizQuadrada lança a mensagem exata para número negativo [2, 4]', () => {
    expect(() => raizQuadrada(-4))
      .toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
  });

  test('fatorial lança a mensagem exata para número negativo [5, 7]', () => {
    expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.');
  });

  test('maximoArray lança a mensagem exata para array vazio [13, 14]', () => {
    expect(() => maximoArray([])).toThrow('Array vazio не possui valor máximo.');
  });

  test('minimoArray lança a mensagem exata para array vazio [15, 16]', () => {
    expect(() => minimoArray([])).toThrow('Array vazio не possui valor mínimo.');
  });

  test('inverso lança a mensagem exata para zero [39, 40]', () => {
    expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.');
  });

  test('medianaArray lança a mensagem exata para array vazio [46, 47]', () => {
    expect(() => medianaArray([])).toThrow('Array vazio не possui mediana.');
  });
});

describe('Valores na fronteira das guardas (zero não é negativo)', () => {
  test('raizQuadrada(0) retorna 0 em vez de lançar erro [3]', () => {
    expect(raizQuadrada(0)).toBe(0);
  });

  test('fatorial(0) retorna 1 em vez de lançar erro [6]', () => {
    expect(fatorial(0)).toBe(1);
  });

  test('fatorial(1) retorna 1', () => {
    expect(fatorial(1)).toBe(1);
  });
});

describe('Arrays vazios com valor de retorno definido', () => {
  test('mediaArray de array vazio retorna 0, e não NaN [12]', () => {
    expect(mediaArray([])).toBe(0);
  });

  test('produtoArray de array vazio retorna o elemento neutro 1', () => {
    expect(produtoArray([])).toBe(1);
  });
});

describe('Predicados retornam false quando a condição não vale', () => {
  test('isPar retorna false para número ímpar [17]', () => {
    expect(isPar(7)).toBe(false);
  });

  test('isImpar retorna false para número par [18, 19]', () => {
    expect(isImpar(4)).toBe(false);
  });

  test('isDivisivel retorna false quando há resto [34]', () => {
    expect(isDivisivel(10, 3)).toBe(false);
  });

  test('isEqual retorna false para números diferentes [45]', () => {
    expect(isEqual(7, 8)).toBe(false);
  });
});

describe('Comparações estritas: igualdade não é "maior" nem "menor"', () => {
  test('isMaiorQue retorna false quando a é menor que b [41]', () => {
    expect(isMaiorQue(5, 10)).toBe(false);
  });

  test('isMaiorQue retorna false quando a === b [42]', () => {
    expect(isMaiorQue(5, 5)).toBe(false);
  });

  test('isMenorQue retorna false quando a é maior que b [43]', () => {
    expect(isMenorQue(10, 5)).toBe(false);
  });

  test('isMenorQue retorna false quando a === b [44]', () => {
    expect(isMenorQue(5, 5)).toBe(false);
  });
});

describe('isPrimo: casos de borda e números compostos', () => {
  test('1 não é primo [20, 21, 22]', () => {
    expect(isPrimo(1)).toBe(false);
  });

  test('0 e negativos não são primos', () => {
    expect(isPrimo(0)).toBe(false);
    expect(isPrimo(-7)).toBe(false);
  });

  test('2 é primo (menor primo, laço não executa)', () => {
    expect(isPrimo(2)).toBe(true);
  });

  test('números compostos não são primos [23-28]', () => {
    expect(isPrimo(4)).toBe(false);
    expect(isPrimo(9)).toBe(false);
    expect(isPrimo(15)).toBe(false);
  });
});

describe('clamp: valores fora e exatamente nos limites', () => {
  test('retorna min quando o valor está abaixo do intervalo [30]', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  test('retorna max quando o valor está acima do intervalo [32]', () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  test('retorna o próprio valor (não o limite) quando valor === min [31]', () => {
    // -0 e 0 são iguais para <, mas distintos para Object.is (usado pelo toBe):
    // com "valor <= min" a função devolveria min (0) em vez do próprio valor (-0).
    expect(clamp(-0, 0, 10)).toBe(-0);
  });

  test('retorna o próprio valor (não o limite) quando valor === max [33]', () => {
    expect(clamp(0, -10, -0)).toBe(0);
  });
});

describe('Conversões de temperatura com valores fora do zero', () => {
  test('100 °C equivalem a 212 °F [35, 36]', () => {
    expect(celsiusParaFahrenheit(100)).toBe(212);
  });

  test('-40 °C equivalem a -40 °F', () => {
    expect(celsiusParaFahrenheit(-40)).toBe(-40);
  });

  test('212 °F equivalem a 100 °C [37, 38]', () => {
    expect(fahrenheitParaCelsius(212)).toBe(100);
  });
});

describe('medianaArray: ordenação e quantidade par de elementos', () => {
  test('ordena antes de escolher o elemento central (array ímpar desordenado) [48-50]', () => {
    expect(medianaArray([5, 1, 3])).toBe(3);
  });

  test('não altera o array recebido', () => {
    const entrada = [5, 1, 3];
    medianaArray(entrada);
    expect(entrada).toEqual([5, 1, 3]);
  });

  test('array par retorna a média dos dois elementos centrais [51-56]', () => {
    expect(medianaArray([1, 2, 3, 4])).toBe(2.5);
  });

  test('array par desordenado é ordenado antes do cálculo', () => {
    expect(medianaArray([9, 2, 7, 4])).toBe(5.5);
  });
});
