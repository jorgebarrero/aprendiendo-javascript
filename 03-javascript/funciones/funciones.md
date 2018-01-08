# Funciones en javascript

Son la parte más importante y que requiere mayor dedicación.

* Las funciones son objetos
* Por defecto, arroja un valor de retorno (**return**) que es **undefined**
*

## Sintaxis de una función

Existen tres sintaxis de las funciones, como constructor, declaración o como expresión.

### Constructor

Es la forma menos eficiente, se crea en el ámbito global y no tiene acceso a las variables declaradas localmente. El objeto carece de propiedades y métodos propios, pero hereda las del prototipo **Function.prototype**

````javascript
new Function ([arg1[, arg2[, ...argN]],] functionBody)
}
````

### Declaración

Invoca  al constructor **Function**
Se Iza (**not hoisted**)

````javascript
function name([param,[, param,[..., param]]]) {
   [statements]
}
````

### Expresión

Invoca  al constructor **Function**
No se Iza (**not hoisted**)
el nombre es opcional

````javascript
var myFunction = function [name]([param1[, param2[, ..., paramN]]]) {
   statements
};
````

