# Compiladores. Little Duck - PHMaci

## Entrega $0

<img src="./assets/proyecto.png" alt="Reglas del lenguaje - DIAGRAMA DEL PROYECTO" />

#### Expresiones Regulares

- ID -> ^\\$[a-zA-Z0-9]+
- CTE_STRING -> "[.*]"
- CTE_INT -> [0-9]+
- CTE_FLOAT -> [0-9]+\\.[0-9]+

#### Lista de Tokens

- program, main, void, end, var, int, float, print, do, while, if, else
- ( ) { } [ ] , : ;
- \+ \- \* / = > < !=

## Entrega $1

La investigación de herramientas resultó sencillo gracias a un repositorio que recogía las principales herramientas para el propósito de la entrega:

    https://gist.github.com/dimitrio-m/cf6cde052787ed97164fe6422a5e4cb0

Dado que mi propósito en un principio era hacerlo con PHP, el hecho de que no estuviera en la lista me hizo cambiar de opinión a otro lenguaje que me gusta mucho, el cual es Javascript, y, aunque ANTLR no era la primera como sí lo era Nearley, su documentación me resultó más complicada de entender, encontrando además con la segunda la opción de PHP en su documentación y ejemplos claros de su uso; Por esto último, cuando exploré la documentación del proceso en PHP se me hizo más fácil hacerlo en Javascript por el hecho del package.json y la instalación de dependencias como la evidentemente necesaria ANTLR4, sin dejar de lado la inspiración de PHP al seguir un poco su sintaxis.

En esta entrega cambié el REGEX de ID debido a problemas de ANTLR, ya que, al tratar de omitir las " entre cualquier string ( " '"' " ), no detectaba cuando se procesaba un ejemplo.
El lenguaje con el que basé mi sintaxis fue PHP, viniendo de ahí el nombre; sin embargo, para generar los archivos necesarios para el árbol usé Javascript.

---

Los archivos necesarios para compilar los archivos LittleDuckParser y LittleDuckLexer ya existen en la carpeta antlr, pero si se quieren volver a generar se tiene que correr el siguiente comando:

_Asegúrese de estar en la carpeta antes mencionada antes de correr los siguientes comandos._

    antlr4 -Dlanguage=JavaScript LittleDuckLexer.g4

    antlr4 -Dlanguage=JavaScript LittleDuckParser.g4

_Si tiene problemas al ejecutar los comandos, probablemente se debe a que no tiene instalado antlr4, por lo que lo puede descargar de la siguiente forma:_

    sudo curl -O https://www.antlr.org/download/antlr-4.13.1-complete.jar

_Considera tener la última versión de Java, la cual puede descargar en la siguiente liga:_

    https://www.oracle.com/java/technologies/downloads/

---

Ahora, la forma de correr compilar los tests es de la siguiente forma:

    npm install

    npm run compile

_En esta entrega solo se muestra en consola el árbol de análisis sintáctico._

## Entrega $2

En esta etapa, el primer paso fue decidir qué tipo de estructura se usaría para la parte de la semántica del directorio de funciones y sus tablas de variables, yéndonos por el camino más ágil por _llaves_ como lo son los **diccionarios** y seccionadas en clases.
Por otro lado, también se tuvo que crear el cubo semántico (el cual **no** haremos uso de él **todavía**) para tener los tipos que arrojaría cuando se haga uso de un operador. Para estos casos, decidí hacer una tabla, donde **I** es igual a _INTEGER_, mientras que **F** es igual a _FLOAT_, siendo los únicos dos tipos de variable con los que cuenta nuestro programa; pudiendo interacturar con distintos operadores y demostrando una salida para cuando X variable de cierto tipo (I o F) se procesan de acuerdo al operador.
En la siguiente tabla se muestran todas las combinaciones posibles para los operadores con las que cuenta la gramática:

|     | I I | I F | F I | F F |
| --- | --- | --- | --- | --- |
| +   | I   | F   | F   | F   |
| -   | I   | F   | F   | F   |
| \*  | I   | F   | F   | F   |
| /   | I   | F   | F   | F   |
| >   | I   | I   | I   | I   |
| <   | I   | I   | I   | I   |
| !=  | I   | I   | I   | I   |
| =   | I   | I   | F   | F   |

Después, se establecieron los puntos neurálgicos

<img src="./assets/programv3.jpeg" alt="Reglas del lenguaje - PROGRAM" />

1. En este punto se crear el directorio de funciones para guardar el nombre del programa, significando que no se puede crear una función después con el mismo nombre.

2. Se crea el cuádruplo inicial tipo GOTO para asignarle una etiqueta temporal y meterla a la pila de saltos.

3. Se obtiene el último salto de la pila de saltos para editar la etiqueta temporal antes creada, con ayuda de la obtención del indice actual de cuádruplos y asignarlo a ese punto.

4. Se vuelve a poner la función MAIN como currenfunction.

5. Para este punto, el programa ya terminó, por lo que se genera un cuádruplo especial que indica que el programa terminó, esto con el objetivo de que, si el programa solo tiene un condición o un ciclo, cualquier cosa que involucre un salto hacia una indice + 1, no vaya hacia la nada, si no que vaya a éste (además de que nos servirá para diferencia los cuádruplos de la tabla de consantes.). Después, se obtiene la tabla de constantes generada y el directorio de funciones, y se le pasa todo a la función que generará el archivo ovejota a partir del nombre del programa.

<img src="./assets/varsv2.jpeg" alt="Reglas del lenguaje - VARS" />

6. Se inicializa la tabla de variables para la función que se esté trabajando en ese momento.

7. Se checa si ya existe dicha variable en ese contexto, en caso de que sí, se arroja una excepción y manda error por variable ya declarada.

8. Se asocia el tipo a toda la lista de variables del contexto que estemos hablando.

<img src="./assets/funcsv2.jpeg" alt="Reglas del lenguaje - FUNCS" />

9. Se crea la función y se agrega al diccionario de funciones, revisando también si ya existe, en caso de que sí, arrojaría un error de función ya declarada como pasa con la lista de variables.

10. Se crea la tabla de argumentos, donde, al mismo tiempo que se meten ahí también se meten a la tabla de variables; además, se va revisando si ya existen, en caso de que sí, arroja un error de argumento o variable ya declarado.

11. Para este punto, se obtiene el indice actual de cuádruplos y se guarda éste en un parámetro llamado INICIOFUNC para saber a dónde ir cuando lo interpretemos.

12. Se crea el cuádruplo de tipo ENDFUNC, el cual servirá para que, cuando se esté ejecutando la función en la interpretación, el apuntador sepa a dónde volver.

<img src="./assets/fcall.jpeg" alt="Reglas del lenguaje - FUNCS" />

13. Se obtiene la función que se está llamando, y, si ésta no existe en el directorio de funciones, se arroja un error de que no fue declarada. Por otro lado, se obtiene la tabla de parámetros de la función. Así mismo, se inicializa un parámetro de conteo para recorrer los argumentos de la misma. Por último, se crea un cuádruplo de tipo ERA, el cual irá hacia el nombre de la función y se empatará con la lista de funciones que se le pasen al archivo ovejota, sabiendo así a cuál cuádruplo ir.

14. Se obtiene el tipo y el último operando (se saca su dirección de memoria ya sea de la tabla de variables o de la tabla de constantes) de las pilas de tipos y operandos, respectivamente. Así mismo, si el tipo del operando obtenido no es igual a el tipo del primer argumento de la función, se arroja un error, donde, al mismo tiempo, si se mandan más argumentos de los que recibe una función, se arroja otro error de exceso de argumentos. Por último, se crea el cuádruplo de tipo PARAM donde tiene la etiqueta param#k de acuerdo al contador establecido en un principio, el cual se aumenta al mismo tiempo.

15. Primeramente, si el número de argumentos de la función actual no coincide con el número de parámetros establecido en un principio de cuando se inicializó la llamada, se arroja un error. Por último, se crea el cuádruplo de tipo GOSUB el cual tendra como respuesta el nombre de la función que se está llamando.

_En esta entrega, además de mostrar en consola el árbol de análisis sintáctico, se muestra el directorio de funciones con sus tablas de variables._

### Entrega $2.5

De acuerdo al commit anterior, se decidió cambiar la lógica de la semántica que estaba puesta en los listeners para ponerla directamente en el parser, esto para que vaya más acorde con lo solicitado en la entrega 3. Afortunádamente, los puntos neurálgicos siguen siendo los mismos y la funcionalidad también, siendo un cambio mínimo que al final del día es imperceptible y no afecta para el resultado final.

## Entrega $3

Durante esta entrega se desarrollaron las soluciones programáticas para la generación de los cuádruplos tanto para expresiones aritméticas y relacionales, como para los estatus lineas y no lineales, implicando el establecido de los puntos neurálgicos en el resto de los diagramas.

A continuación, se explican los puntos representados en el diagrama:

<img src="./assets/printv2.jpeg" alt="Reglas del lenguaje - PRINT" />

16. Se saca el operando del momento, se obtiene su dirección de memoria, intentando primero a partir de la tabla de variables, si devuelve FALSE, significa que estamos hablando de una constante y ahora se intenta obtener su dirección de memoria a partir de la tabla de constantes, para al final ya crear el cuádruplo de tipo PRINT con su dirección de memoria, el cual ya está asociado a un tipo de acuerdo al mismo.

17. Se agrega la constante a la tabla de constantes a partir de un método donde, además de devolver la dirección de memoria (el cual ya se le asignó de acuerdo a un rango de dirección de memoria), si el string es exactamente el mismo a uno ya declarado, se obtiene su dirección de memoria y se crea el cuádruplo con su dirección.

<img src="./assets/cyclev2.jpeg" alt="Reglas del lenguaje - CYCLE" />

18. Se obtiene el indice actual de cuádruplos y se mete a la pila de saltos.

19. Se obtiene el último operando y el último salto para agregarlo al cuádruplo de tipo GOTOT.

<img src="./assets/conditionv2.jpeg" alt="Reglas del lenguaje - CONDITION" />

20. Se crea una nueva etiqueta para actualizarla después una vez obtengamos su GOTO. Además, se obtiene el útimo operando y se crea el cuádruplo de tipo GOTOF que dependa del primero mencionado y se pone la etiqueta. Por último, la etiqueta se agrega a la pila de saltos.

21. Se obtiene el último salto y el índice actual de cuádruplos, llamando a la función de editar cuádruplo de acuerdo a una etiqueta y se actualiza su resultado de una etiqueta a dicho salto.

22. Se crea una nueva etiqueta para actualizar después una vez obtengamos su GOTOF, creando además un cuádruplo de tipo GOTO donde se obtiene el último salto y el índice actual, actualizando el cuádruplo de acuerdo al salto obtenido y se pone el índice que le corresponde.

<img src="./assets/assignv2.jpeg" alt="Reglas del lenguaje - PRINT" />

23. Se comprueba si la variable existe, si no, arroja un error.

24. Se obtiene el valor procesado en EXPRESSION con el último valor de la pila de operandos pero sin borrarlo, generando así el cuádruplo de tipo asociativo con su dirección de memoria, el cual ya fue obtenido antes de crear el cuádruplo, ya sea a partir de la tabla de variables o la tabla de constantes.

<img src="./assets/expressionv2.jpeg" alt="Reglas del lenguaje - EXPRESSION" />
<img src="./assets/expv2.jpeg" alt="Reglas del lenguaje - EXP" />
<img src="./assets/termv2.jpeg" alt="Reglas del lenguaje - TERM" />

25. Se guarda el operador obtenido en la pila de operadores si este fue ingresado. (pasa lo mismo para los diagramas de EXP y TERM para los puntos 27 y 29)

26. Se obtiene el código del operador de acuerdo al cubo semántico gracias a su obtención a partir de la pila de operadores. Además, se obtiene la dirección de memoria del los 2 operandos (intentando ya sea en la tabla de variables y la tabla de constantes) de la pila de operandos, al mismo tiempo que los 2 tipos de la pila de tipos. Casi para terminar, se crea un temporal nuevo y se obtiene su tipo a partir del operador y los tipos de los operandos 1 y 2 con ayuda del cubo semántico, agregando a la tabla de variables este temporal, el cual nos devuelve su dirección de memoria (dependerá del tipo que se le asoció de acuerdo a su rango) y se agregará a la pila de operandos su dirección y a la pila de tipos su tipo. Por úlitmo, se agregará el cuádruplo de acuerdo al código del operador, la dirección de memoria del segundo operando obtenido, la dirección de memoria del primer operando obtenido y la dirección de memoria del temporal generado. (pasa lo mismo para los diagramas de EXP y TERM para los puntos 28 y 30)

<img src="./assets/factorv3.jpeg" alt="Reglas del lenguaje - FACTOR" />

31. Se comprueba si la variable existe, en caso de que no, se arroja un error.

32. Si el valor obtenido empieza con $ (el cual significaría una variable en mi contexto), no se hace nada. En caso contrario, se obtiene el tipo de la pila de tipos, al mismo tiempo de comprobar si se ingresó o no un + o un -, si sí, ahora se determina cuál fue para apendizar a la constante numérica éste símbolo. En cualquier caso, al final se agrega a la tabla de constantes con su tipo.

33. El valor procesado se guarda en la pila de operandos. Por otro lado, de acuerdo a este mismo valor procesado, se obtiene su tipo (ya sea a partir de la tabla de variables o tabla de constantes) y se guarda éste en la pila de tipos.

<img src="./assets/ctev2.jpeg" alt="Reglas del lenguaje - CTE" />

34. Se agrega "int" a la pila de tipos.

35. Se agrega "float" a la pila de tipos.

Así mismo, se considera la siguiente tabla de operadores para interpretar los cuádruplos de mejor manera, esto con el objetivo de tratar únicamente valores numéricos y no strings:

| Operador | Valor númerico |
| -------- | -------------- |
| +        | 0              |
| -        | 1              |
| \*       | 2              |
| /        | 3              |
| >        | 4              |
| <        | 5              |
| !=       | 6              |
| =        | 7              |
| PRINT    | 8              |
| GOTOF    | 9              |
| GOTOT    | 10             |
| GOTO     | 11             |
| END      | 12             |
| ENDFUNC  | 13             |
| ERA      | 14             |
| PARAM    | 15             |
| GOSUB    | 16             |

Por último, se creó la tabla de rangos de memoria en cuanto a los tipos de variables y su entorno (local, global temporal y constante), siendo ésta la siguiente:

| Variable  | MEMORY RANGE   | INT RANGE      | FLOAT RANGE    | STRING RANGE   |
| --------- | -------------- | -------------- | -------------- | -------------- |
| Global    | [1000, 4999]   | [1000, 2999]   | [3000, 4999]   | -              |
| Temporal  | [5000, 9999]   | [5000, 7499]   | [7500, 9999]   | -              |
| Local     | [10000, 14999] | [10000, 12499] | [12500, 14999] | -              |
| Constante | [15000, 29999] | [15000, 19999] | [20000, 24999] | [25000, 29999] |

_En esta entrega, además de mostrar en consola el árbol de análisis sintáctico y el directorio de funciones con sus tablas de variables, se muestran en una tabla los cuádruplos compilados (aún sin representación de dirección de memoria ni consideración de tipos)._

### Entrega $3.5

En esta parte, después de un par de días de la fecha de entrega correspondiente a la Entrega 3, se cambió a que los cuádruplos se generaran con direcciones de memoria de acuerdo a la tabla de rangos de memoria, y también se consideraran los tipos, usando el cubo semántico, implicando agregarle un atributo CODE al diccionario de acuerdo a la tabla de operadores planteada.

Por otro lado, se ajustaron algunos puntos neurálgicos, los cambios fueron sobreescritos de acuerdo a la imagen correspondiente, incluyendo imágenes y descripciones, pero todos estos se pueden ver ya sea en la carpeta ASSETS o en el historia de versiones.

## Entrega $4

Para esta entrega, lo primero que se hizo fue reestructurar el proyecto y seccionarlo en carpetas, esto con el objetivo de tener un orden y separar las partes CÓDIGO INTERMEDIO (intermediate_code) y EJECUCIÓN (virtual_machine).

Así mismo, en lugar de correr el compilado e interpretado con un archivo fijo, ahora se le solicita al usuario final que escoja algunas de las opciones dentro de cada carpeta tests de acuerdo al contexot (si éste está en intermediate_code o virtual_machine). Para el caso de EJECUCIÓN, el archivo siempre se sobreescribirá si dejamos el nombre del programa como lo tienen todos los tests (\$macias, donde se tiene que escribir con todo y signo de $, haciendo referencia al mal querido pero bien recordado lenguaje PHP), donde, para efectos prácticos, se omite la extensión de cualquiera de los tests (.txt para CÓDIGO INTERMEDIO, y .ovejota para EJECUCIÓN).

Para correr el intérprete, como lo dice al final de correr el CÓDIGO INTERMEDIO, hay que correr el siguiente comando:

    npm run interpret

El funcionamiento de la máquina virtual es sencillo, de acuerdo a la siguiente estructura de los archivos ovejotas generados por el compilador:

> DIROPER,DIRARG1,DIRARG2,DIRRES
> ...
> $
> DIRECCION,VALOR
> ...

El archivo se divide en 2 secciones: la primera antes del signo de $ se encuentran todos los cuádruplos en base a dirección de memoria, concluyendo con el cuádruplo del final de archivo; la segunda después del signo de \$ es la tabla de constantes, tambén en base a dirección de memoria en la primera columna y su valor en la segunda columna.

La máquina virtual separa las 2 secciones, guardando los cuádruplos y las constantes con la siguiente estructura:

> Cuádruplos: [
> [ 'DIROPER', 'DIRARG1', 'DIRARG2', 'DIRRES' ],
> ...
> ]
>
> Constantes: {
> 'DIRECCION': VALOR,
> ...
> }

Después se inicializa la memoria de acuerdo al rango ya mencionado en la Entrega 3, haciendo 3 arreglos, memoria global, memoria temporal y memoria local, llenándose poco a poco de acuerdo al programa en su lugar asignado en base a la base que le corresponda según su dirección de memoria, donde, la base 1000 es para las variables globales, la base 5000 es para las temporales, y la base 10,000 es para las locales.

Para terminar, gracias a un apuntador que recorrerá cada uno de los cuádruplos, mientras que no llegue al final de los cuádruplos (el cual es el 12), y también a un switch que tendrás los casos de acuerdo al operador o acción a realizar (el inicio de cada uno de los cuádruplos), en caso de los operaciones aritméticas, establece el valor en memoria dependiendo su segmento (depende su rango, por ejemplo, si es mayor o igual a 1000, pero menor o igual a 4999, su segmento será GLOBAL) y dependiendo su base, siendo ésta la posición en el arreglo inicial de memoria donde se guardará su valor, tanto para el argumento 1 y para el argumento 2, los cuales, cuando se agregan, devuelven el valor y hacen la operación según el operador (cabe mencionar que, cuando hablamos de una variable, ésta tiene que estar inicializada, en caso contraario, mandará un error).
En el caso de un print, debe tomar el valor RES del cuádruplo y obtener su valor, ocurriendo un error cuando se intenta impirmir una variable no inicializada, como ya se comentó anteriormente. En caso de que todo esté correcto o se imprima una constante, esos prints se irán apendizando a una función especial para los casos en donde hay varias cosas a imprimir en un solo print (esto incluye strings separados por comas, variables o cálculos), donde, si detecta un "\n" el acumulado termina y ya hace la impresión en consola, en otro caso, cuando cuádruplos de print son separados por otros cuádruplos.
Para terminar, en el caso de los saltos (goto, gotot y gotof) se mueve la posición del apuntador al que apunte el cuádruplo del salto (menos 1 por manejar índices de 0), cambiando la lógica en cuanto gotot y gotof, cuando se obtiene el valor del que depende el salto, inviritiendo la lógica en estos casos, moviendo el apuntador si sí en gotof y si no en gotot. Para el goto, sencillamente se mueve al apuntor al parsear el resultado del cuádruplo menos 1.

### Entrega $4.5 - Funciones

Esto ya es extra, pero se decidió implementar el reto del compilado y ejecución de las funciones, las cuales requirieron cambios de crear nuevos operadores para manejar la lógica de cuándo inicia una función, cuándo termina, inicializar sus parámetros y cuándo llamarla. Esta implementación también exigió cambios en los puntos neurálgicos (la mayoría solo en FUNC y FCALL) y la creación de nuevas tablas como la tabla de parámetros y el cambio de la ubicación de la tabla de consantes, haciéndola global y accesible desde cualquier tipo de función, ya sea global (main) o cualquier función.

Por otro lado, esto impactó también en cómo se genera el archivo compilado listo para interpretar, quedando de la siguiente manera:

> ...
> DIRECCION,VALOR
> $
> FUNCNAME,TIPO,CUADRUPLOINICIOFUNC
> ...

Por lo que, también hubo cambios en la máquina virtual y sus secciones, agregando una tercera para guardar las funciones de la siguiente manera:

> ... <br/>
> Funciones: { <br/>
> 'FUNCNAME': { FUNCTYPE, CUADRUPLOINICIOFUNC }, <br/>
> ... <br/>
> } <br/>

Ahora, los cambios dentro del intérprete para la ejecución de las funciones fueron los siguientes:

- Agregar al constructor un stack de llamadas, el cual servirá para que saber a qué punto volver una vez termine la función y para también poder llamar una función dentro de otra función.

- Agregar una memoria local que en un inicio es NULL, la cual se inicializará (llenará el arreglo de una dimensión de 5000 valores con valores NULL) después cuando se ejecuté una función, volviéndose otra vez NULL cuando termine de ejecutarse la función.

- Variables globales del índice actual de variables enteras y locales para los argumentos.

- Función que parsea la tercera sección del archivo ovejota para guardar las funciones.

- Nueva función para verificar el rango de memoria (verifyVarRangeForLocalMemory), donde, cuando es FLOAT, se suman 2500 al índice para guardar en esa posición el argumento enviado y que, a la hora de ejecución, tenga la misma dirección el parámetro declarado en la función y tome su valor.

- Cambios a la hora de obtener el valor de acuerdo a su memoria: Cuando es del segmento local (determinado por su rango) éste busca en la memoria local actual, continuando con la misma lógica de la dirección menos su base. Además, para el caso de la llamada de una función dentro de otra función, si el valor del parámetro fue NULL, se obtiene la memoria local anterior al hacerle pop al stack de memorias, donde debería encontrar su valor, una vez lo hace, vuelve a meter al stack esa memoria y continuar con la función ahora llamada.

- Cambios al establecer un valor: Idéntico al primer cambio en la función para obtener el valor de una variable o constante, si estamos en un segmento local, ésta se establece en la memoria local y no en la global.

- Cambios en el Switch para los cuádruplos especiales en caso de una función:
  - Cuádruplo ERA: Se mete al stack de llamadas la memoria local actual (el primer valor siempre será un NULL). Además, se inicializa la memoria con el segmento LOCAL. Por último, se reinician los contadores globales del índice actual de variables enteras y locales para los argumentos.
  - Cuádruplo PARAM: Se crea una variable auxiliar para alinear la base del argumento a mandar, donde, con ayuda de la función creada (verifyVarRangeForLocalMemory) se determina si es INT o FLOAT, aumentando el contador global del índice actual de la variable que haya sido, donde además, si fue float, se le suma 2500 al índice por la diferencia que existe entre el rango de memoria local de INT y FLOAT. Por último, se guarda el valor del ARG1 en la memoria local actual en el índice calculado.
  - Cuádruplo GOSUB: Se mete al stack el número del cuádruplo en el que el apuntador se quedó, sabiendo a dónde retornar. Después de eso, ya podemos rederigir el apuntador a donde se supone que inicia la ejecución de la función que se está llamando, información que podemos obtener de la tabla de funciones de acuerdo al RES.
  - Cuádruplo ENDFUNC: Obtiene del stack de llamadas la última dirección, esto con el objetivo de saber en dónde se quedó y redirigir al apuntador de nuevo ahí. Por otro lado, se también se recupera la memoria local anterior, en caso de que se haya llamado una función dentro de otra, asegurando el volver al contexto anterior. Por último, se reinician los contadores globales del índice actual de variables enteras y locales para los argumentos.

Por último, fuera de las funciones, se creó un archivo especial para escuchar los errores, ya sean léxicos o sintácticos, cambiando mi index.js en la parte del compilado para poder mostrar cualquier tipo de error.

Y listo, ya solo queda ejecutar los comandos correspondientes y ver el resultado \:D
