// Exercicio 2
// const order = {
//     name: 'Rafael Andrade',
//     phoneNumber: '11-98763-1416',
//     address: {
//       street: 'Rua das Flores',
//       number: '389',
//       apartment: '701',
//     },
//     order: {
//       pizza: {
//         marguerita: {
//           amount: 1,
//           price: 25,
//         },
//         pepperoni: {
//           amount: 1,
//           price: 20,
//         },
//       },
//       drinks: {
//         coke: {
//           type: 'Coca-Cola Zero',
//           price: 10,
//           amount: 1,
//         },
//       },
//       delivery: {
//         deliveryPerson: 'Ana Silveira',
//         price: 5,
//       },
//     },
//     payment: {
//       total: 60,
//     },
//   };
  
//   const customerInfo = (order) => {
//     // Adicione abaixo as informações necessárias.

//     const address = 'address'; 
//     const deliveryPerson = order.order.delivery.deliveryPerson; 
//     const customerName = order['name']; 
//     const customerPhone = order['phoneNumber']; 
//     const street = order[address].street;
//     const number = order[address].number; 
//     const apartment = order[address].apartment; 

//     console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`);
//   };
  
//   customerInfo(order);
  
//   const orderModifier = (order) => {

//     const newBuyer = order.name = 'Luiz Silva';
//     const newTotal = order.payment.total = '50';
//     const pizzas = Object.keys(order.order.pizza);
//     const drinks = order.order.drinks.coke.type;

//     console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${newTotal},00.`);
//   };
  
//   orderModifier(order);

// Exercicio 3

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const addNewKey = (obj, key, value) => {
    obj[key] = value;
  };
  
  addNewKey(lesson2, 'turno', 'noite');
  console.log(lesson2);

  const sizeObj = (obj) =>  Object.keys(obj).length;
console.log(sizeObj(lesson1));

const listValues = (obj) =>  Object.values(obj);
console.log(listValues(lesson1));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

const getNumberOfStudents = (obj) => {
    let total = 0;
  
    const array = Object.keys(obj);
      
    for (index in array) {
      total += obj[array[index]].numeroEstudantes;
    }
    return total; 
  };
  console.log(getNumberOfStudents(allLessons));

  const getValueByNumber = (obj,number) => Object.values(obj)[number];
console.log(getValueByNumber(lesson1, 2));

const verifyPair = (obj, key, value) => {
    const arr = Object.entries(obj);
    let isEqual = false;
    for (let index in arr) {
      if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
    }
    return isEqual;
  };
  console.log(verifyPair(lesson2,'professor','Carlos'));