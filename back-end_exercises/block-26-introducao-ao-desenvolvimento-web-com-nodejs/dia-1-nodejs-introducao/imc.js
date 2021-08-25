const peso = 60;
const altura = 160;

calculandoIMC = (peso, altura) => {
 const calculoIMC = peso / Math.pow((altura/ 100), 2);
 console.log(`Seu IMC é: ${calculoIMC.toFixed(2)}`);
}

calculandoIMC(peso, altura);
