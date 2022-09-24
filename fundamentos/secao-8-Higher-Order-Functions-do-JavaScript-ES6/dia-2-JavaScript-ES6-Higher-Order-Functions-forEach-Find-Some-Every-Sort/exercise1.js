// 🚀 Organizando uma biblioteca
// Estes exercícios praticam os conceitos de Higher Order Functions associados a outros já vistos, como arrow functions, template literals, objetos e temas dos fundamentos. Essa mistura de conceitos é muito importante para o seu aprendizado, então use tudo o que sabe para resolver os exercícios!

// // Utilize o seguinte código como template para realizar os exercícios:

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

  const authorBornIn1947 = books.find((element) => {
   return element.author.birthYear === 1947;
  })

//   console.log(authorBornIn1947.author.name)


const smallerName = () => {
    let nameBook = '';
    let book = '';
    books.forEach((element) => {
       book = element.name
       books.forEach((element2) => {
        if (book.length > element2.name.length) {
            nameBook = element2.name
        }
       })
    })
    return nameBook
}

// console.log(smallerName())

const getNamedBook = books.find((element) => {
    return element.name.length === 26
})

// console.log(getNamedBook.name)

const booksOrderedByReleaseYearDesc = books.sort((a, b) => {
    const yearA = a.releaseYear
    const yearB = b.releaseYear

    return yearB - yearA
})

// console.log(booksOrderedByReleaseYearDesc)


const everyoneWasBornOnSecXX = books.every((element) => {
    if (element.author.birthYear > 1899 && element.author.birthYear < 2000) {
        return true
    }
    return false
})

// console.log(everyoneWasBornOnSecXX)


const someBookWasReleaseOnThe80s = books.some((element) => {
    if (element.releaseYear > 1979 && element.releaseYear < 1990) {
        return true
    }
    return false
})

// console.log(someBookWasReleaseOnThe80s)

const authorUnique = books.every((element) => {
    !books.some((element2) => {
        (element2.author.birthYear === element.author.birthYear) && (element2.author.name !== element.author.name)
    })
})

console.log(authorUnique)