const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  const expectedResult = 20;
  
  function containsA() {
    // escreva seu código aqui
    let quantosAs = 0;
    names.forEach((element) => {
        const arrayLetras = element.split('');
        quantosAs += arrayLetras.reduce((acc, curr) => {
            if (curr === 'a' || curr === 'A') {
                return acc + 1
            }
            return acc
        }, 0)
    })
    return quantosAs;
  }

  console.log(containsA())