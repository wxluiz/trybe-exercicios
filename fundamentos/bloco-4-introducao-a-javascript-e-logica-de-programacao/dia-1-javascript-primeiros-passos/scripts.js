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


// 5.Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let angulo1 = 50
let angulo2 = 90
let angulo3 = 30
let total = angulo1 + angulo2 + angulo3


if (angulo1 + angulo2 + angulo3 === 180) {
    console.log("true")
}
else if (typeof total == "string" || typeof total == "boolean") {
    console.log("ERROR 404")
}
else {
    console.log("false")
}


// 6.Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let pecaDeXadrez = "CAVAlo";
let minuscula = pecaDeXadrez.toLowerCase();

switch (minuscula) {
    case "peão":
        console.log("Move-se sempre uma casa para frente")
        break
    case "cavalo":
        console.log("O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”")
        break
    case "bispo":
        console.log("Move-se na diagonal, quantas casas quiser")
        break
    case "torre":
        console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.")
        break
    case "dama":
        console.log("Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.")
        break
    case "rei":
        console.log("Pode mover-se em qualquer direção, porém apenas uma casa por vez, como indicam os pontos vermelhos na figura abaixo.")
        break
    default:
        console.log("ERROR 404")
}


// 7.Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:


let notaEmPorcentagem = 60;


if (notaEmPorcentagem < 0 && notaEmPorcentagem > 100) {
    console.log("ERROR 404")
}
else if (notaEmPorcentagem >= 90){
    console.log("A")
}
else if (notaEmPorcentagem >= 80){
    console.log("B")
}
else if (notaEmPorcentagem >= 70){
    console.log("C")
}
else if (notaEmPorcentagem >= 60){
    console.log("D")
}
else if (notaEmPorcentagem >= 50){
    console.log("E")
}
else if (notaEmPorcentagem < 50){
    console.log("F")
}
