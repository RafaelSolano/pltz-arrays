const totals = [2,2,2,2,2]

//Forma clsica 
let sumT= null;
for (let i = 0; i < totals.length; i++) {
  const element = totals[i];
  sumT += element;
}

console.log(`Suma Total: ${sumT}`);


//Nueva forma con Reduce
let total =null
const sumaTotl = totals.reduce((total, item)=> total + item);
console.log(sumaTotl);
console.log(totals);