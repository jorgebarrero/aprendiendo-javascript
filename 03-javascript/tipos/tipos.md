# Tipos

Existen ocho tipos de datos en javascript

primitivos

1. string
2. number
3. boolean
4. undefined


complejos
1. array
2. object
3. function
4. null


## typeOf()

typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true

------

typeof "John"              // Returns "string"
typeof 3.14                // Returns "number"
typeof true                // Returns "boolean"
typeof false               // Returns "boolean"
typeof x                   // Returns "undefined" (if x has no value)

-----

typeof {name:'John', age:34} // Returns "object"
typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
typeof null                  // Returns "object"
typeof function myFunc(){}   // Returns "function"