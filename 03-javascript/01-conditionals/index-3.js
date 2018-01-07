// Vicular  los elementos del html
var select1 = document.getElementById('actividades1');
var para1 = document.getElementById('respuesta1');
para1.textContent = 'La Macarena';
console.log(para1);

// Agregar un escuchador
select1.addEventListener('change', seleccionarActividad1);

// función que realiza los cambios
function seleccionarActividad1() {
  var choice1 = select1.value;
  // Cantar
  if (choice1 === 'cantar') {
    para1.textContent = 'La Macarena';
  // Bailar
  } else if (choice1 === 'bailar') {
    para1.textContent = 'Salsa';
  // Jugar
  } else if (choice1 === 'jugar') {
    para1.textContent = 'Poker';
  // Divertirse
  } else if (choice1 === 'divertirse') {
    para1.textContent = 'Cine';
    // Amar
  } else if (choice1 === 'amar') {
    para1.textContent = 'Solamente amor';
    // todo lo demás
  } else {
    para1.textContent = '';
  }
}

// Vicular  los elementos del html
var select2 = document.getElementById('actividades2');
var para2 = document.getElementById('respuesta2');
para2.textContent = 'Poker';
console.log(para2);

// Agregar un escuchador
select2.addEventListener('change', seleccionarActividad2);

// función que realiza los cambios
function seleccionarActividad2() {
  var choice2 = select2.value;
  // Cantar
  if (choice2 === 'cantar') {
    para2.textContent = 'La Macarena';
  // Bailar
  } else if (choice2 === 'bailar') {
    para2.textContent = 'Salsa';
  // Jugar
  } else if (choice2 === 'jugar') {
    para2.textContent = 'Poker';
  // Divertirse
  } else if (choice2 === 'divertirse') {
    para2.textContent = 'Cine';
    // Amar
  } else if (choice2 === 'amar') {
    para2.textContent = 'Solamente amor';
    // todo lo demás
  } else {
    para2.textContent = '';
  }
}