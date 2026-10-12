# Mutantes não detectados — execução inicial

| # | Status | Linha:Col | Mutador | Original | Mutado |
|---|---|---|---|---|---|
| 1 | Survived | 8:32 | StringLiteral | `'Divisão por zero não é permitida.'` | `""` |
| 2 | Survived | 13:7 | ConditionalExpression | `n < 0` | `false` |
| 3 | Survived | 13:7 | EqualityOperator | `n < 0` | `n <= 0` |
| 4 | NoCoverage | 13:30 | StringLiteral | `'Não é possível calcular a raiz quadrada de um número negativo.'` | `""` |
| 5 | Survived | 18:7 | ConditionalExpression | `n < 0` | `false` |
| 6 | Survived | 18:7 | EqualityOperator | `n < 0` | `n <= 0` |
| 7 | NoCoverage | 18:30 | StringLiteral | `'Fatorial não é definido para números negativos.'` | `""` |
| 8 | Survived | 19:7 | LogicalOperator | `n === 0 \|\| n === 1` | `n === 0 && n === 1` |
| 9 | Survived | 19:7 | ConditionalExpression | `n === 0 \|\| n === 1` | `false` |
| 10 | Survived | 19:7 | ConditionalExpression | `n === 0` | `false` |
| 11 | Survived | 19:18 | ConditionalExpression | `n === 1` | `false` |
| 12 | Survived | 25:7 | ConditionalExpression | `numeros.length === 0` | `false` |
| 13 | Survived | 34:7 | ConditionalExpression | `numeros.length === 0` | `false` |
| 14 | NoCoverage | 34:45 | StringLiteral | `'Array vazio не possui valor máximo.'` | `""` |
| 15 | Survived | 38:7 | ConditionalExpression | `numeros.length === 0` | `false` |
| 16 | NoCoverage | 38:45 | StringLiteral | `'Array vazio не possui valor mínimo.'` | `""` |
| 17 | Survived | 43:28 | ConditionalExpression | `n % 2 === 0` | `true` |
| 18 | Survived | 44:30 | ConditionalExpression | `n % 2 !== 0` | `true` |
| 19 | Survived | 44:30 | ArithmeticOperator | `n % 2` | `n * 2` |
| 20 | Survived | 73:7 | ConditionalExpression | `n <= 1` | `false` |
| 21 | Survived | 73:7 | EqualityOperator | `n <= 1` | `n < 1` |
| 22 | NoCoverage | 73:22 | BooleanLiteral | `false` | `true` |
| 23 | Survived | 74:19 | ConditionalExpression | `i < n` | `false` |
| 24 | Survived | 74:19 | EqualityOperator | `i < n` | `i >= n` |
| 25 | Survived | 74:31 | BlockStatement | `for (let i = 2; i < n; i++) { if (n % i === 0) return false; }` | `{}` |
| 26 | Survived | 75:9 | ConditionalExpression | `n % i === 0` | `false` |
| 27 | Survived | 75:9 | ArithmeticOperator | `n % i` | `n * i` |
| 28 | NoCoverage | 75:29 | BooleanLiteral | `false` | `true` |
| 29 | Survived | 84:7 | ConditionalExpression | `numeros.length === 0` | `false` |
| 30 | Survived | 88:7 | ConditionalExpression | `valor < min` | `false` |
| 31 | Survived | 88:7 | EqualityOperator | `valor < min` | `valor <= min` |
| 32 | Survived | 89:7 | ConditionalExpression | `valor > max` | `false` |
| 33 | Survived | 89:7 | EqualityOperator | `valor > max` | `valor >= max` |
| 34 | Survived | 92:51 | ConditionalExpression | `dividendo % divisor === 0` | `true` |
| 35 | Survived | 93:51 | ArithmeticOperator | `celsius * 9/5` | `celsius * 9 * 5` |
| 36 | Survived | 93:51 | ArithmeticOperator | `celsius * 9` | `celsius / 9` |
| 37 | Survived | 94:53 | ArithmeticOperator | `(fahrenheit - 32) * 5/9` | `(fahrenheit - 32) * 5 * 9` |
| 38 | Survived | 94:53 | ArithmeticOperator | `(fahrenheit - 32) * 5` | `(fahrenheit - 32) / 5` |
| 39 | Survived | 96:7 | ConditionalExpression | `n === 0` | `false` |
| 40 | NoCoverage | 96:32 | StringLiteral | `'Não é possível inverter o número zero.'` | `""` |
| 41 | Survived | 104:36 | ConditionalExpression | `a > b` | `true` |
| 42 | Survived | 104:36 | EqualityOperator | `a > b` | `a >= b` |
| 43 | Survived | 105:36 | ConditionalExpression | `a < b` | `true` |
| 44 | Survived | 105:36 | EqualityOperator | `a < b` | `a <= b` |
| 45 | Survived | 106:33 | ConditionalExpression | `a === b` | `true` |
| 46 | Survived | 108:7 | ConditionalExpression | `numeros.length === 0` | `false` |
| 47 | NoCoverage | 108:45 | StringLiteral | `'Array vazio не possui mediana.'` | `""` |
| 48 | Survived | 109:18 | MethodExpression | `[...numeros].sort((a, b) => a - b)` | `[...numeros]` |
| 49 | Survived | 109:36 | ArrowFunction | `(a, b) => a - b` | `() => undefined` |
| 50 | Survived | 109:46 | ArithmeticOperator | `a - b` | `a + b` |
| 51 | Survived | 111:7 | ConditionalExpression | `sorted.length % 2 === 0` | `false` |
| 52 | Survived | 111:7 | ArithmeticOperator | `sorted.length % 2` | `sorted.length * 2` |
| 53 | NoCoverage | 111:32 | BlockStatement | `if (sorted.length % 2 === 0) { return (sorted[mid - 1] + sorted[mid]) / 2; }` | `{}` |
| 54 | NoCoverage | 112:12 | ArithmeticOperator | `(sorted[mid - 1] + sorted[mid]) / 2` | `(sorted[mid - 1] + sorted[mid]) * 2` |
| 55 | NoCoverage | 112:13 | ArithmeticOperator | `sorted[mid - 1] + sorted[mid]` | `sorted[mid - 1] - sorted[mid]` |
| 56 | NoCoverage | 112:20 | ArithmeticOperator | `mid - 1` | `mid + 1` |
