# Codewars Solutions by Gustavo Henrique

Este repositório contém minhas soluções para os desafios de programação (katas) da plataforma [Codewars](https://www.codewars.com/). Ele está organizado por linguagens de programação e cada pasta contém soluções que resolvi de acordo com o nível de dificuldade dos desafios.

## Estrutura do Repositório

- **JavaScript**
  - Desafios resolvidos em JavaScript.
  
- **Python**
  - Desafios resolvidos em Python.
  
- **Outras Linguagens**
  - Aqui estarão as soluções feitas em outras linguagens como Ruby, Java, etc.

## Como está organizado

Cada pasta de linguagem segue o formato:

- **Nome do Kata**: O nome do desafio conforme aparece no Codewars.
- **Descrição**: Breve descrição do problema (pode ser copiada ou resumida).
- **Solução**: Meu código de solução para o problema.
- **Comentários**: Reflexões sobre a solução ou melhorias que poderiam ser feitas.

### Exemplo:

```markdown
### Kata: [Sum of Positive](https://www.codewars.com/kata/sum-of-positive)

**Linguagem**: Python  
**Dificuldade**: 8 kyu

#### Descrição:
Dado um array de números, some apenas os valores positivos.

#### Solução:
```python
def positive_sum(arr):
    return sum(x for x in arr if x > 0)
