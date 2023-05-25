const  letters = [ 
  {firsrtName : 'Rafael', LastName : 'Solano',email : 'Rafael@gmail.com'},
  {firsrtName : 'Juan', LastName : 'Perez',email : 'Juan@gmail.com'},
  {firsrtName : 'Maria', LastName : 'Lopez',email : 'maria@gmail.com'},

  

  ];

//* forma clasica con el for loop

for (let i = 0; i < letters.length; i++) {
  const element = letters[i];
  console.log(element);
  
}


// Nueva forma con forEach ==> 
letters.forEach(element => console.log('for each ->',  element));

// Nueva forma for each  ==> fe
letters.forEach(function(item) {
  console.log("item " + item);
});

// nueva forma   ==> fre
letters.forEach(currentItem => {
  console.log("item " + currentItem);

})


//selcionando el div

const app = document.querySelector('#app');

letters.forEach(function(item) {
  const listItem = document.createElement('li');
  listItem.textContent=`Nombre: ${item.firsrtName} Apellido: ${item.LastName} EmailL: ${item.email} `
  app.appendChild(listItem);
});