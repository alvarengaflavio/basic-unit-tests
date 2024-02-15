# Repositório para prática básica de testes unitários

Inicialmente utilizei `it` e `expect` para praticar testes simples, ou até mesmo triviais, como estes na função `add`:

```js
it("deve somar todos os valores de um array", () => {
  const resultado = add([1, 2, 3, 4]);
  expect(resultado).toBe(10);
});
```

## Padrão AAA ( The AAA Pattern )

**AAA ( Arrange, Act, Assert)**
Porém o teste acima não segue o padrão de testes triplo A (AAA - Arrange, Act, Assert).  
O que é este padrão afinal? Bem ele é constituído de três fazes.  
 -[1] **Arrange**: Definir o ambiente de testes e valores que serão usados no teste  
 -[2] **Act**: Executar o código|função que deve ser testado  
 -[3] **Assert**: Avaliar o valor|resultado produzido e comprar com o valor|resultado esperado

Claro que no primeiro teste tem uma expectativa (`Assert`), e claro que também rodei o código (`Act`) mas nós não estamos definindo (`Arrange`) nossos valores. Nós apenas criamos um array na chamada da função `add`. Claro que o teste funciona, mas ficaria muito mais fácil de ler e alterar se definir a array em uma constante separadamente na linha anterior a chamada da função `add`.

```js
it("deve somar todos os valores de um array", () => {
  // Arrange
  const números = [1, 2, 3, 4];
  // Act
  const resultado = add(números);
  // Assert
  expect(resultado).toBe(10);
});
```

Mas ele também pode ser melhorado, veja que nele eu também o valor esperado de forma bruta, dentro da de `.toBe(10)`. Devo calcular o valor esperado dentro de uma variável separada na fase de `Arrange` pelos mesmos motivos que foi feito com o `array` de números.

```js
it("deve somar todos os valores de um array", () => {
  const números = [1, 2, 3, 4];
  const esperado = números.reduce((acc, curr) => acc + curr, 0); // Linha nova
  const resultado = add(números);
  expect(resultado).toBe(esperado);
});
```

Desta forma o teste fica muito mais fácil de ler, manipular, entender e ser alterado futuramente.
