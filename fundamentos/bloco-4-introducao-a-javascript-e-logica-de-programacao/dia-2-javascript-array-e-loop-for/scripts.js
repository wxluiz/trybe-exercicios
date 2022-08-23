let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];



// Exercicio 1.



for (let index = 0; index < numbers.length; index+=1) {
    console.log(numbers[index])
}

// Exercicio 2.


let sum = 0;
for (let index = 0; index < numbers.length; index+=1) {
   sum = sum + numbers[index]
}
console.log(sum)


// Exercicio 3.


let sum = 0;
for (let index = 0; index < numbers.length; index+=1) {
   sum = sum + numbers[index]
   media = sum / numbers.length
}
console.log(media)


// Exercicio 4.


let sum = 0;
for (let index = 0; index < numbers.length; index+=1) {
   sum = sum + numbers[index]
   media = sum / numbers.length
}
console.log(media > 20? "Valor maior que 20":"valor menor ou igual a 20")

// Exercicio 5.


let maiorNumero = numbers[0]
for (index = 0; index < numbers.length; index +=1) {
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index]
    }
}
console.log(maiorNumero)

// Exercicio 6.


let impar = 0;
for (let index = 0; index < numbers.length; index+=1) {
    if (numbers[index] % 2 != 0) {
        impar += 1
    }  

}
console.log(impar)

if (impar = 0) {
    console.log("enhum valor ímpar encontrado")
}

// Exercicio 7.

let menorNumero = numbers[0]
for (let index = 0; index < numbers.length; index +=1) {
    if (numbers[index] < menorNumero) {
        menorNumero = numbers[index]
    }
}
console.log(menorNumero)


// Exercicio 8.

let ate25 = 0
let array = []
for (let index = 1; index <= 25; index +=1) {
    ate25 += 1
    array.push(ate25)
}
console.log(array)


// Exercicio 9.


for (let index = 0; index < array.length; index +=1) {
    console.log(array[index] / 2)
}