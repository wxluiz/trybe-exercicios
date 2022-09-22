// Exercicio 1

const emails = (name) => {
   return { 'nome': name, Email: `${name.replace(' ', '_').toLowerCase()}@trybe.com` };
}

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.log(newEmployees(emails))

// Exercicio 2

const luckNumber = () => Math.ceil(Math.random() * 5)

const winnerNumber = (number, callback) => {
    const numero = callback();
    if (number === numero) {
        return 'Parabéns você ganhou';
    }
    return `numero sorteado: ${numero}, Tente novamente`;
}

console.log(winnerNumber(4, luckNumber))

// Exercicio 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const correctAnswers = (array1, array2) => {
    let count = 0;
    for (let index = 0; index < array1.length; index += 1) {
        if (array1[index] === array2[index]) {
            count += 1;
        }
        if (array1[index] ==! array2[index] && array2[index] ==! 'N.A') {
            count -= 0.5
        }
    }
    return count
}

const studentPoints = (array1, array2, func) => func(array1, array2);


console.log(studentPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, correctAnswers))