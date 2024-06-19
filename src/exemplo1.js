// utiliza a função require do Node.js para importar um arquivo JSON
const foods = require("./foods.json");

// acessa a propriedade items do objeto
console.log(`Quantidade de alimentos: ${foods.items.length}`);