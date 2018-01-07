# Repeticiones

Son estructuras de código que se repiten varias veces

## Partes de una repetición

La repetición tiene las siguientes partes:

- Inicializador
- Condición de salida
- Contador
- Código que se va a repetir

## Recomendaciones

Asegúrese que la repetición tenga un mecanismo de salida. Un loop infinito puede detener la ejecución por siempre.

Si va a realizar una repetición que este sincronizando con los elementos de un arreglo, recuerde que se cuenta desde 0 y no desde 1.

## for

Este mecanismo permite que el usuario defina un inicio y un final con facilidad

Ejemplo, repetir 50 veces...

````javascript
for (var i = 0; i < 50; i++) {
  //Código que se va a repetir
}

// donde...

var i = 0 // es el inicializador
i < 50 // es el la condición de salida
i++ // es el contador
````


