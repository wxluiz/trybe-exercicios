const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

//   Exercicio 1

const livros = books.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`)

// console.log(livros)

// Exercicio 2 

const author = books.map((element) => ({
    age: (element.releaseYear - element.author.birthYear),
    author: element.author.name
}))

const organiza = author.sort((a, b) => {
    const idade1 = a.age
    const idade2 = b.age
    return idade1 - idade2
})

// console.log(organiza)

// Exercicio 3

const ficcao = books.filter((element) => (element.genre === 'Ficção Científica' || element.genre === 'Fantasia'))

// console.log(ficcao)

// exercicio 4 

const mais60 = books.filter((element) => (2022 - element.releaseYear > 60))

const maisVelhoAoMaisNovo = mais60.sort((a, b) => {
    return a.releaseYear - b.releaseYear
})

// console.log(maisVelhoAoMaisNovo)

// Exercicio 5

const nomes = books.filter((element) => (element.genre === 'Ficção Científica' || element.genre === 'Fantasia')).map((element) => element.author.name).sort()


// console.log(nomes)

// Exercicio 6

const nameMais60 = mais60.map((element) => element.name)

// console.log(nameMais60)

// Exercicio 7

const encontraAutor = books.find((element) => (element.author.name[1] === '.' && element.author.name[4] === '.' && element.author.name[7] === '.')
);

const nameBook = encontraAutor.name

console.log(nameBook)