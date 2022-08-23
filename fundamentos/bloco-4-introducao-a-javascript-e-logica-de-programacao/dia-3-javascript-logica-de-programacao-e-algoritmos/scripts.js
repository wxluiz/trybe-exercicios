// Exercicio 1.

let fatorial = 10;
let resultado = 1;
for (let index = fatorial; index > 0; index -=1) {
    resultado *= index
}
    console.log("!" + fatorial + " = " + resultado)

// Exercicio 2.

let word = 'tryber';
let invert = ""
for (let index = word.length -1; index >= 0; index -=1) {
    invert += word[index]
}
console.log(invert)
