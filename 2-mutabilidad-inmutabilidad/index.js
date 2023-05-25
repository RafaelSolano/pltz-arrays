

//Declaro el array  original
let original = [1,2,3,4,5];

//Declaro el array copia
let copia=[];

//imprimo el original
console.log(`original: ${original}`);
//imprimo la copia
console.log(`copia: ${copia}`);

//le asigno los valores de original a copia 
copia = original

//imprimo copia
console.log(copia);

//Asigno a copia en la posicion un nuevo valor
copia[0] = 'hola'
//imprimo copia conel nuevo valor
console.log(`copia: ${copia}`);

//imprimo Original
console.log(`original: ${original}`);
