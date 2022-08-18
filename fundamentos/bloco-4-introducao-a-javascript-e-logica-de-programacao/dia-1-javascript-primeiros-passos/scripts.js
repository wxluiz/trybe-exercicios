// 1.Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados.
let a = 1;
let b = 2;

a + b
a - b
a * b
a / b
a % b

// 2.Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

let doisNumero1 = 1;
let doisNumero2 = 2;

if (doisNumero1 > doisNumero2) {
    console.log(doisNumero1)
}
else if (doisNumero1 === doisNumero2) {
    console.log("numeros iguais")
}
else {
    console.log (doisNumero2)
}


// 3.Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

let tresNumero1 = 5;
let tresNumero2 = 7;
let tresNumero3 = 3;

if (tresNumero1 > tresNumero2 && tresNumero1 > tresNumero3) {
    console.log(tresNumero1)
}
else if (tresNumero2 > tresNumero3 && tresNumero2 > tresNumero1) {
    console.log(tresNumero2)
}
else {
    console.log(tresNumero3)
}


// 4.Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo, e caso não seja nem positivo e nem negativo retorne "zero".

let ex4 = -4;

if (ex4 > 0) {
    console.log("positive")
}
else if (ex4 < 0) {
    console.log("negative")
}
else {
    console.log("zero")
}

