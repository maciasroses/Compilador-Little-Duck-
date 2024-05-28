// Generated from LittleDuckParser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import LittleDuckParserListener from './LittleDuckParserListener.js';
const serializedATN = [4,1,34,326,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,2,3,2,97,8,2,1,3,5,3,100,8,3,10,
3,12,3,103,9,3,1,4,1,4,1,4,1,5,1,5,1,5,1,5,4,5,112,8,5,11,5,12,5,113,1,6,
1,6,1,6,5,6,119,8,6,10,6,12,6,122,9,6,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,
8,1,9,5,9,134,8,9,10,9,12,9,137,9,9,1,10,1,10,1,10,1,10,1,10,3,10,144,8,
10,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,
159,8,12,1,13,1,13,5,13,163,8,13,10,13,12,13,166,9,13,1,14,1,14,1,14,1,14,
1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,16,1,
16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,3,17,198,8,17,
1,18,1,18,1,18,1,18,3,18,204,8,18,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,
3,20,214,8,20,1,21,1,21,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,5,23,226,
8,23,10,23,12,23,229,9,23,1,24,1,24,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,
26,5,26,241,8,26,10,26,12,26,244,9,26,1,27,1,27,1,28,1,28,1,28,1,28,3,28,
252,8,28,1,29,1,29,1,29,1,29,1,30,3,30,259,8,30,1,30,1,30,1,30,1,31,1,31,
1,32,1,32,1,32,3,32,269,8,32,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,
1,33,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,35,3,35,289,8,35,1,36,1,36,1,36,
1,36,1,36,1,36,1,36,5,36,298,8,36,10,36,12,36,301,9,36,3,36,303,8,36,1,37,
1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,5,38,319,
8,38,10,38,12,38,322,9,38,3,38,324,8,38,1,38,0,0,39,0,2,4,6,8,10,12,14,16,
18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,
66,68,70,72,74,76,0,4,1,0,8,9,1,0,20,22,1,0,23,24,1,0,25,26,310,0,78,1,0,
0,0,2,92,1,0,0,0,4,96,1,0,0,0,6,101,1,0,0,0,8,104,1,0,0,0,10,111,1,0,0,0,
12,115,1,0,0,0,14,126,1,0,0,0,16,128,1,0,0,0,18,135,1,0,0,0,20,143,1,0,0,
0,22,145,1,0,0,0,24,158,1,0,0,0,26,164,1,0,0,0,28,167,1,0,0,0,30,174,1,0,
0,0,32,184,1,0,0,0,34,197,1,0,0,0,36,203,1,0,0,0,38,205,1,0,0,0,40,213,1,
0,0,0,42,215,1,0,0,0,44,217,1,0,0,0,46,227,1,0,0,0,48,230,1,0,0,0,50,232,
1,0,0,0,52,242,1,0,0,0,54,245,1,0,0,0,56,251,1,0,0,0,58,253,1,0,0,0,60,258,
1,0,0,0,62,263,1,0,0,0,64,268,1,0,0,0,66,270,1,0,0,0,68,284,1,0,0,0,70,288,
1,0,0,0,72,302,1,0,0,0,74,304,1,0,0,0,76,323,1,0,0,0,78,79,5,1,0,0,79,80,
3,2,1,0,80,81,5,6,0,0,81,82,3,4,2,0,82,83,6,0,-1,0,83,84,3,6,3,0,84,85,6,
0,-1,0,85,86,5,2,0,0,86,87,6,0,-1,0,87,88,3,16,8,0,88,89,5,3,0,0,89,90,6,
0,-1,0,90,91,5,6,0,0,91,1,1,0,0,0,92,93,5,31,0,0,93,94,6,1,-1,0,94,3,1,0,
0,0,95,97,3,8,4,0,96,95,1,0,0,0,96,97,1,0,0,0,97,5,1,0,0,0,98,100,3,66,33,
0,99,98,1,0,0,0,100,103,1,0,0,0,101,99,1,0,0,0,101,102,1,0,0,0,102,7,1,0,
0,0,103,101,1,0,0,0,104,105,5,4,0,0,105,106,3,10,5,0,106,9,1,0,0,0,107,108,
3,12,6,0,108,109,6,5,-1,0,109,110,5,6,0,0,110,112,1,0,0,0,111,107,1,0,0,
0,112,113,1,0,0,0,113,111,1,0,0,0,113,114,1,0,0,0,114,11,1,0,0,0,115,120,
5,31,0,0,116,117,5,7,0,0,117,119,5,31,0,0,118,116,1,0,0,0,119,122,1,0,0,
0,120,118,1,0,0,0,120,121,1,0,0,0,121,123,1,0,0,0,122,120,1,0,0,0,123,124,
5,5,0,0,124,125,3,14,7,0,125,13,1,0,0,0,126,127,7,0,0,0,127,15,1,0,0,0,128,
129,5,10,0,0,129,130,3,18,9,0,130,131,5,11,0,0,131,17,1,0,0,0,132,134,3,
20,10,0,133,132,1,0,0,0,134,137,1,0,0,0,135,133,1,0,0,0,135,136,1,0,0,0,
136,19,1,0,0,0,137,135,1,0,0,0,138,144,3,28,14,0,139,144,3,32,16,0,140,144,
3,30,15,0,141,144,3,74,37,0,142,144,3,22,11,0,143,138,1,0,0,0,143,139,1,
0,0,0,143,140,1,0,0,0,143,141,1,0,0,0,143,142,1,0,0,0,144,21,1,0,0,0,145,
146,5,12,0,0,146,147,5,13,0,0,147,148,3,24,12,0,148,149,5,14,0,0,149,150,
5,6,0,0,150,23,1,0,0,0,151,152,3,38,19,0,152,153,6,12,-1,0,153,154,3,26,
13,0,154,159,1,0,0,0,155,156,5,32,0,0,156,157,6,12,-1,0,157,159,3,26,13,
0,158,151,1,0,0,0,158,155,1,0,0,0,159,25,1,0,0,0,160,161,5,7,0,0,161,163,
3,24,12,0,162,160,1,0,0,0,163,166,1,0,0,0,164,162,1,0,0,0,164,165,1,0,0,
0,165,27,1,0,0,0,166,164,1,0,0,0,167,168,5,31,0,0,168,169,6,14,-1,0,169,
170,5,15,0,0,170,171,3,38,19,0,171,172,6,14,-1,0,172,173,5,6,0,0,173,29,
1,0,0,0,174,175,5,17,0,0,175,176,6,15,-1,0,176,177,3,16,8,0,177,178,5,16,
0,0,178,179,5,13,0,0,179,180,3,38,19,0,180,181,5,14,0,0,181,182,6,15,-1,
0,182,183,5,6,0,0,183,31,1,0,0,0,184,185,5,18,0,0,185,186,5,13,0,0,186,187,
3,38,19,0,187,188,5,14,0,0,188,189,6,16,-1,0,189,190,3,16,8,0,190,191,3,
34,17,0,191,192,5,6,0,0,192,193,6,16,-1,0,193,33,1,0,0,0,194,195,5,19,0,
0,195,196,6,17,-1,0,196,198,3,16,8,0,197,194,1,0,0,0,197,198,1,0,0,0,198,
35,1,0,0,0,199,200,5,33,0,0,200,204,6,18,-1,0,201,202,5,34,0,0,202,204,6,
18,-1,0,203,199,1,0,0,0,203,201,1,0,0,0,204,37,1,0,0,0,205,206,3,44,22,0,
206,207,3,40,20,0,207,39,1,0,0,0,208,209,3,42,21,0,209,210,6,20,-1,0,210,
211,3,44,22,0,211,212,6,20,-1,0,212,214,1,0,0,0,213,208,1,0,0,0,213,214,
1,0,0,0,214,41,1,0,0,0,215,216,7,1,0,0,216,43,1,0,0,0,217,218,3,50,25,0,
218,219,3,46,23,0,219,45,1,0,0,0,220,221,3,48,24,0,221,222,6,23,-1,0,222,
223,3,50,25,0,223,224,6,23,-1,0,224,226,1,0,0,0,225,220,1,0,0,0,226,229,
1,0,0,0,227,225,1,0,0,0,227,228,1,0,0,0,228,47,1,0,0,0,229,227,1,0,0,0,230,
231,7,2,0,0,231,49,1,0,0,0,232,233,3,56,28,0,233,234,3,52,26,0,234,51,1,
0,0,0,235,236,3,54,27,0,236,237,6,26,-1,0,237,238,3,56,28,0,238,239,6,26,
-1,0,239,241,1,0,0,0,240,235,1,0,0,0,241,244,1,0,0,0,242,240,1,0,0,0,242,
243,1,0,0,0,243,53,1,0,0,0,244,242,1,0,0,0,245,246,7,3,0,0,246,55,1,0,0,
0,247,252,3,58,29,0,248,249,3,60,30,0,249,250,6,28,-1,0,250,252,1,0,0,0,
251,247,1,0,0,0,251,248,1,0,0,0,252,57,1,0,0,0,253,254,5,13,0,0,254,255,
3,38,19,0,255,256,5,14,0,0,256,59,1,0,0,0,257,259,3,62,31,0,258,257,1,0,
0,0,258,259,1,0,0,0,259,260,1,0,0,0,260,261,3,64,32,0,261,262,6,30,-1,0,
262,61,1,0,0,0,263,264,7,2,0,0,264,63,1,0,0,0,265,266,5,31,0,0,266,269,6,
32,-1,0,267,269,3,36,18,0,268,265,1,0,0,0,268,267,1,0,0,0,269,65,1,0,0,0,
270,271,5,27,0,0,271,272,3,68,34,0,272,273,5,13,0,0,273,274,3,72,36,0,274,
275,6,33,-1,0,275,276,5,14,0,0,276,277,5,28,0,0,277,278,3,70,35,0,278,279,
6,33,-1,0,279,280,3,16,8,0,280,281,5,29,0,0,281,282,5,6,0,0,282,283,6,33,
-1,0,283,67,1,0,0,0,284,285,5,31,0,0,285,286,6,34,-1,0,286,69,1,0,0,0,287,
289,3,8,4,0,288,287,1,0,0,0,288,289,1,0,0,0,289,71,1,0,0,0,290,291,5,31,
0,0,291,292,5,5,0,0,292,299,3,14,7,0,293,294,5,7,0,0,294,295,5,31,0,0,295,
296,5,5,0,0,296,298,3,14,7,0,297,293,1,0,0,0,298,301,1,0,0,0,299,297,1,0,
0,0,299,300,1,0,0,0,300,303,1,0,0,0,301,299,1,0,0,0,302,290,1,0,0,0,302,
303,1,0,0,0,303,73,1,0,0,0,304,305,5,31,0,0,305,306,6,37,-1,0,306,307,5,
13,0,0,307,308,3,76,38,0,308,309,5,14,0,0,309,310,6,37,-1,0,310,311,5,6,
0,0,311,75,1,0,0,0,312,313,3,38,19,0,313,320,6,38,-1,0,314,315,5,7,0,0,315,
316,3,38,19,0,316,317,6,38,-1,0,317,319,1,0,0,0,318,314,1,0,0,0,319,322,
1,0,0,0,320,318,1,0,0,0,320,321,1,0,0,0,321,324,1,0,0,0,322,320,1,0,0,0,
323,312,1,0,0,0,323,324,1,0,0,0,324,77,1,0,0,0,21,96,101,113,120,135,143,
158,164,197,203,213,227,242,251,258,268,288,299,302,320,323];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LittleDuckParserParser extends antlr4.Parser {

    static grammarFileName = "LittleDuckParser.g4";
    static literalNames = [ null, "'program'", "'main'", "'end'", "'var'", 
                            "':'", "';'", "','", "'int'", "'float'", "'{'", 
                            "'}'", "'print'", "'('", "')'", "'='", "'while'", 
                            "'do'", "'if'", "'else'", "'>'", "'<'", "'!='", 
                            "'+'", "'-'", "'*'", "'/'", "'void'", "'['", 
                            "']'" ];
    static symbolicNames = [ null, "PROGRAM", "MAIN", "END", "VAR", "COLON", 
                             "SEMICOLON", "COMMA", "INT", "FLOAT", "CURLY_BRACKET_OPEN", 
                             "CURLY_BRACKET_CLOSE", "PRINT", "PARENTHESIS_OPEN", 
                             "PARENTHESIS_CLOSE", "EQUAL", "WHILE", "DO", 
                             "IF", "ELSE", "GREATHER_THAN", "LESS_THAN", 
                             "NOT_EQUAL", "PLUS", "MINUS", "ASTERISK", "SLASH", 
                             "VOID", "SQUARE_BRACKET_OPEN", "SQUARE_BRACKET_CLOSE", 
                             "WS", "ID", "CTE_STRING", "CTE_INT", "CTE_FLOAT" ];
    static ruleNames = [ "program", "program_id", "has_vars", "has_funcs", 
                         "vars", "var_complement", "id_complement", "type", 
                         "body", "body_complement", "statement", "print", 
                         "print_complement", "expression_print_aux", "assign", 
                         "cycle", "condition", "condition_else", "cte", 
                         "expression", "expression_aux", "expression_logics", 
                         "exp", "exp_aux", "exp_operation", "term", "term_aux", 
                         "term_operation", "factor", "factor_expression", 
                         "factor_operations", "factor_operation_plus_minus", 
                         "factor_aux", "funcs", "funcs_id", "funcs_vars", 
                         "funcs_args", "f_call", "f_call_expression" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LittleDuckParserParser.ruleNames;
        this.literalNames = LittleDuckParserParser.literalNames;
        this.symbolicNames = LittleDuckParserParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LittleDuckParserParser.RULE_program);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(LittleDuckParserParser.PROGRAM);
	        this.state = 79;
	        localctx._program_id = this.program_id();
	        this.state = 80;
	        this.match(LittleDuckParserParser.SEMICOLON);
	        this.state = 81;
	        this.has_vars();

	        		const mainLabel = this.quadruple.newLabel();
	        		this.quadruple.addGotoMainQuadruple(mainLabel)
	        		this.quadruple.pushJump(mainLabel)
	        	
	        this.state = 83;
	        this.has_funcs();

	        		const pendingMainJump = this.quadruple.popJump();
	        		const currentCount = this.quadruple.getCurrentCount();
	        		this.quadruple.editQuadrupleByLabel(pendingMainJump, currentCount);
	        	
	        this.state = 85;
	        this.match(LittleDuckParserParser.MAIN);
	         
	        		const id = (localctx._program_id == null ? null : this._input.getText(new antlr4.Interval(localctx._program_id.start,localctx._program_id.stop)));
	        		const mainFunction = this.programFunc.getNameDir(id);
	        		this.funcName = mainFunction.name;
	        	 
	        this.state = 87;
	        this.body();
	        this.state = 88;
	        this.match(LittleDuckParserParser.END);

	        		this.quadruple.addEndQuadruple();
	        		const constantTable = this.constantTable.getTable();
	        		const functionDir = this.programFunc.getVoidFunctionsForDocument();
	        		this.quadruple.generateDocument(this.funcName, constantTable, functionDir);
	        	
	        this.state = 90;
	        this.match(LittleDuckParserParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	program_id() {
	    let localctx = new Program_idContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LittleDuckParserParser.RULE_program_id);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        localctx._ID = this.match(LittleDuckParserParser.ID);
	         
	        		const id = (localctx._ID == null ? null : localctx._ID.text);
	        		this.funcName = id;
	        		this.programFunc.addFunction(id, "program", []);
	        	 
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	has_vars() {
	    let localctx = new Has_varsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LittleDuckParserParser.RULE_has_vars);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 95;
	            this.vars();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	has_funcs() {
	    let localctx = new Has_funcsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LittleDuckParserParser.RULE_has_funcs);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===27) {
	            this.state = 98;
	            this.funcs();
	            this.state = 103;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	vars() {
	    let localctx = new VarsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LittleDuckParserParser.RULE_vars);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.match(LittleDuckParserParser.VAR);
	        this.state = 105;
	        this.var_complement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	var_complement() {
	    let localctx = new Var_complementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LittleDuckParserParser.RULE_var_complement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 107;
	            localctx._id_complement = this.id_complement();

	            			const currentFunctionName = this.funcName
	            			const currentFunction = this.programFunc.getNameDir(currentFunctionName);

	            			const id = (localctx._id_complement == null ? null : this._input.getText(new antlr4.Interval(localctx._id_complement.start,localctx._id_complement.stop)));

	            			const [vars, type] = id.split(":");
	            			const ids = vars.split(",");

	            			ids.forEach(id => {
	            				this.programFunc.functions[`${this.funcName}`].varTable.addVar(id,type,currentFunction.type);
	            			});
	            	
	            this.state = 109;
	            this.match(LittleDuckParserParser.SEMICOLON);
	            this.state = 113; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===31);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	id_complement() {
	    let localctx = new Id_complementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LittleDuckParserParser.RULE_id_complement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this.match(LittleDuckParserParser.ID);
	        this.state = 120;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 116;
	            this.match(LittleDuckParserParser.COMMA);
	            this.state = 117;
	            this.match(LittleDuckParserParser.ID);
	            this.state = 122;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 123;
	        this.match(LittleDuckParserParser.COLON);
	        this.state = 124;
	        this.type();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LittleDuckParserParser.RULE_type);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        _la = this._input.LA(1);
	        if(!(_la===8 || _la===9)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	body() {
	    let localctx = new BodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LittleDuckParserParser.RULE_body);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this.match(LittleDuckParserParser.CURLY_BRACKET_OPEN);
	        this.state = 129;
	        this.body_complement();
	        this.state = 130;
	        this.match(LittleDuckParserParser.CURLY_BRACKET_CLOSE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	body_complement() {
	    let localctx = new Body_complementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, LittleDuckParserParser.RULE_body_complement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2147880960) !== 0)) {
	            this.state = 132;
	            this.statement();
	            this.state = 137;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, LittleDuckParserParser.RULE_statement);
	    try {
	        this.state = 143;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 138;
	            this.assign();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 139;
	            this.condition();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 140;
	            this.cycle();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 141;
	            this.f_call();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 142;
	            this.print();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	print() {
	    let localctx = new PrintContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, LittleDuckParserParser.RULE_print);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        this.match(LittleDuckParserParser.PRINT);
	        this.state = 146;
	        this.match(LittleDuckParserParser.PARENTHESIS_OPEN);
	        this.state = 147;
	        this.print_complement();
	        this.state = 148;
	        this.match(LittleDuckParserParser.PARENTHESIS_CLOSE);
	        this.state = 149;
	        this.match(LittleDuckParserParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	print_complement() {
	    let localctx = new Print_complementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, LittleDuckParserParser.RULE_print_complement);
	    try {
	        this.state = 158;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	        case 23:
	        case 24:
	        case 31:
	        case 33:
	        case 34:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 151;
	            this.expression();

	            		const oper = this.quadruple.popOperating()
	            		let address = this.programFunc.functions[`${this.funcName}`].varTable.getAddress(oper);
	            		if(!address){
	            			address = this.constantTable.getAddress(oper);
	            		}
	            		this.quadruple.addPrintQuadruple(address)
	            	
	            this.state = 153;
	            this.expression_print_aux();
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 155;
	            localctx._CTE_STRING = this.match(LittleDuckParserParser.CTE_STRING);

	            		const val = this.constantTable.addStringConstant((localctx._CTE_STRING == null ? null : localctx._CTE_STRING.text));
	            		this.quadruple.addPrintQuadruple(val)
	            	
	            this.state = 157;
	            this.expression_print_aux();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression_print_aux() {
	    let localctx = new Expression_print_auxContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, LittleDuckParserParser.RULE_expression_print_aux);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 160;
	                this.match(LittleDuckParserParser.COMMA);
	                this.state = 161;
	                this.print_complement(); 
	            }
	            this.state = 166;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assign() {
	    let localctx = new AssignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, LittleDuckParserParser.RULE_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        localctx._ID = this.match(LittleDuckParserParser.ID);

	        		if(!this.programFunc.functions[`${this.funcName}`].varTable.checkVar((localctx._ID == null ? null : localctx._ID.text))){
	        			throw new Error(`Variable ${(localctx._ID == null ? null : localctx._ID.text)} not declared`);
	        		}
	        	
	        this.state = 169;
	        this.match(LittleDuckParserParser.EQUAL);
	        this.state = 170;
	        this.expression();

	        		const assign = (localctx._ID == null ? null : localctx._ID.text);
	        		const address = this.programFunc.functions[`${this.funcName}`].varTable.getAddress(assign);
	        		const op = this.quadruple.peekOperating();
	        		let opAddress = this.programFunc.functions[`${this.funcName}`].varTable.getAddress(op);
	        		if(!opAddress){
	        			opAddress = this.constantTable.getAddress(op);
	        		}
	        		this.quadruple.addAssignQuadruple(7, opAddress, address);

	        this.state = 172;
	        this.match(LittleDuckParserParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cycle() {
	    let localctx = new CycleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, LittleDuckParserParser.RULE_cycle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this.match(LittleDuckParserParser.DO);

	        		const cycleIndex = this.quadruple.getCurrentCount();
	        		this.quadruple.pushJump(cycleIndex);
	        	
	        this.state = 176;
	        this.body();
	        this.state = 177;
	        this.match(LittleDuckParserParser.WHILE);
	        this.state = 178;
	        this.match(LittleDuckParserParser.PARENTHESIS_OPEN);
	        this.state = 179;
	        this.expression();
	        this.state = 180;
	        this.match(LittleDuckParserParser.PARENTHESIS_CLOSE);

	        		const op = this.quadruple.popOperating();
	        		const doJump = this.quadruple.popJump();
	        		this.quadruple.addCycleJump(op, doJump);
	        	
	        this.state = 182;
	        this.match(LittleDuckParserParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, LittleDuckParserParser.RULE_condition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this.match(LittleDuckParserParser.IF);
	        this.state = 185;
	        this.match(LittleDuckParserParser.PARENTHESIS_OPEN);
	        this.state = 186;
	        this.expression();
	        this.state = 187;
	        this.match(LittleDuckParserParser.PARENTHESIS_CLOSE);

	        		const falseLabel = this.quadruple.newLabel();
	        		const op = this.quadruple.popOperating();
	        		this.quadruple.addConditionalJump(op, falseLabel);
	        		this.quadruple.pushJump(falseLabel);
	        	
	        this.state = 189;
	        this.body();
	        this.state = 190;
	        this.condition_else();
	        this.state = 191;
	        this.match(LittleDuckParserParser.SEMICOLON);

	        		const endJump = this.quadruple.popJump();
	        		const countEndIf = this.quadruple.getCurrentCount();
	        		this.quadruple.editQuadrupleByLabel(endJump, countEndIf);
	        	
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condition_else() {
	    let localctx = new Condition_elseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, LittleDuckParserParser.RULE_condition_else);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 197;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19) {
	            this.state = 194;
	            this.match(LittleDuckParserParser.ELSE);

	            		const byPassLabel = this.quadruple.newLabel();
	            		this.quadruple.addByPassJump(byPassLabel);

	            		const elseJump = this.quadruple.popJump();
	            		this.quadruple.pushJump(byPassLabel);
	            		const countElse = this.quadruple.getCurrentCount();
	            		this.quadruple.editQuadrupleByLabel(elseJump, countElse);
	            	
	            this.state = 196;
	            this.body();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cte() {
	    let localctx = new CteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, LittleDuckParserParser.RULE_cte);
	    try {
	        this.state = 203;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 33:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 199;
	            this.match(LittleDuckParserParser.CTE_INT);

	            		this.quadruple.pushType("int");
	            	
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 201;
	            this.match(LittleDuckParserParser.CTE_FLOAT);

	            		this.quadruple.pushType("float");
	            	
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, LittleDuckParserParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 205;
	        this.exp();
	        this.state = 206;
	        this.expression_aux();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression_aux() {
	    let localctx = new Expression_auxContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, LittleDuckParserParser.RULE_expression_aux);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 213;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 7340032) !== 0)) {
	            this.state = 208;
	            localctx._expression_logics = this.expression_logics();

	            		this.quadruple.pushOperator((localctx._expression_logics == null ? null : this._input.getText(new antlr4.Interval(localctx._expression_logics.start,localctx._expression_logics.stop))));

	            this.state = 210;
	            this.exp();

	            		const operator = this.quadruple.popOperator();
	            		const operatorCode = this.semanticCube[operator]["code"]

	            		const op2 = this.quadruple.popOperating();
	            		const op2Type = this.quadruple.popType();
	            		let op2Address = this.programFunc.functions[`${this.funcName}`].varTable.getAddress(op2);
	            		if(!op2Address){
	            			op2Address = this.constantTable.getAddress(op2);
	            		}

	            		const op1 = this.quadruple.popOperating();
	            		const op1Type = this.quadruple.popType();
	            		let op1Address = this.programFunc.functions[`${this.funcName}`].varTable.getAddress(op1);
	            		if(!op1Address){
	            			op1Address = this.constantTable.getAddress(op1);
	            		}

	            		const temp = this.quadruple.newTemp();
	            		const tempType = this.semanticCube[operator][op1Type][op2Type];
	            		const tempAddress = this.programFunc.functions[`${this.funcName}`].varTable.addTemp(temp, tempType);
	            		this.programFunc.functions[`${this.funcName}`].varTable.updateKey(temp, tempAddress);
	            		this.quadruple.pushOperating(tempAddress);
	            		this.quadruple.pushType(tempType);

	            		this.quadruple.addQuadruple(operatorCode, op1Address, op2Address, tempAddress);
	            		
	            	
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression_logics() {
	    let localctx = new Expression_logicsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, LittleDuckParserParser.RULE_expression_logics);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 7340032) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exp() {
	    let localctx = new ExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, LittleDuckParserParser.RULE_exp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this.term();
	        this.state = 218;
	        this.exp_aux();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exp_aux() {
	    let localctx = new Exp_auxContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, LittleDuckParserParser.RULE_exp_aux);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 227;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===23 || _la===24) {
	            this.state = 220;
	            localctx._exp_operation = this.exp_operation();

	            		this.quadruple.pushOperator((localctx._exp_operation == null ? null : this._input.getText(new antlr4.Interval(localctx._exp_operation.start,localctx._exp_operation.stop))));

	            this.state = 222;
	            this.term();

	            		const operator = this.quadruple.popOperator();
	            		const operatorCode = this.semanticCube[operator]["code"]

	            		const op2 = this.quadruple.popOperating();
	            		const op2Type = this.quadruple.popType();
	            		let op2Address = this.programFunc.functions[`${this.funcName}`].varTable.getAddress(op2);
	            		if(!op2Address){
	            			op2Address = this.constantTable.getAddress(op2);
	            		}

	            		const op1 = this.quadruple.popOperating();
	            		const op1Type = this.quadruple.popType();
	            		let op1Address = this.programFunc.functions[`${this.funcName}`].varTable.getAddress(op1);
	            		if(!op1Address){
	            			op1Address = this.constantTable.getAddress(op1);
	            		}

	            		const temp = this.quadruple.newTemp();
	            		const tempType = this.semanticCube[operator][op1Type][op2Type];
	            		const tempAddress = this.programFunc.functions[`${this.funcName}`].varTable.addTemp(temp, tempType);
	            		this.programFunc.functions[`${this.funcName}`].varTable.updateKey(temp, tempAddress);
	            		this.quadruple.pushOperating(tempAddress);
	            		this.quadruple.pushType(tempType);

	            		this.quadruple.addQuadruple(operatorCode, op1Address, op2Address, tempAddress);
	            		
	            	
	            this.state = 229;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exp_operation() {
	    let localctx = new Exp_operationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, LittleDuckParserParser.RULE_exp_operation);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 230;
	        _la = this._input.LA(1);
	        if(!(_la===23 || _la===24)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, LittleDuckParserParser.RULE_term);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 232;
	        this.factor();
	        this.state = 233;
	        this.term_aux();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term_aux() {
	    let localctx = new Term_auxContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, LittleDuckParserParser.RULE_term_aux);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===25 || _la===26) {
	            this.state = 235;
	            localctx._term_operation = this.term_operation();

	            		this.quadruple.pushOperator((localctx._term_operation == null ? null : this._input.getText(new antlr4.Interval(localctx._term_operation.start,localctx._term_operation.stop))));

	            this.state = 237;
	            this.factor();

	            		const operator = this.quadruple.popOperator();
	            		const operatorCode = this.semanticCube[operator]["code"]

	            		const op2 = this.quadruple.popOperating();
	            		const op2Type = this.quadruple.popType();
	            		let op2Address = this.programFunc.functions[`${this.funcName}`].varTable.getAddress(op2);
	            		if(!op2Address){
	            			op2Address = this.constantTable.getAddress(op2);
	            		}

	            		const op1 = this.quadruple.popOperating();
	            		const op1Type = this.quadruple.popType();
	            		let op1Address = this.programFunc.functions[`${this.funcName}`].varTable.getAddress(op1);
	            		if(!op1Address){
	            			op1Address = this.constantTable.getAddress(op1);
	            		}
	            		
	            		const temp = this.quadruple.newTemp();
	            		const tempType = this.semanticCube[operator][op1Type][op2Type]
	            		const tempAddress = this.programFunc.functions[`${this.funcName}`].varTable.addTemp(temp, tempType);
	            		this.programFunc.functions[`${this.funcName}`].varTable.updateKey(temp, tempAddress);
	            		this.quadruple.pushOperating(tempAddress);
	            		this.quadruple.pushType(tempType);

	            		this.quadruple.addQuadruple(operatorCode, op1Address, op2Address, tempAddress);
	            	
	            this.state = 244;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term_operation() {
	    let localctx = new Term_operationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, LittleDuckParserParser.RULE_term_operation);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 245;
	        _la = this._input.LA(1);
	        if(!(_la===25 || _la===26)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, LittleDuckParserParser.RULE_factor);
	    try {
	        this.state = 251;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 247;
	            this.factor_expression();
	            break;
	        case 23:
	        case 24:
	        case 31:
	        case 33:
	        case 34:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 248;
	            localctx._factor_operations = this.factor_operations();

	            	this.quadruple.pushOperating((localctx._factor_operations == null ? null : this._input.getText(new antlr4.Interval(localctx._factor_operations.start,localctx._factor_operations.stop))));
	            	let opType = this.programFunc.functions[`${this.funcName}`].varTable.getType((localctx._factor_operations == null ? null : this._input.getText(new antlr4.Interval(localctx._factor_operations.start,localctx._factor_operations.stop))))
	            	if(!opType){
	            		opType = this.constantTable.getType((localctx._factor_operations == null ? null : this._input.getText(new antlr4.Interval(localctx._factor_operations.start,localctx._factor_operations.stop))))
	            	}
	            	this.quadruple.pushType(opType);

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	factor_expression() {
	    let localctx = new Factor_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, LittleDuckParserParser.RULE_factor_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 253;
	        this.match(LittleDuckParserParser.PARENTHESIS_OPEN);
	        this.state = 254;
	        this.expression();
	        this.state = 255;
	        this.match(LittleDuckParserParser.PARENTHESIS_CLOSE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	factor_operations() {
	    let localctx = new Factor_operationsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, LittleDuckParserParser.RULE_factor_operations);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23 || _la===24) {
	            this.state = 257;
	            localctx._factor_operation_plus_minus = this.factor_operation_plus_minus();
	        }

	        this.state = 260;
	        localctx._factor_aux = this.factor_aux();

	        	const auxFaxPM = (localctx._factor_operation_plus_minus == null ? null : this._input.getText(new antlr4.Interval(localctx._factor_operation_plus_minus.start,localctx._factor_operation_plus_minus.stop)));
	        	const val = (localctx._factor_aux == null ? null : this._input.getText(new antlr4.Interval(localctx._factor_aux.start,localctx._factor_aux.stop)));

	        	if(!val.startsWith("$")){
	        		const auxFaxValType = this.quadruple.popType();
	        		if(auxFaxPM){
	        			if (auxFaxPM == "+"){
	        				this.constantTable.addConstant(`+${val}`, auxFaxValType);
	        			} else {
	        				this.constantTable.addConstant(`-${val}`, auxFaxValType);
	        			}
	        		} else {
	        			this.constantTable.addConstant(val, auxFaxValType);
	        		}
	        	}

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	factor_operation_plus_minus() {
	    let localctx = new Factor_operation_plus_minusContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, LittleDuckParserParser.RULE_factor_operation_plus_minus);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
	        _la = this._input.LA(1);
	        if(!(_la===23 || _la===24)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	factor_aux() {
	    let localctx = new Factor_auxContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, LittleDuckParserParser.RULE_factor_aux);
	    try {
	        this.state = 268;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 31:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 265;
	            localctx._ID = this.match(LittleDuckParserParser.ID);

	            		if(!this.programFunc.functions[`${this.funcName}`].varTable.checkVar((localctx._ID == null ? null : localctx._ID.text))){
	            			throw new Error(`Variable ${(localctx._ID == null ? null : localctx._ID.text)} not declared`);
	            		}
	            	
	            break;
	        case 33:
	        case 34:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 267;
	            this.cte();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcs() {
	    let localctx = new FuncsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, LittleDuckParserParser.RULE_funcs);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 270;
	        this.match(LittleDuckParserParser.VOID);
	        this.state = 271;
	        localctx._funcs_id = this.funcs_id();
	        this.state = 272;
	        this.match(LittleDuckParserParser.PARENTHESIS_OPEN);
	        this.state = 273;
	        localctx._funcs_args = this.funcs_args();


	        		const currentFunctionName = (localctx._funcs_id == null ? null : this._input.getText(new antlr4.Interval(localctx._funcs_id.start,localctx._funcs_id.stop)));
	        		const currentFunction = this.programFunc.getNameDir(currentFunctionName);

	        		const args = (localctx._funcs_args == null ? null : this._input.getText(new antlr4.Interval(localctx._funcs_args.start,localctx._funcs_args.stop)));

	        		if (args !== ""){
	        			const varsWithType = args.split(",");

	        			varsWithType.forEach(uniqueVar => {
	        				const [id, type] = uniqueVar.split(":");
	        				this.programFunc.functions[`${this.funcName}`].varTable.addVar(id, type, currentFunction.type);
	        				this.programFunc.functions[`${this.funcName}`].parameterTable.addParameter(id, type);
	        			});
	        		}

	        	
	        this.state = 275;
	        this.match(LittleDuckParserParser.PARENTHESIS_CLOSE);
	        this.state = 276;
	        this.match(LittleDuckParserParser.SQUARE_BRACKET_OPEN);
	        this.state = 277;
	        this.funcs_vars();

	        		const quadIndex = this.quadruple.getCurrentCount()
	        		this.programFunc.addStartQuadruple(currentFunctionName, quadIndex)
	        	
	        this.state = 279;
	        this.body();
	        this.state = 280;
	        this.match(LittleDuckParserParser.SQUARE_BRACKET_CLOSE);
	        this.state = 281;
	        this.match(LittleDuckParserParser.SEMICOLON);

	        		this.quadruple.addEndFunctionQuadruple()
	        	
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcs_id() {
	    let localctx = new Funcs_idContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, LittleDuckParserParser.RULE_funcs_id);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 284;
	        localctx._ID = this.match(LittleDuckParserParser.ID);

	        	const id = (localctx._ID == null ? null : localctx._ID.text);
	        	this.funcName = id;
	        	this.programFunc.addFunction(id, "void", []);

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcs_vars() {
	    let localctx = new Funcs_varsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, LittleDuckParserParser.RULE_funcs_vars);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 288;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 287;
	            this.vars();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcs_args() {
	    let localctx = new Funcs_argsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, LittleDuckParserParser.RULE_funcs_args);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 302;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 290;
	            this.match(LittleDuckParserParser.ID);
	            this.state = 291;
	            this.match(LittleDuckParserParser.COLON);
	            this.state = 292;
	            this.type();
	            this.state = 299;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 293;
	                this.match(LittleDuckParserParser.COMMA);
	                this.state = 294;
	                this.match(LittleDuckParserParser.ID);
	                this.state = 295;
	                this.match(LittleDuckParserParser.COLON);
	                this.state = 296;
	                this.type();
	                this.state = 301;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	f_call() {
	    let localctx = new F_callContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, LittleDuckParserParser.RULE_f_call);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 304;
	        localctx._ID = this.match(LittleDuckParserParser.ID);

	        		const id = (localctx._ID == null ? null : localctx._ID.text);

	        		if(!this.programFunc.checkFunction(id)){
	        			throw new Error(`Function ${id} not declared`);
	        		}

	        		this.functionName = this.programFunc.getNameDir(id)
	        		this.paramTable = this.programFunc.functions[id].parameterTable.getTable()
	        		this.valuesParamTable = Object.values(this.paramTable);
	        		this.paramCount = 0;
	        		this.quadruple.addEraQuadruple(id);
	        	
	        this.state = 306;
	        this.match(LittleDuckParserParser.PARENTHESIS_OPEN);
	        this.state = 307;
	        this.f_call_expression();
	        this.state = 308;
	        this.match(LittleDuckParserParser.PARENTHESIS_CLOSE);

	        		if(this.paramCount !== this.valuesParamTable.length){
	        			throw new Error(`Function ${this.functionName.name} has received too few arguments`)
	        		}
	        		this.quadruple.addGoSubQuadruple(id);
	        	
	        this.state = 310;
	        this.match(LittleDuckParserParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	f_call_expression() {
	    let localctx = new F_call_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, LittleDuckParserParser.RULE_f_call_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 323;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 13)) & ~0x1f) === 0 && ((1 << (_la - 13)) & 3410945) !== 0)) {
	            this.state = 312;
	            this.expression();

	            			const arg = this.quadruple.popOperating();
	            			const argType = this.quadruple.popType();
	            			let argAddress = this.programFunc.functions[`${this.funcName}`].varTable.getAddress(arg);
	            			if(!argAddress){
	            				argAddress = this.constantTable.getAddress(arg);
	            			}

	            			try {
	            				if(this.valuesParamTable[this.paramCount].type !== argType){
	            					throw new Error(`Type mismatch in parameter ${this.paramCount + 1} in function ${this.functionName.name}. Expected {this.valuesParamTable[this.paramCount].type} but got ${argType}`)
	            				}
	            			} catch (error) {
	            				throw new Error(`Function ${this.functionName.name} has received too many arguments or ${error.message}`)
	            			}

	            			const newParam = `param${this.paramCount++}`
	            			this.quadruple.addParamQuadruple(argAddress, newParam)
	            		
	            this.state = 320;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 314;
	                this.match(LittleDuckParserParser.COMMA);
	                this.state = 315;
	                this.expression();

	                				const arg = this.quadruple.popOperating();
	                				const argType = this.quadruple.popType();
	                				let argAddress = this.programFunc.functions[`${this.funcName}`].varTable.getAddress(arg);
	                				if(!argAddress){
	                					argAddress = this.constantTable.getAddress(arg);
	                				}

	                				try {
	                					if(this.valuesParamTable[this.paramCount].type !== argType){
	                						throw new Error(`Type mismatch in parameter ${this.paramCount + 1} in function ${this.functionName.name}. Expected ${this.valuesParamTable[this.paramCount].type} but got ${argType}`)
	                					}
	                				} catch (error) {
	                					throw new Error(`Function ${this.functionName.name} has received too many arguments or ${error.message}`)
	                				}

	                				const newParam = `param${this.paramCount++}`
	                				this.quadruple.addParamQuadruple(argAddress, newParam)
	                			
	                this.state = 322;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LittleDuckParserParser.EOF = antlr4.Token.EOF;
LittleDuckParserParser.PROGRAM = 1;
LittleDuckParserParser.MAIN = 2;
LittleDuckParserParser.END = 3;
LittleDuckParserParser.VAR = 4;
LittleDuckParserParser.COLON = 5;
LittleDuckParserParser.SEMICOLON = 6;
LittleDuckParserParser.COMMA = 7;
LittleDuckParserParser.INT = 8;
LittleDuckParserParser.FLOAT = 9;
LittleDuckParserParser.CURLY_BRACKET_OPEN = 10;
LittleDuckParserParser.CURLY_BRACKET_CLOSE = 11;
LittleDuckParserParser.PRINT = 12;
LittleDuckParserParser.PARENTHESIS_OPEN = 13;
LittleDuckParserParser.PARENTHESIS_CLOSE = 14;
LittleDuckParserParser.EQUAL = 15;
LittleDuckParserParser.WHILE = 16;
LittleDuckParserParser.DO = 17;
LittleDuckParserParser.IF = 18;
LittleDuckParserParser.ELSE = 19;
LittleDuckParserParser.GREATHER_THAN = 20;
LittleDuckParserParser.LESS_THAN = 21;
LittleDuckParserParser.NOT_EQUAL = 22;
LittleDuckParserParser.PLUS = 23;
LittleDuckParserParser.MINUS = 24;
LittleDuckParserParser.ASTERISK = 25;
LittleDuckParserParser.SLASH = 26;
LittleDuckParserParser.VOID = 27;
LittleDuckParserParser.SQUARE_BRACKET_OPEN = 28;
LittleDuckParserParser.SQUARE_BRACKET_CLOSE = 29;
LittleDuckParserParser.WS = 30;
LittleDuckParserParser.ID = 31;
LittleDuckParserParser.CTE_STRING = 32;
LittleDuckParserParser.CTE_INT = 33;
LittleDuckParserParser.CTE_FLOAT = 34;

LittleDuckParserParser.RULE_program = 0;
LittleDuckParserParser.RULE_program_id = 1;
LittleDuckParserParser.RULE_has_vars = 2;
LittleDuckParserParser.RULE_has_funcs = 3;
LittleDuckParserParser.RULE_vars = 4;
LittleDuckParserParser.RULE_var_complement = 5;
LittleDuckParserParser.RULE_id_complement = 6;
LittleDuckParserParser.RULE_type = 7;
LittleDuckParserParser.RULE_body = 8;
LittleDuckParserParser.RULE_body_complement = 9;
LittleDuckParserParser.RULE_statement = 10;
LittleDuckParserParser.RULE_print = 11;
LittleDuckParserParser.RULE_print_complement = 12;
LittleDuckParserParser.RULE_expression_print_aux = 13;
LittleDuckParserParser.RULE_assign = 14;
LittleDuckParserParser.RULE_cycle = 15;
LittleDuckParserParser.RULE_condition = 16;
LittleDuckParserParser.RULE_condition_else = 17;
LittleDuckParserParser.RULE_cte = 18;
LittleDuckParserParser.RULE_expression = 19;
LittleDuckParserParser.RULE_expression_aux = 20;
LittleDuckParserParser.RULE_expression_logics = 21;
LittleDuckParserParser.RULE_exp = 22;
LittleDuckParserParser.RULE_exp_aux = 23;
LittleDuckParserParser.RULE_exp_operation = 24;
LittleDuckParserParser.RULE_term = 25;
LittleDuckParserParser.RULE_term_aux = 26;
LittleDuckParserParser.RULE_term_operation = 27;
LittleDuckParserParser.RULE_factor = 28;
LittleDuckParserParser.RULE_factor_expression = 29;
LittleDuckParserParser.RULE_factor_operations = 30;
LittleDuckParserParser.RULE_factor_operation_plus_minus = 31;
LittleDuckParserParser.RULE_factor_aux = 32;
LittleDuckParserParser.RULE_funcs = 33;
LittleDuckParserParser.RULE_funcs_id = 34;
LittleDuckParserParser.RULE_funcs_vars = 35;
LittleDuckParserParser.RULE_funcs_args = 36;
LittleDuckParserParser.RULE_f_call = 37;
LittleDuckParserParser.RULE_f_call_expression = 38;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_program;
        this._program_id = null;
    }

	PROGRAM() {
	    return this.getToken(LittleDuckParserParser.PROGRAM, 0);
	};

	program_id() {
	    return this.getTypedRuleContext(Program_idContext,0);
	};

	SEMICOLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LittleDuckParserParser.SEMICOLON);
	    } else {
	        return this.getToken(LittleDuckParserParser.SEMICOLON, i);
	    }
	};


	has_vars() {
	    return this.getTypedRuleContext(Has_varsContext,0);
	};

	has_funcs() {
	    return this.getTypedRuleContext(Has_funcsContext,0);
	};

	MAIN() {
	    return this.getToken(LittleDuckParserParser.MAIN, 0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	END() {
	    return this.getToken(LittleDuckParserParser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitProgram(this);
		}
	}


}



class Program_idContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_program_id;
        this._ID = null;
    }

	ID() {
	    return this.getToken(LittleDuckParserParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterProgram_id(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitProgram_id(this);
		}
	}


}



class Has_varsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_has_vars;
    }

	vars() {
	    return this.getTypedRuleContext(VarsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterHas_vars(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitHas_vars(this);
		}
	}


}



class Has_funcsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_has_funcs;
    }

	funcs = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncsContext);
	    } else {
	        return this.getTypedRuleContext(FuncsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterHas_funcs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitHas_funcs(this);
		}
	}


}



class VarsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_vars;
    }

	VAR() {
	    return this.getToken(LittleDuckParserParser.VAR, 0);
	};

	var_complement() {
	    return this.getTypedRuleContext(Var_complementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterVars(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitVars(this);
		}
	}


}



class Var_complementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_var_complement;
        this._id_complement = null;
    }

	id_complement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Id_complementContext);
	    } else {
	        return this.getTypedRuleContext(Id_complementContext,i);
	    }
	};

	SEMICOLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LittleDuckParserParser.SEMICOLON);
	    } else {
	        return this.getToken(LittleDuckParserParser.SEMICOLON, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterVar_complement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitVar_complement(this);
		}
	}


}



class Id_complementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_id_complement;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LittleDuckParserParser.ID);
	    } else {
	        return this.getToken(LittleDuckParserParser.ID, i);
	    }
	};


	COLON() {
	    return this.getToken(LittleDuckParserParser.COLON, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LittleDuckParserParser.COMMA);
	    } else {
	        return this.getToken(LittleDuckParserParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterId_complement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitId_complement(this);
		}
	}


}



class TypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_type;
    }

	INT() {
	    return this.getToken(LittleDuckParserParser.INT, 0);
	};

	FLOAT() {
	    return this.getToken(LittleDuckParserParser.FLOAT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitType(this);
		}
	}


}



class BodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_body;
    }

	CURLY_BRACKET_OPEN() {
	    return this.getToken(LittleDuckParserParser.CURLY_BRACKET_OPEN, 0);
	};

	body_complement() {
	    return this.getTypedRuleContext(Body_complementContext,0);
	};

	CURLY_BRACKET_CLOSE() {
	    return this.getToken(LittleDuckParserParser.CURLY_BRACKET_CLOSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitBody(this);
		}
	}


}



class Body_complementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_body_complement;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterBody_complement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitBody_complement(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_statement;
    }

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	cycle() {
	    return this.getTypedRuleContext(CycleContext,0);
	};

	f_call() {
	    return this.getTypedRuleContext(F_callContext,0);
	};

	print() {
	    return this.getTypedRuleContext(PrintContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitStatement(this);
		}
	}


}



class PrintContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_print;
    }

	PRINT() {
	    return this.getToken(LittleDuckParserParser.PRINT, 0);
	};

	PARENTHESIS_OPEN() {
	    return this.getToken(LittleDuckParserParser.PARENTHESIS_OPEN, 0);
	};

	print_complement() {
	    return this.getTypedRuleContext(Print_complementContext,0);
	};

	PARENTHESIS_CLOSE() {
	    return this.getToken(LittleDuckParserParser.PARENTHESIS_CLOSE, 0);
	};

	SEMICOLON() {
	    return this.getToken(LittleDuckParserParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterPrint(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitPrint(this);
		}
	}


}



class Print_complementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_print_complement;
        this._CTE_STRING = null;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	expression_print_aux() {
	    return this.getTypedRuleContext(Expression_print_auxContext,0);
	};

	CTE_STRING() {
	    return this.getToken(LittleDuckParserParser.CTE_STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterPrint_complement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitPrint_complement(this);
		}
	}


}



class Expression_print_auxContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_expression_print_aux;
    }

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LittleDuckParserParser.COMMA);
	    } else {
	        return this.getToken(LittleDuckParserParser.COMMA, i);
	    }
	};


	print_complement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Print_complementContext);
	    } else {
	        return this.getTypedRuleContext(Print_complementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterExpression_print_aux(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitExpression_print_aux(this);
		}
	}


}



class AssignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_assign;
        this._ID = null;
    }

	ID() {
	    return this.getToken(LittleDuckParserParser.ID, 0);
	};

	EQUAL() {
	    return this.getToken(LittleDuckParserParser.EQUAL, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	SEMICOLON() {
	    return this.getToken(LittleDuckParserParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitAssign(this);
		}
	}


}



class CycleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_cycle;
    }

	DO() {
	    return this.getToken(LittleDuckParserParser.DO, 0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	WHILE() {
	    return this.getToken(LittleDuckParserParser.WHILE, 0);
	};

	PARENTHESIS_OPEN() {
	    return this.getToken(LittleDuckParserParser.PARENTHESIS_OPEN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	PARENTHESIS_CLOSE() {
	    return this.getToken(LittleDuckParserParser.PARENTHESIS_CLOSE, 0);
	};

	SEMICOLON() {
	    return this.getToken(LittleDuckParserParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterCycle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitCycle(this);
		}
	}


}



class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_condition;
    }

	IF() {
	    return this.getToken(LittleDuckParserParser.IF, 0);
	};

	PARENTHESIS_OPEN() {
	    return this.getToken(LittleDuckParserParser.PARENTHESIS_OPEN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	PARENTHESIS_CLOSE() {
	    return this.getToken(LittleDuckParserParser.PARENTHESIS_CLOSE, 0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	condition_else() {
	    return this.getTypedRuleContext(Condition_elseContext,0);
	};

	SEMICOLON() {
	    return this.getToken(LittleDuckParserParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitCondition(this);
		}
	}


}



class Condition_elseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_condition_else;
    }

	ELSE() {
	    return this.getToken(LittleDuckParserParser.ELSE, 0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterCondition_else(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitCondition_else(this);
		}
	}


}



class CteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_cte;
    }

	CTE_INT() {
	    return this.getToken(LittleDuckParserParser.CTE_INT, 0);
	};

	CTE_FLOAT() {
	    return this.getToken(LittleDuckParserParser.CTE_FLOAT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterCte(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitCte(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_expression;
    }

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	expression_aux() {
	    return this.getTypedRuleContext(Expression_auxContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitExpression(this);
		}
	}


}



class Expression_auxContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_expression_aux;
        this._expression_logics = null;
    }

	expression_logics() {
	    return this.getTypedRuleContext(Expression_logicsContext,0);
	};

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterExpression_aux(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitExpression_aux(this);
		}
	}


}



class Expression_logicsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_expression_logics;
    }

	GREATHER_THAN() {
	    return this.getToken(LittleDuckParserParser.GREATHER_THAN, 0);
	};

	LESS_THAN() {
	    return this.getToken(LittleDuckParserParser.LESS_THAN, 0);
	};

	NOT_EQUAL() {
	    return this.getToken(LittleDuckParserParser.NOT_EQUAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterExpression_logics(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitExpression_logics(this);
		}
	}


}



class ExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_exp;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	exp_aux() {
	    return this.getTypedRuleContext(Exp_auxContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitExp(this);
		}
	}


}



class Exp_auxContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_exp_aux;
        this._exp_operation = null;
    }

	exp_operation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Exp_operationContext);
	    } else {
	        return this.getTypedRuleContext(Exp_operationContext,i);
	    }
	};

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterExp_aux(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitExp_aux(this);
		}
	}


}



class Exp_operationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_exp_operation;
    }

	PLUS() {
	    return this.getToken(LittleDuckParserParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(LittleDuckParserParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterExp_operation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitExp_operation(this);
		}
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_term;
    }

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	term_aux() {
	    return this.getTypedRuleContext(Term_auxContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitTerm(this);
		}
	}


}



class Term_auxContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_term_aux;
        this._term_operation = null;
    }

	term_operation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Term_operationContext);
	    } else {
	        return this.getTypedRuleContext(Term_operationContext,i);
	    }
	};

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterTerm_aux(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitTerm_aux(this);
		}
	}


}



class Term_operationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_term_operation;
    }

	ASTERISK() {
	    return this.getToken(LittleDuckParserParser.ASTERISK, 0);
	};

	SLASH() {
	    return this.getToken(LittleDuckParserParser.SLASH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterTerm_operation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitTerm_operation(this);
		}
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_factor;
        this._factor_operations = null;
    }

	factor_expression() {
	    return this.getTypedRuleContext(Factor_expressionContext,0);
	};

	factor_operations() {
	    return this.getTypedRuleContext(Factor_operationsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitFactor(this);
		}
	}


}



class Factor_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_factor_expression;
    }

	PARENTHESIS_OPEN() {
	    return this.getToken(LittleDuckParserParser.PARENTHESIS_OPEN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	PARENTHESIS_CLOSE() {
	    return this.getToken(LittleDuckParserParser.PARENTHESIS_CLOSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterFactor_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitFactor_expression(this);
		}
	}


}



class Factor_operationsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_factor_operations;
        this._factor_operation_plus_minus = null;
        this._factor_aux = null;
    }

	factor_aux() {
	    return this.getTypedRuleContext(Factor_auxContext,0);
	};

	factor_operation_plus_minus() {
	    return this.getTypedRuleContext(Factor_operation_plus_minusContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterFactor_operations(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitFactor_operations(this);
		}
	}


}



class Factor_operation_plus_minusContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_factor_operation_plus_minus;
    }

	PLUS() {
	    return this.getToken(LittleDuckParserParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(LittleDuckParserParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterFactor_operation_plus_minus(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitFactor_operation_plus_minus(this);
		}
	}


}



class Factor_auxContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_factor_aux;
        this._ID = null;
    }

	ID() {
	    return this.getToken(LittleDuckParserParser.ID, 0);
	};

	cte() {
	    return this.getTypedRuleContext(CteContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterFactor_aux(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitFactor_aux(this);
		}
	}


}



class FuncsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_funcs;
        this._funcs_id = null;
        this._funcs_args = null;
    }

	VOID() {
	    return this.getToken(LittleDuckParserParser.VOID, 0);
	};

	funcs_id() {
	    return this.getTypedRuleContext(Funcs_idContext,0);
	};

	PARENTHESIS_OPEN() {
	    return this.getToken(LittleDuckParserParser.PARENTHESIS_OPEN, 0);
	};

	funcs_args() {
	    return this.getTypedRuleContext(Funcs_argsContext,0);
	};

	PARENTHESIS_CLOSE() {
	    return this.getToken(LittleDuckParserParser.PARENTHESIS_CLOSE, 0);
	};

	SQUARE_BRACKET_OPEN() {
	    return this.getToken(LittleDuckParserParser.SQUARE_BRACKET_OPEN, 0);
	};

	funcs_vars() {
	    return this.getTypedRuleContext(Funcs_varsContext,0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	SQUARE_BRACKET_CLOSE() {
	    return this.getToken(LittleDuckParserParser.SQUARE_BRACKET_CLOSE, 0);
	};

	SEMICOLON() {
	    return this.getToken(LittleDuckParserParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterFuncs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitFuncs(this);
		}
	}


}



class Funcs_idContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_funcs_id;
        this._ID = null;
    }

	ID() {
	    return this.getToken(LittleDuckParserParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterFuncs_id(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitFuncs_id(this);
		}
	}


}



class Funcs_varsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_funcs_vars;
    }

	vars() {
	    return this.getTypedRuleContext(VarsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterFuncs_vars(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitFuncs_vars(this);
		}
	}


}



class Funcs_argsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_funcs_args;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LittleDuckParserParser.ID);
	    } else {
	        return this.getToken(LittleDuckParserParser.ID, i);
	    }
	};


	COLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LittleDuckParserParser.COLON);
	    } else {
	        return this.getToken(LittleDuckParserParser.COLON, i);
	    }
	};


	type = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeContext);
	    } else {
	        return this.getTypedRuleContext(TypeContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LittleDuckParserParser.COMMA);
	    } else {
	        return this.getToken(LittleDuckParserParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterFuncs_args(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitFuncs_args(this);
		}
	}


}



class F_callContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_f_call;
        this._ID = null;
    }

	ID() {
	    return this.getToken(LittleDuckParserParser.ID, 0);
	};

	PARENTHESIS_OPEN() {
	    return this.getToken(LittleDuckParserParser.PARENTHESIS_OPEN, 0);
	};

	f_call_expression() {
	    return this.getTypedRuleContext(F_call_expressionContext,0);
	};

	PARENTHESIS_CLOSE() {
	    return this.getToken(LittleDuckParserParser.PARENTHESIS_CLOSE, 0);
	};

	SEMICOLON() {
	    return this.getToken(LittleDuckParserParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterF_call(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitF_call(this);
		}
	}


}



class F_call_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LittleDuckParserParser.RULE_f_call_expression;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LittleDuckParserParser.COMMA);
	    } else {
	        return this.getToken(LittleDuckParserParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.enterF_call_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LittleDuckParserListener ) {
	        listener.exitF_call_expression(this);
		}
	}


}




LittleDuckParserParser.ProgramContext = ProgramContext; 
LittleDuckParserParser.Program_idContext = Program_idContext; 
LittleDuckParserParser.Has_varsContext = Has_varsContext; 
LittleDuckParserParser.Has_funcsContext = Has_funcsContext; 
LittleDuckParserParser.VarsContext = VarsContext; 
LittleDuckParserParser.Var_complementContext = Var_complementContext; 
LittleDuckParserParser.Id_complementContext = Id_complementContext; 
LittleDuckParserParser.TypeContext = TypeContext; 
LittleDuckParserParser.BodyContext = BodyContext; 
LittleDuckParserParser.Body_complementContext = Body_complementContext; 
LittleDuckParserParser.StatementContext = StatementContext; 
LittleDuckParserParser.PrintContext = PrintContext; 
LittleDuckParserParser.Print_complementContext = Print_complementContext; 
LittleDuckParserParser.Expression_print_auxContext = Expression_print_auxContext; 
LittleDuckParserParser.AssignContext = AssignContext; 
LittleDuckParserParser.CycleContext = CycleContext; 
LittleDuckParserParser.ConditionContext = ConditionContext; 
LittleDuckParserParser.Condition_elseContext = Condition_elseContext; 
LittleDuckParserParser.CteContext = CteContext; 
LittleDuckParserParser.ExpressionContext = ExpressionContext; 
LittleDuckParserParser.Expression_auxContext = Expression_auxContext; 
LittleDuckParserParser.Expression_logicsContext = Expression_logicsContext; 
LittleDuckParserParser.ExpContext = ExpContext; 
LittleDuckParserParser.Exp_auxContext = Exp_auxContext; 
LittleDuckParserParser.Exp_operationContext = Exp_operationContext; 
LittleDuckParserParser.TermContext = TermContext; 
LittleDuckParserParser.Term_auxContext = Term_auxContext; 
LittleDuckParserParser.Term_operationContext = Term_operationContext; 
LittleDuckParserParser.FactorContext = FactorContext; 
LittleDuckParserParser.Factor_expressionContext = Factor_expressionContext; 
LittleDuckParserParser.Factor_operationsContext = Factor_operationsContext; 
LittleDuckParserParser.Factor_operation_plus_minusContext = Factor_operation_plus_minusContext; 
LittleDuckParserParser.Factor_auxContext = Factor_auxContext; 
LittleDuckParserParser.FuncsContext = FuncsContext; 
LittleDuckParserParser.Funcs_idContext = Funcs_idContext; 
LittleDuckParserParser.Funcs_varsContext = Funcs_varsContext; 
LittleDuckParserParser.Funcs_argsContext = Funcs_argsContext; 
LittleDuckParserParser.F_callContext = F_callContext; 
LittleDuckParserParser.F_call_expressionContext = F_call_expressionContext; 
