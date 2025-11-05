import readlinesync = require ("readline-sync");

const numeros: Set<number> = new Set();
while (numeros.size < 10) {
    const valor = Number(readlinesync.question(`Digite o numero ${numeros.size + 1} numero inteiro: `));

    if (isNaN(valor)) {
        console.log("Valor invalido. Digite um numero inteiro.");
        
    } else if (numeros.has(valor)) {
        console.log("Numero ja digitado. Tente outro numero.");
    } else {
        numeros.add(valor);// Adiciona o numero ao Set se for valido e nao duplicado
    }
}

console.log("Os numeros digitados foram:");
console.table(Array.from(numeros));
