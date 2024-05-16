grammar LittleDuckParser;

options {
	tokenVocab = LittleDuckLexer;
}

program:
	PROGRAM program_id SEMICOLON has_vars has_funcs MAIN body END;
program_id: ID;
has_vars: vars?;
has_funcs: funcs*;

vars: VAR var_complement;
var_complement: (id_complement SEMICOLON)+;
id_complement: ID (COMMA ID)* COLON type;

type: INT | FLOAT;

body: CURLY_BRACKET_OPEN body_complement CURLY_BRACKET_CLOSE;
body_complement: statement*;

statement: assign | condition | cycle | f_call | print;

print:
	PRINT PARENTHESIS_OPEN print_complement PARENTHESIS_CLOSE SEMICOLON;
print_complement:
	expression expression_print_aux
	| CTE_STRING expression_print_aux;
expression_print_aux: (COMMA print_complement)*;

assign: ID EQUAL expression SEMICOLON;

cycle:
	DO body WHILE PARENTHESIS_OPEN expression PARENTHESIS_CLOSE SEMICOLON;

condition:
	IF PARENTHESIS_OPEN expression PARENTHESIS_CLOSE body condition_else SEMICOLON;
condition_else: (ELSE body)?;

cte: CTE_INT | CTE_FLOAT;

expression: exp expression_aux;
expression_aux: (expression_logics exp)?;
expression_logics: GREATHER_THAN | LESS_THAN | NOT_EQUAL;

exp: term exp_aux;
exp_aux: (exp_operation term)*;
exp_operation: PLUS | MINUS;

term: factor term_aux;
term_aux: (term_operation factor)*;
term_operation: ASTERISK | SLASH;

factor: factor_expression | factor_aux;
factor_expression:
	PARENTHESIS_OPEN expression PARENTHESIS_CLOSE;
factor_aux: ID | cte;
factor_operations: factor_operation_plus_minus?;
factor_operation_plus_minus: PLUS | MINUS;

funcs:
	VOID funcs_id PARENTHESIS_OPEN funcs_args PARENTHESIS_CLOSE SQUARE_BRACKET_OPEN funcs_vars body
		SQUARE_BRACKET_CLOSE SEMICOLON;
funcs_id: ID;
funcs_vars: vars?;
funcs_args: (ID COLON type (COMMA ID COLON type)*)?;

f_call:
	ID PARENTHESIS_OPEN f_call_expression PARENTHESIS_CLOSE SEMICOLON;
f_call_expression: (expression (COMMA expression)*)?;