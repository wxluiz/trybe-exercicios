let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercicio 1.

// for (let index = 0; index < numbers.length; index+=1) {
//     console.log(numbers[index])
// }

// Exercicio 2.
// let sum = 0;
// for (let index = 0; index < numbers.length; index+=1) {
//    sum = sum + numbers[index]
// }
// console.log(sum)

// Exercicio 3.

// let sum = 0;
// for (let index = 0; index < numbers.length; index+=1) {
//    sum = sum + numbers[index]
//    media = sum / numbers.length
// }
// console.log(media)

// Exercicio 4.


// let sum = 0;
// for (let index = 0; index < numbers.length; index+=1) {
//    sum = sum + numbers[index]
//    media = sum / numbers.length
// }
// console.log(media > 20? "Valor maior que 20":"valor menor ou igual a 20")

// Exercicio 5.
let maiorNumero = numbers[0]
for (index = 0; index < numbers.length; index +=1) {
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index]
    }
}
console.log(maiorNumero)

