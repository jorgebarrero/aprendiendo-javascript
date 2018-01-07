# Normas de Diseño y buenas prácticas de trabajo

## El proceso de comunicarse

Desde un  punto de vista algo más formal, los sistemas actuales tienen ciertas limitaciones técnicas que no hacen posible las comunicación efectiva, de la misma manera en que hay que hacerlo con las personas. Asi que se establecen dos dominios separados, el de hombres y personas que usan sistemas diferentes.

## Comunicación sincrónica

Las personas necesitamos comunicación fluida, conceptual, motivadora, respetuosa, en un lenguaje universal que sea entendible por otras personas asi no sean especialistas. El lenguaje sencillo, directo.

Distinguimos comunicación sincrónica en forma de contacto persona a persona, presencial o remota y cuyo objetivo fundamental es transmitir emociones, aprendizajes, opiniones y experiencias. Está fundamentada en el discurso y la conversación y en menor medida en sistemas informales escritos como el chat en sus diferentes modalidades.

Es conveniente, resumir los acuerdos verbales y documentarlos con aquellos elementos relevantes de cualquier comunicación sincrónica que ameriten preservarse.

## Comunicación asincrónica

La comunicación asincrónica es de orden técnico, comercial y metodológico. Está fundamentada en la palabra escrita. Persigue que la comunicación se mantenga objetiva, libre de interpretaciones ambiguas y fundamentalmente que persista en el tiempo.

### Nomenclatura y los nombres de las cosas

Los nombres de las cosas son de vital importancia para comunicarse efectivamente tanto con las máquinas como con las personas.

### Caracteres

El juego de caracteres usado debe ser utf-8, teniendo en cuenta que mayúsculas y minúsculas son diferentes.

Solo se usan letras del alfabeto inglés, mayúsculas o minúsculas. No hay letras acentuadas ni ñ o caracteres especiales (&,%,#, etc.). Estos últimos tienen usos reservados.

Los nombres de las cosas van sin espacios. Para facilitar la legibilidad de las palabras compuestas se usan las siguientes estrategias:

* camelCase
  * primera letra en minúscula y sin espacio las siguientes palabras
* UpperCamelCase (PascalCase)
  * primera en mayúscula de cada palabra sin espacios
* lower-dash-case
  * todo en minúscula separado con guiones
* lower_underscore_case
  * todo en minúscula separado con piso
* UPPER-DASH-CASE
  * todo en mayúscula separado con guiones
* UPPER_UNDERSCORE_CASE
  * todo en mayúscula separado con piso

### El idioma

Se usa preferiblemente el ingles para nombrar las cosas.

Si se decide usar otro idioma, este debe ser consistente.

Los nombres son descriptivos y no se abrevian palabras o se eliminan términos. La idea es decir lo mismo pero sin espacios.

Si tenemos nos referimos a una variable que describe el salario antes del aumento, su nombre debe ser salarioAntesDelAumento. Se considera incorrecto usar atajos tales como salAnt ya que si se desea usar esta estrategia hay que agregar un comentario asi: // salAnt = Salario antes del aumento.

### Archivos y las extensiones de archivo

* Los nombres de los archivos se escriben en lower-dash-case
* Las extensiones de los archivos se escriben en lowercase

### Variables

* Los nombres de las variables se escriben en camelCase

### Clases

* Los nombres de las clases se escriben en UpperCamelCase

### Constantes invariantes

* Las constantes invariantes (numero PI, constante E, etc, ) se escriben en UPPER-DASH-CASE