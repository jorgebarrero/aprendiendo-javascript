// Vicular  los elementos del html
var select = document.querySelector('select');
var para = document.querySelector('p');

// Agregar un escuchador
select.addEventListener('change', seleccionarActividad);

// función que realiza los cambios
function seleccionarActividad() {
  var choice = select.value;
  // Cantar
  if (choice === 'cantar') {
    para.textContent = 'La Macarena';
  // Bailar
  } else if (choice === 'bailar') {
    para.textContent = 'Salsa';
  // Jugar
  } else if (choice === 'jugar') {
    para.textContent = 'Poker';
  // Divertirse
  } else if (choice === 'divertirse') {
    para.textContent = 'Cine';
    // Amar
  } else if (choice === 'amar') {
    para.textContent = 'Solamente amor';
    // todo lo demás
  } else {
    para.textContent = '';
  }
}