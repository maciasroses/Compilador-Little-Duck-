lexer grammar LittleDuckLexer;

PROGRAM: 'program';
MAIN: 'main';
END: 'end';
VAR: 'var';
COLON: ':';
SEMICOLON: ';';
COMMA: ',';
INT: 'int';
FLOAT: 'float';
CURLY_BRACKET_OPEN: '{';
CURLY_BRACKET_CLOSE: '}';
PRINT: 'print';
PARENTHESIS_OPEN: '(';
PARENTHESIS_CLOSE: ')';
EQUAL: '=';
WHILE: 'while';
DO: 'do';
IF: 'if';
ELSE: 'else';
GREATHER_THAN: '>';
LESS_THAN: '<';
NOT_EQUAL: '!=';
PLUS: '+';
MINUS: '-';
ASTERISK: '*';
SLASH: '/';
VOID: 'void';
SQUARE_BRACKET_OPEN: '[';
SQUARE_BRACKET_CLOSE: ']';

WS: [ \t\r\n]+ -> skip;
// Esta regla ayuda a que se omitan los espacios en blanco, tabulaciones y saltos de linea

ID: '$' [a-zA-Z0-9]+;
// Los identificadores siempre empiezan con un signo de $ y despues pueden tener letras y numeros
CTE_STRING:
	'"' (.)*? '"'; // Las cadenas de texto pueden ser vacias
CTE_INT: [0-9]+;
CTE_FLOAT: [0-9]+ '.' [0-9]+;