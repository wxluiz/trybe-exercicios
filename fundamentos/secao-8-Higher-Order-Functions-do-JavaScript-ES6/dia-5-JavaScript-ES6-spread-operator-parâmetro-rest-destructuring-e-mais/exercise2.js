const sum = (...numbers) => {
    const retorno = numbers.reduce((acc, curr) => acc + curr)
    return retorno;
}

console.log(sum(4,5,6))