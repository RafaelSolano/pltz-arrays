const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 340,
    delivered: false,
  },
];

const deliveryTrue = [];
const deliveryFalse = [];

//Forma de hace run filtro clasico

for (let i = 0; i < orders.length; i++) {
  const element = orders[i];
  if (element.delivered === true) {
    deliveryTrue.push(element);
  } else {
    deliveryFalse.push(element);
  }
}

console.log(orders);
console.log(deliveryTrue);
console.log(deliveryFalse);

//con filter

const arrTrue = orders.filter(item => item.delivered === true)
const arrfalse = orders.filter(item => item.delivered === false)


console.log( arrTrue);

console.log(arrfalse);

//filtrar numero pares

const numeros = [1,2,3,4,5,6,7,8,9,10];
console.log(numeros);

const numPares = numeros.filter(num => num % 2 === 0);
console.log(numPares);
const numImpares = numeros.filter(num => num % 2 !== 0);

console.log(numImpares);
numImpares [1] ='hola';
console.log(numImpares);


const search = (query )=>{
  return orders.filter(item =>{
    return item.customerName.includes(query) && item.delivered == false  ;
  })
}
console.log(search('Va'));