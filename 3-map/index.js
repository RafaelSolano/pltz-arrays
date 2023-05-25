const original = ['a','b','d','f','g','e','t',]
console.log(original);
const copia = []


//LLenamos el array copia 
for (let i = 0; i < original.length; i++) {
  const element = original[i] + i;
  copia.push(element);
  
}
console.log(copia);

//cambiando la  de valor la poscicion
copia[0] = 'hola'
console.log(`     copia: ${copia}`);
console.log(`original: ${original}`);


//array con Map
const arrMap = original.map(item => item + '1' )
console.log(arrMap);
