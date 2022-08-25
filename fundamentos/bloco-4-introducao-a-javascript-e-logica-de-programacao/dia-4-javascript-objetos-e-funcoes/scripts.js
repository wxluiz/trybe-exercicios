// // Objetos e for/in 

// // 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.


// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   console.log("Bem vinda, " + info.personagem);


// //   2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. 


// info.recorrente = 'Sim';
// console.log(info)


// // 3 - Faça um for/in que mostre todas as chaves do objeto. 


// for (let key in info) {
//     console.log(key);
// }

// // 4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. 


// for (let key in info) {
//     console.log(info[key]);
// }


// // 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. 

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim'
//   };

//   for (let key in info) {
//     if (key === "recorrente" && info[key] === "Sim" && info2[key] === "Sim") {
//         console.log("Ambos recorrentes");
//     } else {
//         console.log(info[key] + " e " + info2[key])
//     }
    
//   }


// // Usando o objeto abaixo, faça os exercícios a seguir:


//   let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };


// //   6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

// console.log("O livro favorito de " + leitor["nome"] + " " + leitor["sobrenome"] + " se chama " + leitor["livrosFavoritos"][0]["titulo"])


// // 7 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:

// leitor.livrosFavoritos.push({
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
// },)


// 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

// console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos")


// Funções

// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// function verificarPalindromo (palavra) {
//     let reverse = palavra.split('').reverse().join('');
//     if (reverse === palavra) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// console.log(verificarPalindromo("arara"))
// console.log(verificarPalindromo("paralelepipedo"))


// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// function maiorValor (array) {
//     let numero1 = array[0];
//     let posicao = 0;
//     for (let index in array) {
//         if (numero1 < array[index]) {
//             numero1 = array[index];
//             posicao = index;
//         }
//     }
//     return posicao
// }
// console.log(maiorValor([2, 3, 6, 7, 10, 1]))


// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.


function menorValor (array) {
    let numero1 = array[0];
    let posicao = 0;
    for (let index in array) {
        if (numero1 > array[index]) {
            numero1 = array[index];
            posicao = index;
        }
    }
    return posicao
}
console.log(menorValor([2, 4, 6, 7, 10, 0, -3]))


