// const peso = 60;
// const altura = 160;

// calculandoIMC = (peso, altura) => {
//   const calculoIMC = peso / Math.pow((altura/ 100), 2);
//   console.log(`Seu IMC é: ${calculoIMC.toFixed(2)}`);
// }

// calculandoIMC(peso, altura);

const readline = require('readline-sync');

const qualPeso = readline.questionFloat('Qual o seu peso? ');
const qualAltura = readline.question('Qual sua altura? ');

calculandoIMC = (peso, altura) => {
  return peso / Math.pow((altura/ 100), 2).toFixed(2);
}

console.log(`Seu IMC é: ${calculandoIMC(qualPeso, qualAltura)}`);
