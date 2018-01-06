# Información

En este ejercicio vemos como crear un selector con un menu de dropdown

## En el html

- Se crean dos archivos uno html y uno Javascript
- Se coloca una etiqueta informativa (label), un selector (select) y las opciones (option) en el **html**. Se deja al final un párrafo vacío que sera donde se visualice la respuesta
- Se incluye al final un tag script que importa el código js

## En el javascript

- Se crean dos variables en el js, una para el selector y otra para el párrafo del resultado usando **querySelector**.
- Se crea un escuchador del selector que esta pendiente del evento change
- Se crea un condicional multiple con un if que escribe en el párrafo de destino que estaba vacío un texto de acuerdo al item seleccionado en la lista desplegable.

> **Observaciones**
> Se realizó el ejercicio en una segunda versión cambiando la forma de seleccionar los objetos con getElementById

## Estructura de un if

Aplican las mismas reglas función

- if = nombre clave
- ( ) = argumento o expresión que arroja resultado de verdadero o falso
- { } = que se hace en caso verdadero
- else { } = que se hace en caso de falso
- else if ( ) { } = que se hace en caso que requiera volver a preguntar en forma anidada

## Valor verdadero de un if

Los condicionales de if no requieren que se evalúe explícitamente si un argumento es verdadero

```javascript
if (xyz === true)
// equivale a
if(xyz)
```

## Anidar

Los condicionales se pueden anidar

```javascript
if (choice === 'bailar') {
  if (ambiente === 'romantico') {
    para.textContent = 'Balada';
  } else {
    para.textContent = 'Salsa';
  }
}
```

## Operadores lógicos

se usan los operadores && (y) y  || (o)

```javascript
if (seleccion === 'bailar' && ambiente === 'romantico')
if (seleccion === 'correr' || seleccion === 'cantar')
```

## Comparaciones

Se usan === (identicamente igual), < y > mayor y menor que, <= >= mayor o igual y menor o igual, !== diferente.

```javascript
if (cantidad === 50)
if (cantidad > 50)
if (cantidad < 50)
if (cantidad >= 50)
if (cantidad <= 50)
if (cantidad !== 50)
```

## Alternativas al if (switch)

Puedes usar alternativas como switch para casos donde hay muchos condicionales

````javascript
switch (expresion) {
  case caso1:
    // código a ejecutar en caso 1
    break;

  case caso2:
    // código a ejecutar en caso 2
    break;

  // incluye todos los casos que quiera

  default:
    // código a correr en caso que no haya coincidencia
}
````

## Otra alternativa al if (condicional ?)

Este es otra forma de crear condicionales

- ( condición ) ? en caso verdadero : en caso falso

````javascript
var saludo = ( esDeDia ) ? 'Buenos días' : 'Buenas noches';
````