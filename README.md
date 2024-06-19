## Prova de Algoritmos e Lógica de Programação

No arquivo `src/foods.json` existe um objeto JSON com dados de 597 alimentos extraídos da Tabela TACO (Tabela Brasileira de Composição de Alimentos).

A TACO contém informações precisas e detalhadas sobre a composição nutricional de uma ampla variedade de alimentos, incluindo frutas, vegetais, carnes, cereais, leguminosas, produtos industrializados, entre outros. Esses dados incluem valores de macronutrientes (proteínas, carboidratos, lipídios), micronutrientes (vitaminas e minerais), e outros componentes como fibras alimentares, colesterol e energia (calorias).

### Exercícios
O arquivo `src/exemplo1.js` possui um código para carregar na variável `foods` o conteúdo do arquivo `foods.json`.
```
// utiliza a função require do Node.js para importar um arquivo JSON
const foods = require("./foods.json");
// acessa a propriedade items do objeto
console.log(`Quantidade de alimentos: ${foods.items.length}`);
```
Todos os exercícios devem ser executado através da propriedade `scripts` do `package.json`, como exemplo:
```
npm run exemplo1
npm run exemplo2
npm run um
npm run dois
```

O arquivo `src/exemplo2.js` possui um código para ler os parâmetros passados pela linha de comando. Por exemplo o comando `npm run exemplo2 Maria` pegará o parâmetro _Maria_.
```
// Pega os argumentos a partir do índice 2
const args = process.argv.slice(2); 

if (args.length > 0) {
  const param = args[0];
  console.log(`Parâmetro recebido: ${param}`);
} else {
  console.log("Nenhum parâmetro foi passado.");
}
```
O arquivo `src/exemplo3.js` possui o código para verificar se exite o _termo_ em uma string.

Cada exercício vale 2 pts.

#### Exercício 1
Codifique no arquivo `src/um.js` um programa para listar o __id__ e a __descrição__ de cada produto.

#### Exercício 2
Codifique no arquivo `src/dois.js` um programa que recebe o __id__ de um alimento e retorna a __descrição__ e __calorias__ (propriedade __energy__) desse alimento.
 
Resultado esperado para `npm run dois 29`:
```
29: Curau, milho verde -  78
```
Resultado esperado para `npm run dois 1000`:
```
ID 1000 não localizado
```
Resultado esperado para `npm run dois`:
```
Não foi fornecido o ID do alimento
```

#### Exercício 3
Alterar o código do Exercício 2 para retornar também o nome da categoria do alimento. 
Resultado esperado para `npm run tres 29`:
```
29: Curau, milho verde -  78 - Cereais e derivados
```
Resultado esperado para `npm run tres 1000`:
```
ID 1000 não localizado
```
Resultado esperado para `npm run tres`:
```
Não foi fornecido o ID do alimento
```

#### Exercício 4
Alterar o código do Exercício 3 para receber um termo que é parte da descrição do alimento e retorna o primeiro alimento que bate com o termo buscado. 
Resultado esperado para `npm run cinco farinha`:
```
281: Cação, posta, com farinha de trigo, frita -  208 - Pescados e frutos do mar
```
Resultado esperado para `npm run cinco teste`:
```
Termo teste não localizado
```
Resultado esperado para `npm run cinco`:
```
Não foi fornecido um termo de busca
```