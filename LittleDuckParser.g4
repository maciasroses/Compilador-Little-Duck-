grammar LittleDuckParser;

options {
	tokenVocab = LittleDuckLexer;
}

program:
	PROGRAM program_id SEMICOLON has_vars has_funcs MAIN body END;
program_id:
	ID { 
		const id = $ID.text;
		this.funcName = id;
		this.programFunc.addFunction(id, "program", []);
	 };
has_vars: vars?;
has_funcs: funcs*;

vars: VAR var_complement;
var_complement: (
		id_complement {
	const id = $id_complement.text;

	const [vars, type] = id.split(":");
	const ids = vars.split(",");

	ids.forEach(id => {
		this.programFunc.functions[`${this.funcName}`].varTable.addVar(id,type);
	});
	} SEMICOLON
	)+;
id_complement: ID (COMMA ID)* COLON type;

type: INT | FLOAT;

body: CURLY_BRACKET_OPEN body_complement CURLY_BRACKET_CLOSE;
body_complement: statement*;

statement: assign | condition | cycle | f_call | print;

print:
	PRINT PARENTHESIS_OPEN print_complement PARENTHESIS_CLOSE SEMICOLON;
print_complement:
	expression {
		const oper = this.quadruple.popOperating()
		const address = this.programFunc.functions[`${this.funcName}`].varTable.getAddress(oper);
		this.quadruple.addPrintQuadruple(address)
	} expression_print_aux
	| CTE_STRING {
		const val = this.programFunc.functions[`${this.funcName}`].varTable.addConstant($CTE_STRING.text, "string");
		this.quadruple.addPrintQuadruple(val);
	} expression_print_aux;
expression_print_aux: ( COMMA print_complement)*;

assign:
	ID {
		if(!this.programFunc.functions[`${this.funcName}`].varTable.checkVar($ID.text)){
			throw new Error(`Variable ${$ID.text} not declared`);
		}
	} EQUAL expression {
		const assign = $ID.text;
		const address = this.programFunc.functions[`${this.funcName}`].varTable.getAddress(assign);
		const op = this.quadruple.peekOperating();
		const opAddress = this.programFunc.functions[`${this.funcName}`].varTable.getAddress(op);
		this.quadruple.addAssignQuadruple("=", opAddress, address);
} SEMICOLON;

cycle:
	DO {
		const cycleIndex = this.quadruple.getCurrentCount();
		this.quadruple.pushJump(cycleIndex);
	} body WHILE PARENTHESIS_OPEN expression PARENTHESIS_CLOSE SEMICOLON {
		const op = this.quadruple.popOperating();
		const doJump = this.quadruple.popJump();
		this.quadruple.addCycleJump(op, doJump);
	};

condition:
	IF PARENTHESIS_OPEN expression PARENTHESIS_CLOSE {
		const falseLabel = this.quadruple.newLabel();
		const op = this.quadruple.popOperating();
		this.quadruple.addConditionalJump(op, falseLabel);
		this.quadruple.pushJump(falseLabel);
	} body condition_else SEMICOLON {
		const endJump = this.quadruple.popJump();
		const countEndIf = this.quadruple.getCurrentCount();
		this.quadruple.editQuadrupleByLabel(endJump, countEndIf);
	};
condition_else: (
		ELSE {
		const byPassLabel = this.quadruple.newLabel();
		this.quadruple.addByPassJump(byPassLabel);

		const elseJump = this.quadruple.popJump();
		this.quadruple.pushJump(byPassLabel);
		const countElse = this.quadruple.getCurrentCount();
		this.quadruple.editQuadrupleByLabel(elseJump, countElse);
	} body
	)?;

cte:
	CTE_INT {
		this.programFunc.functions[`${this.funcName}`].varTable.addConstant($CTE_INT.text, "int");
	}
	| CTE_FLOAT {
		this.programFunc.functions[`${this.funcName}`].varTable.addConstant($CTE_FLOAT.text, "float");
	};

expression: exp expression_aux;
expression_aux: (
		expression_logics {
		this.quadruple.pushOperator($expression_logics.text);
} exp {
		const temp = this.quadruple.newTemp();
		const operator = this.quadruple.popOperator();
		const op2 = this.quadruple.popOperating();
		const op2Address = this.programFunc.functions[`${this.funcName}`].varTable.getAddress(op2);
		const op1 = this.quadruple.popOperating();
		const op1Address = this.programFunc.functions[`${this.funcName}`].varTable.getAddress(op1);
		// AQUI VA LA CHAMBA DEL CUBO SEMANTICO, PARA ASI LOGRAR ASIGNAR TIPO AL TEMPORAL
		const tempAddress = this.programFunc.functions[`${this.funcName}`].varTable.addConstant(temp, "temp");
		this.quadruple.addQuadruple(operator, op1Address, op2Address, tempAddress);
		this.quadruple.pushOperating(tempAddress);
	}
	)?;
expression_logics: GREATHER_THAN | LESS_THAN | NOT_EQUAL;

exp: term exp_aux;
exp_aux: (
		exp_operation {
		this.quadruple.pushOperator($exp_operation.text);
} term {
		const temp = this.quadruple.newTemp();
		const operator = this.quadruple.popOperator();
		const op2 = this.quadruple.popOperating();
		const op2Address = this.programFunc.functions[`${this.funcName}`].varTable.getAddress(op2);
		const op1 = this.quadruple.popOperating();
		const op1Address = this.programFunc.functions[`${this.funcName}`].varTable.getAddress(op1);
		// AQUI VA LA CHAMBA DEL CUBO SEMANTICO, PARA ASI LOGRAR ASIGNAR TIPO AL TEMPORAL
		const tempAddress = this.programFunc.functions[`${this.funcName}`].varTable.addConstant(temp, "temp");
		this.quadruple.addQuadruple(operator, op1Address, op2Address, tempAddress);
		this.quadruple.pushOperating(tempAddress);
	}
	)*;
exp_operation: PLUS | MINUS;

term: factor term_aux;
term_aux: (
		term_operation {
		this.quadruple.pushOperator($term_operation.text);
} factor {
		const temp = this.quadruple.newTemp();
		const operator = this.quadruple.popOperator();
		const op2 = this.quadruple.popOperating();
		const op2Address = this.programFunc.functions[`${this.funcName}`].varTable.getAddress(op2);
		const op1 = this.quadruple.popOperating();
		const op1Address = this.programFunc.functions[`${this.funcName}`].varTable.getAddress(op1);
		// AQUI VA LA CHAMBA DEL CUBO SEMANTICO, PARA ASI LOGRAR ASIGNAR TIPO AL TEMPORAL
		const tempAddress = this.programFunc.functions[`${this.funcName}`].varTable.addConstant(temp, "temp");
		this.quadruple.addQuadruple(operator, op1Address, op2Address, tempAddress);
		this.quadruple.pushOperating(tempAddress);
	}
	)*;
term_operation: ASTERISK | SLASH;

factor:
	factor_expression
	| factor_operations {
	this.quadruple.pushOperating($factor_operations.text);
};
factor_expression:
	PARENTHESIS_OPEN expression PARENTHESIS_CLOSE;
factor_operations:
	factor_operation_plus_minus? factor_aux {
	const auxFaxPM = $factor_operation_plus_minus.text;
	const val = $factor_aux.text;
	const key = this.programFunc.functions[`${this.funcName}`].varTable.getAddress(val)
	if(auxFaxPM){
		if(auxFaxPM == "+"){
			this.programFunc.functions[`${this.funcName}`].varTable.editValByAddress(key, `+${val}`)
		} else {
			this.programFunc.functions[`${this.funcName}`].varTable.editValByAddress(key, `-${val}`)
		}
	}
};
factor_operation_plus_minus: PLUS | MINUS;
factor_aux:
	ID {
		if(!this.programFunc.functions[`${this.funcName}`].varTable.checkVar($ID.text)){
			throw new Error(`Variable ${$ID.text} not declared`);
		}
	}
	| cte;

funcs:
	VOID funcs_id PARENTHESIS_OPEN funcs_args {
		const args = $funcs_args.text;

		if (args !== ""){
			const varsWithType = args.split(",");

			varsWithType.forEach(uniqueVar => {
				const [id, type] = uniqueVar.split(":");
				this.programFunc.functions[`${this.funcName}`].varTable.addVar(id, type);
			});
		}

	} PARENTHESIS_CLOSE SQUARE_BRACKET_OPEN funcs_vars body SQUARE_BRACKET_CLOSE SEMICOLON;
funcs_id:
	ID {
	const id = $ID.text;
	this.funcName = id;
	this.programFunc.addFunction(id, "void", []);
};
funcs_vars: vars?;
funcs_args: (ID COLON type (COMMA ID COLON type)*)?;

f_call:
	ID PARENTHESIS_OPEN f_call_expression PARENTHESIS_CLOSE SEMICOLON;
f_call_expression: (expression (COMMA expression)*)?;