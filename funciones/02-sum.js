let theResult = 0;

function sum( ) {
  // Variables
  let
    i,
    n = arguments.length,
    total = 0;

  // Sumar todos los argumentos
  for ( i = 0; i < n; i++ ) {
    total += arguments[ i ]
  }

  // Escribir el resultado
  return total;

}

theResult = sum( 1,8, 17 );
console.log( theResult );