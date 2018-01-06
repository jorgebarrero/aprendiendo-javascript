var select = document.querySelector( 'select' );
var html = document.querySelector( 'html' );
var negro = 'black';
var blanco = 'white';
document.body.style.padding = '10px';

function update( bgColor, textColor ) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.onchange = function( ) {
  ( select.value === 'negro' ) ? update( negro, blanco ): update( blanco, negro );
}