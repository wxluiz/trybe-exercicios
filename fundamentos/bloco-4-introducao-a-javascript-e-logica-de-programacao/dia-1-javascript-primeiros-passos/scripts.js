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


// 8.🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.


const tres = [1, 5, 7]

if (tres[0] % 2 == 0 || tres[1] % 2 == 0 || tres[2] % 2 == 0) {
    console.log("true")
}
else {
    console.log("false")
}


// 9.Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

const tres = [2, 2, 4]

if (tres[0] % 2 != 0 || tres[1] % 2 != 0 || tres[2] % 2 != 0) {
    console.log("true")
}
else {
    console.log("false")
}


// 10.Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

const custoProduto = 50;
const valorVenda = 100;
let impostoSobreCusto = custoProduto * 0.2;
let valorCustoTotal = custoProduto + impostoSobreCusto;
let lucro = valorVenda - valorCustoTotal

if (custoProduto < 0 || valorVenda < 0) {
    console.log("Valor não correspondente.");
}
else {
    console.log(lucro * 1000)
}


// 11.Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let salarioBruto = 3000;
let inss = 0;
let aliquota = 0;
let parcela = 0;
let ir = 0;
let salarioBase = 0;
let salarioLiquido = 0;


if (salarioBruto <= 1556.94) {
    inss = inss + salarioBruto * 0.08;
    salarioBase = salarioBruto - inss;
    }
    else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    inss = inss + salarioBruto * 0.09;
    salarioBase = salarioBruto - inss;
    }
    else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    inss = inss + salarioBruto * 0.11;
    salarioBase = salarioBruto - inss;
    }
    else {
    inss = inss + 570.88;
    salarioBase = salarioBruto - inss;
}

if (salarioBase <= 1903.98) {
    console.log("isento")
    salarioLiquido = salarioBase;
    }
    else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    aliquota = salarioBase * 0.075;
    parcela = 142.80;
    ir = aliquota - parcela;
    salarioLiquido = salarioBase - ir;
    }
    else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    aliquota = salarioBase * 0.15;
    parcela = 354.80;
    ir = aliquota - parcela;
    salarioLiquido = salarioBase - ir;
    }
    else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    aliquota = salarioBase * 0.225;
    parcela = 636.13;
    ir = aliquota - parcela;
    salarioLiquido = salarioBase - ir;
    }
    else {
    aliquota = salarioBase * 0.275;
    parcela = 869.36;
    ir = aliquota - parcela;
    salarioLiquido = salarioBase - ir;
}
console.log(salarioLiquido)





