# Operando con JS

Basado en [JavaScript in Half an Hour (Without jQuery!)
](https://www.youtube.com/watch?v=zPHerhks2Vg)

## Introducción

Una cosa es conocer los conceptos teóricos en los que se basa el lenguaje y otra muy diferente es ver como estos conceptos se ponen en práctica.

La idea de este documento es usar las ideas del video señalado arriba para practicar el uso de las herramientas que facilitan el aprendizaje de JS.

A los efectos de esta guía, usaremos Google Chrome.

## Propósito

JS es un lenguaje originalmente construido para interactuar con una página web, que no es otra cosa que un archivo de texto plano escrito de una cierta manera (en html), y lo realiza una página a la vez que es básicamente lá página que estás mirando. A efectos prácticos, tome cualquier archivo de texto (que tiene una extensión .txt) y cambie su extensión a .html y tendrá una página web. No hace nada, pero para efectos prácticos, es más que suficiente.

### HTML

El formato html es muy permisivo y tolerante, asi que puede contener errores y aún asi ser legible, aunque no realmente la mejor práctica. Si crea un archivo de texto plano (.txt), escribe "hola mundo" lo guarda cambiando su extensión a .html, puede abrirlo con un navegador (**browser**) como FireFox, Google Chrome, Opera, Explorer, Safari, etc. y en la mayoría de los casos podrá ver el texto "hola mundo", a pesar de no apegarse a la especificación html. (ver: 01-ob-texto-hola-mundo.html).

Cuando un html esta bien escrito, decimos que está bien formado (**well formed**). Este es un concepto muy importante.

Se necesita un programa de computadora especial que sea capaz de leer el texto plano y convertirlo en una página web. Este tipo de programa se conoce como un navegador (**browser**).

El navegador (**browser**) básicamente es un lector de archivos. Una vez leído el archivo, el navegador mantiene la información en la memoria de la computadora y libera el archivo para que otras computadoras puedan leerlo. La versión escrita en el archivo, puede ser ligeramente diferente a la que el navegador muestra y de hecho cada navegador puede mostrarla con ciertas pequeñas diferencias, importantes o no.

Esto sucede porque el navegador es independiente de la pantalla donde se despliega. Asi que en una pantalla grande se vera de una manera y en una pequeña se verá de otra. En la web el mismo archivo debe adaptarse a todas las marcas y tamaños de dispositivos disponibles. Si "*se ve bien*" en cualquier tamaño, decimos que esa página es responsiva (**responsive**).

El navegador despliega el contenido del archivo html dentro de la ventana (**window**) del navegador. El formato html le da ciertas pistas al navegador para que muestre la información de cierta manera, pero queda por parte del navegador resolver otras.

Podemos indicarle al navegador que queremos que la letra sea azul o roja. Pero si el dispositivo es blanco y negro, esa orden no podrá ser cumplida. Podemos decirle que queremos tipo de letra "Arial", pero si el teléfono no dispone de esa letra, tendrá que usar otra. Esos detalles los resuelve el navegador y cada uno lo resuelve a su manera.

### Importancia de apegarse a las recomendaciones HTML

Siendo honestos, podemos poner cualquier cosa en una pagina web ya que es un documento de texto y aun así poder ver algo, a pesar se ser una pésima práctica.

Lo ideal, es que escribamos un archivo siguiendo el estándard [WC3](https://www.w3c.es/Divulgacion/GuiasBreves/Estandares) y en la actualidad incluso existen herramientas que automáticamente validan si el html que has escrito cumple el estándard: [Markup Validation Service](https://validator.w3.org/).

Para inicios del 2018, el estándard más usado es el HTML5 que es simplemente una recomendación de la W3C que es una asociación mundial sin fines de lucro y cuyo propósito es facilitar al mundo el acceso a la información via web.

Puedes decidir o no apegarte al estándar, como de hecho hay personas y empresas que no se apegan como el caso de Microsoft. Esta actitud generalmente tiene un interés diferente al que promueve la W3C y generalmente no lleva a felices términos. Tarde o temprano la gente se termina apegando a la norma con mayor o menor cantidad de trabajo.

No tienes que saberte la norma completa para poderla aplicar, solo debes tener la disposición de adherirte y validar tu trabajo haciendo las correcciones necesarias. Es comparable a la ortografía. Si quieres que te entienda todo el mundo, sigue las normas ortográficas, aunque no estés de acuerdo con ellas.

### Anatomía de una página web

Una página web es un archivo, con extensión '.html'. Internamente, la página contiene algunas instrucciones para que el navegador sepa como desplegar la página.

#### Las etiquetas

Estas instrucciones se escriben (casi todas) en forma de dos etiquetas que indican donde comienza la instrucción y donde termina y pasamos a otra cosa.

````html
<etiqueta></etiqueta>
````

HTLM es muy permisivo en cuanto a los espacios y cambios de linea, asi que lo anterior produce el mismo resultado si lo escribimos asi:

````html
<etiqueta>

    En este espacio escribimos el contenido que verá el usuario

</etiqueta>
````

El concepto general es que debo decirle al navegador desde donde hasta donde esta regla aplica.

````html
<etiqueta-uno>
   contenido de la etiqueta uno
</etiqueta-uno>

<etiqueta-dos>
  contenido de la etiqueta dos
</etiqueta-dos>
````

Hay algunas excepciones donde solo tenemos que usar una etiqueta ya que representa una única instrucción invariable

````html
- <hr />> : Sirve para colocar una linea separadora horizontal
- <br />> : Sirve para colocar un cambio de linea
- <img />> : Sirve para mostrar el archivo de una imagen una imagen
````

Uno de los comportamientos más extraños en html es que aunque usemos varios párrafos dentro de una etiqueta, html lo interpreta como un texto contínuo:

````html
<etiqueta>
  Hola mundo
  Hola         mundo


  Hola mundo
</etiqueta>
````

produce esto como salida

````html
Hola mundo Hola mundo Hola mundo
````

(ver: 02-etiquetas.html)

Como se observa, el navegador ignora los separadores de párrafo, los espacios múltiples y los convierte todos a un espacio sencillo.

#### Los atributos de las etiquetas

Los atributos de una etiqueta son expresiones que le siguen a la etiqueta de apertura y le informan al navegador características especiales de esa etiqueta

````html
<etiqueta style="color:red">
  Hola mundo
  Hola         mundo


  Hola mundo
</etiqueta>
````

El navegador interpretará este código eliminando los espacios y cambios de linea repetidos y además colocará el texto en rojo.

Es de notar que el rojo puede variar según el dispositivo, la pantalla y el navegador involucrado, en general tendremos el texto: 'Hola mundo Hola mundo Hola mundo', escrito en rojo.

Los atributos de las etiquetas permiten especificar una gran cantidad de cosas, pero en general algunas etiquetas en particular requieren ciertos datos específicos.


## El rol de JS

JS en principio, no puede (y por razones de seguridad no debe) interactuar con otras páginas diferentes a aquella a la que está vinculado, así que el "ámbito" (**scope**) máximo es la ventana del navegador donde estoy viendo la página web (**window**).

Un archivo de texto en forma de html se diferencia de un archivo de texto convencional, en el hecho que puede tener la ubicación de otros archivos, tanto de otros html, como de imágenes, sonidos, películas, etc y permite que el navegador los muestre siempre que ese navegador pueda leer ese formato, o bien abandonar la pagina actual y cargar otra página (**reload**) a partir de la información html guardada en el archivo que se referencia.

Esta habilidad permite que el navegador (**browser**) pueda saltar de página en página con un simple click del usuario. También permite

El archivo de una página web contiene un texto escrito que constituye el punto de partida (**pages reload**) de esa página.
