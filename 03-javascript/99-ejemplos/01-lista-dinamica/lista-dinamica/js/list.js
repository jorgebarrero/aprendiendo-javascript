var contadorDeElementos = 1
var miLista = document.getElementById( 'lista-de-seleccion' );
var miElementoDeLaLista = document.getElementById( 'lista-de-seleccion' ).getElementsByTagName( 'li' );
var textoQueCambia = document.getElementById('texto-que-cambia' );
var miBoton = document.getElementById('mi-boton');

// puede usar querySelector(# id . class)

// for ( i = 0; i < miElementoDeLaLista.length; i++ ) {
//   //miLista[ i ].innerHTML = "SOY TODO OIDOS";
//   miElementoDeLaLista[ i ].addEventListener( 'click', cambiarTexto );
// }

miLista.addEventListener( 'click', cambiarTexto );

function cambiarTexto( e) {
if( e.target.nodeName === 'LI'){
    textoQueCambia.innerHTML = e.target.innerHTML;
    for ( i = 0; i < e.target.parentNode.children.length; i++ ) {
      e.target.parentNode.children[i].classList.remove('active');
    }
    e.target.classList.add('active');
  }
}

// function cambiarTexto( ) {
//   // alert( 'click detected' );
//   textoQueCambia.innerHTML = this.innerHTML;
//   for ( i = 0; i < miElementoDeLaLista.length; i++ ) {
//     //miLista[ i ].innerHTML = "SOY TODO OIDOS";
//     miElementoDeLaLista[ i ].classList.remove('active');
//   }
//   this.classList.add('active');
// }

function agregarElemento() {
  //alert( 'click detected' );
  miLista.innerHTML += ("<li> Otro elemento " + contadorDeElementos + " </li> ");
  contadorDeElementos++;
}


miBoton.addEventListener('click', agregarElemento);