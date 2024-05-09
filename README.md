# Compiladores. Little Duck - PHMaci

## Entrega #0

<img src="./proyecto.png" alt="Reglas del lenguaje" />

#### Expresiones Regulares

- ID -> ^\\$[a-zA-Z0-9]+
- CTE_STRING -> "[.*]"
- CTE_INT -> [0-9]+
- CTE_FLOAT -> [0-9]+\\.[0-9]+

#### Lista de Tokens

- program, main, void, end, var, int, float, print, do, while, if, else
- ( ) { } [ ] , : ;
- \+ \- \* / = > < !=

## Entrega #1

En esta entrega cambié el REGEX de ID debido a problemas de ANTLR, ya que, al tratar de omitir las " entre cualquier string ( " '"' " ), no detectaba cuando se procesaba un ejemplo.
El lenguaje con el que basé mi sintaxis fue PHP, viniendo de ahí el nombre; sin embargo, para generar los archivos necesarios para el árbol usé Javascript.

---

La forma de generar los archivos necesarios para poder probar nuestra lógica de código es la siguiente:

> npm run lexparse

_En caso de que no funcione, correr cada uno de estos comandos por separado_

> antlr4 -Dlanguage=JavaScript -o antlr_generated_files LittleDuckLexer.g4
> antlr4 -Dlanguage=JavaScript -o antlr_generated_files LittleDuckParser.g4

_Si tampoco funciona, el problema probablemente será que no tiene instalado antlr4, por lo que lo puede descargar de la siguiente forma:_

> sudo curl -O https://www.antlr.org/download/antlr-4.13.1-complete.jar

_Considera tener la última versión de Java, la cual puede descargar en la siguiente liga:_

> https://www.oracle.com/java/technologies/downloads/

---

Ahora, la forma de correr los tests es con los siguientes pasos:

> npm install

> npm run go
