import readlinesync = require ("readline-sync");

const cores: string[] = [];

for (let i = 0; i < 5; i++) {
    const cor = readlinesync.question(`Digite a cor ${i + 1}: `);
    cores.push(cor);
}

console.log("As cores digitadas foram:");
console.log(cores);

const coresOrdenadas: string[] = [...cores].sort();

console.log("As cores em ordem crescente são:");
console.log(coresOrdenadas);
