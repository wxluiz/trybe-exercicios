// Exercicio 1

// const testingScope = (escopo) => {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = `${ifScope}, ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//       let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//       console.log(elseScope);
//     }
//   }

//   testingScope(true);

// Exercicio 2 

//   const oddsAndEvens = [13, 3, 4, 10, 7, 2];

//   const sortOddsAndEvens = () => oddsAndEvens.sort((a, b) => a - b)
  

//   console.log(`Os numeros ${sortOddsAndEvens()} se encontram de forma crescente!`); // será necessário alterar essa linha 😉

//   Parte II 

// Exercicio 1 

// const fatorial = (numero) => {
//     let result = 1
//     for (let index = numero; index > 0; index -= 1) {
//         result = result * index
//     }
//     return result
// }

// console.log(`Esse é o fatorial ${fatorial(4)}`)

// Exercicio 2 

// const longestWord = 'Antônio foi ao banheiro e não sabemos o que aconteceu'// retorna 'aconteceu'

// const maiorPalavra = (frase) => {
//     const palavraArray = frase.split(' ');
//     let maiorTamanho = 0
//     let result = ''

//     for(const palavra of palavraArray) {
//         if (palavra.length > maiorTamanho) {
//             maiorTamanho = palavra.length
//             result = palavra
//         }
//     }
//     return result
// }

// console.log(maiorPalavra(longestWord))


// Exercicio 4

// Função 1

const substituaX = (nome) => {
    const frase = 'Tryber x aqui!';
    const fraseArray = frase.split(' ');
    for (let index = 0; index < fraseArray.length; index += 1) {
        if (fraseArray[index] === 'x') {
          fraseArray[index] = nome;
        }
    }
    return fraseArray.join(' ')
}

console.log(substituaX('josé'))

// Função 2

const minhasSkills = (func) => {
    const skills = ['JavaScript', 'HTML', 'CSS'];
    let concat = `
${func}

Minhas três principais habilidades são:`;

skills.forEach((skill) => { 
    concat = `${concat}
    - ${skill}`;
  });
  return concat;
}

console.log(minhasSkills(substituaX('bebeto')))