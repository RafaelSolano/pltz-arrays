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
];


const total =orders.map(e =>e.total)
const nombre = orders.map(e => e.customerName)
const staus = orders.map(e =>e.delivered)



console.log(total);
console.log(nombre);
console.log(staus);

/*
const rta2 = orders.map( elemet =>{
  elemet.tax  = .19;
  return elemet;

})
console.log('rta2', rta2);
*/

//& Manera correcta
const rta3  = orders.map(item =>{
  return{
    ...item, 
    tax : item.total * 0.19,
    totalContax : parseInt(item.total +  item.total * 0.19),


  }
})
console.log(orders);
console.log(rta3);