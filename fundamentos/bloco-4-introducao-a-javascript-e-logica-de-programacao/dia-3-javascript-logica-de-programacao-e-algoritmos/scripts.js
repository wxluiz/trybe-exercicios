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


// Exercicio 3.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0];
let menor = array[0];
for (let index = 0; index < array.length; index +=1) {
    if (array[index].length > maior.length) {
        maior = array[index]
    }
    else if (array[index].length < menor.length) {
        menor = array[index]
    }
}
console.log(maior)
console.log(menor)

