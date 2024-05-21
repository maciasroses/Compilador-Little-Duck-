// Generated from LittleDuckParser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import LittleDuckParserListener from './LittleDuckParserListener.js';
const serializedATN = [4,1,34,314,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
0,1,0,1,1,1,1,1,1,1,2,3,2,92,8,2,1,3,5,3,95,8,3,10,3,12,3,98,9,3,1,4,1,4,
1,4,1,5,1,5,1,5,1,5,4,5,107,8,5,11,5,12,5,108,1,6,1,6,1,6,5,6,114,8,6,10,
6,12,6,117,9,6,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,8,1,9,5,9,129,8,9,10,9,
12,9,132,9,9,1,10,1,10,1,10,1,10,1,10,3,10,139,8,10,1,11,1,11,1,11,1,11,
1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,154,8,12,1,13,1,13,5,13,
158,8,13,10,13,12,13,161,9,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,
15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,
1,16,1,16,1,16,1,16,1,17,1,17,1,17,3,17,193,8,17,1,18,1,18,1,18,1,18,3,18,
199,8,18,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,3,20,209,8,20,1,21,1,21,
1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,5,23,221,8,23,10,23,12,23,224,9,
23,1,24,1,24,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,5,26,236,8,26,10,26,
12,26,239,9,26,1,27,1,27,1,28,1,28,1,28,1,28,3,28,247,8,28,1,29,1,29,1,29,
1,29,1,30,3,30,254,8,30,1,30,1,30,1,30,1,31,1,31,1,32,1,32,1,32,3,32,264,
8,32,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,34,1,
34,1,34,1,35,3,35,282,8,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,5,36,291,8,
36,10,36,12,36,294,9,36,3,36,296,8,36,1,37,1,37,1,37,1,37,1,37,1,37,1,38,
1,38,1,38,5,38,307,8,38,10,38,12,38,310,9,38,3,38,312,8,38,1,38,0,0,39,0,
2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,
54,56,58,60,62,64,66,68,70,72,74,76,0,4,1,0,8,9,1,0,20,22,1,0,23,24,1,0,
25,26,298,0,78,1,0,0,0,2,87,1,0,0,0,4,91,1,0,0,0,6,96,1,0,0,0,8,99,1,0,0,
0,10,106,1,0,0,0,12,110,1,0,0,0,14,121,1,0,0,0,16,123,1,0,0,0,18,130,1,0,
0,0,20,138,1,0,0,0,22,140,1,0,0,0,24,153,1,0,0,0,26,159,1,0,0,0,28,162,1,
0,0,0,30,169,1,0,0,0,32,179,1,0,0,0,34,192,1,0,0,0,36,198,1,0,0,0,38,200,
1,0,0,0,40,208,1,0,0,0,42,210,1,0,0,0,44,212,1,0,0,0,46,222,1,0,0,0,48,225,
1,0,0,0,50,227,1,0,0,0,52,237,1,0,0,0,54,240,1,0,0,0,56,246,1,0,0,0,58,248,
1,0,0,0,60,253,1,0,0,0,62,258,1,0,0,0,64,263,1,0,0,0,66,265,1,0,0,0,68,277,
1,0,0,0,70,281,1,0,0,0,72,295,1,0,0,0,74,297,1,0,0,0,76,311,1,0,0,0,78,79,
5,1,0,0,79,80,3,2,1,0,80,81,5,6,0,0,81,82,3,4,2,0,82,83,3,6,3,0,83,84,5,
2,0,0,84,85,3,16,8,0,85,86,5,3,0,0,86,1,1,0,0,0,87,88,5,31,0,0,88,89,6,1,
-1,0,89,3,1,0,0,0,90,92,3,8,4,0,91,90,1,0,0,0,91,92,1,0,0,0,92,5,1,0,0,0,
93,95,3,66,33,0,94,93,1,0,0,0,95,98,1,0,0,0,96,94,1,0,0,0,96,97,1,0,0,0,
97,7,1,0,0,0,98,96,1,0,0,0,99,100,5,4,0,0,100,101,3,10,5,0,101,9,1,0,0,0,
102,103,3,12,6,0,103,104,6,5,-1,0,104,105,5,6,0,0,105,107,1,0,0,0,106,102,
1,0,0,0,107,108,1,0,0,0,108,106,1,0,0,0,108,109,1,0,0,0,109,11,1,0,0,0,110,
115,5,31,0,0,111,112,5,7,0,0,112,114,5,31,0,0,113,111,1,0,0,0,114,117,1,
0,0,0,115,113,1,0,0,0,115,116,1,0,0,0,116,118,1,0,0,0,117,115,1,0,0,0,118,
119,5,5,0,0,119,120,3,14,7,0,120,13,1,0,0,0,121,122,7,0,0,0,122,15,1,0,0,
0,123,124,5,10,0,0,124,125,3,18,9,0,125,126,5,11,0,0,126,17,1,0,0,0,127,
129,3,20,10,0,128,127,1,0,0,0,129,132,1,0,0,0,130,128,1,0,0,0,130,131,1,
0,0,0,131,19,1,0,0,0,132,130,1,0,0,0,133,139,3,28,14,0,134,139,3,32,16,0,
135,139,3,30,15,0,136,139,3,74,37,0,137,139,3,22,11,0,138,133,1,0,0,0,138,
134,1,0,0,0,138,135,1,0,0,0,138,136,1,0,0,0,138,137,1,0,0,0,139,21,1,0,0,
0,140,141,5,12,0,0,141,142,5,13,0,0,142,143,3,24,12,0,143,144,5,14,0,0,144,
145,5,6,0,0,145,23,1,0,0,0,146,147,3,38,19,0,147,148,6,12,-1,0,148,149,3,
26,13,0,149,154,1,0,0,0,150,151,5,32,0,0,151,152,6,12,-1,0,152,154,3,26,
13,0,153,146,1,0,0,0,153,150,1,0,0,0,154,25,1,0,0,0,155,156,5,7,0,0,156,
158,3,24,12,0,157,155,1,0,0,0,158,161,1,0,0,0,159,157,1,0,0,0,159,160,1,
0,0,0,160,27,1,0,0,0,161,159,1,0,0,0,162,163,5,31,0,0,163,164,6,14,-1,0,
164,165,5,15,0,0,165,166,3,38,19,0,166,167,6,14,-1,0,167,168,5,6,0,0,168,
29,1,0,0,0,169,170,5,17,0,0,170,171,6,15,-1,0,171,172,3,16,8,0,172,173,5,
16,0,0,173,174,5,13,0,0,174,175,3,38,19,0,175,176,5,14,0,0,176,177,5,6,0,
0,177,178,6,15,-1,0,178,31,1,0,0,0,179,180,5,18,0,0,180,181,5,13,0,0,181,
182,3,38,19,0,182,183,5,14,0,0,183,184,6,16,-1,0,184,185,3,16,8,0,185,186,
3,34,17,0,186,187,5,6,0,0,187,188,6,16,-1,0,188,33,1,0,0,0,189,190,5,19,
0,0,190,191,6,17,-1,0,191,193,3,16,8,0,192,189,1,0,0,0,192,193,1,0,0,0,193,
35,1,0,0,0,194,195,5,33,0,0,195,199,6,18,-1,0,196,197,5,34,0,0,197,199,6,
18,-1,0,198,194,1,0,0,0,198,196,1,0,0,0,199,37,1,0,0,0,200,201,3,44,22,0,
201,202,3,40,20,0,202,39,1,0,0,0,203,204,3,42,21,0,204,205,6,20,-1,0,205,
206,3,44,22,0,206,207,6,20,-1,0,207,209,1,0,0,0,208,203,1,0,0,0,208,209,
1,0,0,0,209,41,1,0,0,0,210,211,7,1,0,0,211,43,1,0,0,0,212,213,3,50,25,0,
213,214,3,46,23,0,214,45,1,0,0,0,215,216,3,48,24,0,216,217,6,23,-1,0,217,
218,3,50,25,0,218,219,6,23,-1,0,219,221,1,0,0,0,220,215,1,0,0,0,221,224,
1,0,0,0,222,220,1,0,0,0,222,223,1,0,0,0,223,47,1,0,0,0,224,222,1,0,0,0,225,
226,7,2,0,0,226,49,1,0,0,0,227,228,3,56,28,0,228,229,3,52,26,0,229,51,1,
0,0,0,230,231,3,54,27,0,231,232,6,26,-1,0,232,233,3,56,28,0,233,234,6,26,
-1,0,234,236,1,0,0,0,235,230,1,0,0,0,236,239,1,0,0,0,237,235,1,0,0,0,237,
238,1,0,0,0,238,53,1,0,0,0,239,237,1,0,0,0,240,241,7,3,0,0,241,55,1,0,0,
0,242,247,3,58,29,0,243,244,3,60,30,0,244,245,6,28,-1,0,245,247,1,0,0,0,
246,242,1,0,0,0,246,243,1,0,0,0,247,57,1,0,0,0,248,249,5,13,0,0,249,250,
3,38,19,0,250,251,5,14,0,0,251,59,1,0,0,0,252,254,3,62,31,0,253,252,1,0,
0,0,253,254,1,0,0,0,254,255,1,0,0,0,255,256,3,64,32,0,256,257,6,30,-1,0,
257,61,1,0,0,0,258,259,7,2,0,0,259,63,1,0,0,0,260,261,5,31,0,0,261,264,6,
32,-1,0,262,264,3,36,18,0,263,260,1,0,0,0,263,262,1,0,0,0,264,65,1,0,0,0,
265,266,5,27,0,0,266,267,3,68,34,0,267,268,5,13,0,0,268,269,3,72,36,0,269,
270,6,33,-1,0,270,271,5,14,0,0,271,272,5,28,0,0,272,273,3,70,35,0,273,274,
3,16,8,0,274,275,5,29,0,0,275,276,5,6,0,0,276,67,1,0,0,0,277,278,5,31,0,
0,278,279,6,34,-1,0,279,69,1,0,0,0,280,282,3,8,4,0,281,280,1,0,0,0,281,282,
1,0,0,0,282,71,1,0,0,0,283,284,5,31,0,0,284,285,5,5,0,0,285,292,3,14,7,0,
286,287,5,7,0,0,287,288,5,31,0,0,288,289,5,5,0,0,289,291,3,14,7,0,290,286,
1,0,0,0,291,294,1,0,0,0,292,290,1,0,0,0,292,293,1,0,0,0,293,296,1,0,0,0,
294,292,1,0,0,0,295,283,1,0,0,0,295,296,1,0,0,0,296,73,1,0,0,0,297,298,5,
31,0,0,298,299,5,13,0,0,299,300,3,76,38,0,300,301,5,14,0,0,301,302,5,6,0,
0,302,75,1,0,0,0,303,308,3,38,19,0,304,305,5,7,0,0,305,307,3,38,19,0,306,
304,1,0,0,0,307,310,1,0,0,0,308,306,1,0,0,0,308,309,1,0,0,0,309,312,1,0,
0,0,310,308,1,0,0,0,311,303,1,0,0,0,311,312,1,0,0,0,312,77,1,0,0,0,21,91,
96,108,115,130,138,153,159,192,198,208,222,237,246,253,263,281,292,295,308,
311];


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
	        this.program_id();
	        this.state = 80;
	        this.match(LittleDuckParserParser.SEMICOLON);
	        this.state = 81;
	        this.has_vars();
	        this.state = 82;
	        this.has_funcs();
	        this.state = 83;
	        this.match(LittleDuckParserParser.MAIN);
	        this.state = 84;
	        this.body();
	        this.state = 85;
	        this.match(LittleDuckParserParser.END);
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
	        this.state = 87;
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
	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 90;
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
	        this.state = 96;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===27) {
	            this.state = 93;
	            this.funcs();
	            this.state = 98;
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
	        this.state = 99;
	        this.match(LittleDuckParserParser.VAR);
	        this.state = 100;
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
	        this.state = 106; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 102;
	            localctx._id_complement = this.id_complement();

	            	const id = (localctx._id_complement == null ? null : this._input.getText(new antlr4.Interval(localctx._id_complement.start,localctx._id_complement.stop)));

	            	const [vars, type] = id.split(":");
	            	const ids = vars.split(",");

	            	ids.forEach(id => {
	            		this.programFunc.functions[`${this.funcName}`].varTable.addVar(id,type);
	            	});
	            	
	            this.state = 104;
	            this.match(LittleDuckParserParser.SEMICOLON);
	            this.state = 108; 
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
	        this.state = 110;
	        this.match(LittleDuckParserParser.ID);
	        this.state = 115;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 111;
	            this.match(LittleDuckParserParser.COMMA);
	            this.state = 112;
	            this.match(LittleDuckParserParser.ID);
	            this.state = 117;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 118;
	        this.match(LittleDuckParserParser.COLON);
	        this.state = 119;
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
	        this.state = 121;
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
	        this.state = 123;
	        this.match(LittleDuckParserParser.CURLY_BRACKET_OPEN);
	        this.state = 124;
	        this.body_complement();
	        this.state = 125;
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
	        this.state = 130;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2147880960) !== 0)) {
	            this.state = 127;
	            this.statement();
	            this.state = 132;
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
	        this.state = 138;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 133;
	            this.assign();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 134;
	            this.condition();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 135;
	            this.cycle();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 136;
	            this.f_call();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 137;
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
	        this.state = 140;
	        this.match(LittleDuckParserParser.PRINT);
	        this.state = 141;
	        this.match(LittleDuckParserParser.PARENTHESIS_OPEN);
	        this.state = 142;
	        this.print_complement();
	        this.state = 143;
	        this.match(LittleDuckParserParser.PARENTHESIS_CLOSE);
	        this.state = 144;
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
	        this.state = 153;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	        case 23:
	        case 24:
	        case 31:
	        case 33:
	        case 34:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 146;
	            this.expression();

	            		const oper = this.quadruple.popOperating()
	            		const address = this.programFunc.functions[`${this.funcName}`].varTable.getAddress(oper);
	            		this.quadruple.addPrintQuadruple(address)
	            	
	            this.state = 148;
	            this.expression_print_aux();
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 150;
	            localctx._CTE_STRING = this.match(LittleDuckParserParser.CTE_STRING);

	            		const val = this.programFunc.functions[`${this.funcName}`].varTable.addConstant((localctx._CTE_STRING == null ? null : localctx._CTE_STRING.text), "string");
	            		this.quadruple.addPrintQuadruple(val);
	            	
	            this.state = 152;
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
	        this.state = 159;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 155;
	                this.match(LittleDuckParserParser.COMMA);
	                this.state = 156;
	                this.print_complement(); 
	            }
	            this.state = 161;
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
	        this.state = 162;
	        localctx._ID = this.match(LittleDuckParserParser.ID);

	        		if(!this.programFunc.functions[`${this.funcName}`].varTable.checkVar((localctx._ID == null ? null : localctx._ID.text))){
	        			throw new Error(`Variable ${(localctx._ID == null ? null : localctx._ID.text)} not declared`);
	        		}
	        	
	        this.state = 164;
	        this.match(LittleDuckParserParser.EQUAL);
	        this.state = 165;
	        this.expression();

	        		const assign = (localctx._ID == null ? null : localctx._ID.text);
	        		const address = this.programFunc.functions[`${this.funcName}`].varTable.getAddress(assign);
	        		const op = this.quadruple.peekOperating();
	        		const opAddress = this.programFunc.functions[`${this.funcName}`].varTable.getAddress(op);
	        		this.quadruple.addAssignQuadruple("=", opAddress, address);

	        this.state = 167;
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
	        this.state = 169;
	        this.match(LittleDuckParserParser.DO);

	        		const cycleIndex = this.quadruple.getCurrentCount();
	        		this.quadruple.pushJump(cycleIndex);
	        	
	        this.state = 171;
	        this.body();
	        this.state = 172;
	        this.match(LittleDuckParserParser.WHILE);
	        this.state = 173;
	        this.match(LittleDuckParserParser.PARENTHESIS_OPEN);
	        this.state = 174;
	        this.expression();
	        this.state = 175;
	        this.match(LittleDuckParserParser.PARENTHESIS_CLOSE);
	        this.state = 176;
	        this.match(LittleDuckParserParser.SEMICOLON);

	        		const op = this.quadruple.popOperating();
	        		const doJump = this.quadruple.popJump();
	        		this.quadruple.addCycleJump(op, doJump);
	        	
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
	        this.state = 179;
	        this.match(LittleDuckParserParser.IF);
	        this.state = 180;
	        this.match(LittleDuckParserParser.PARENTHESIS_OPEN);
	        this.state = 181;
	        this.expression();
	        this.state = 182;
	        this.match(LittleDuckParserParser.PARENTHESIS_CLOSE);

	        		const falseLabel = this.quadruple.newLabel();
	        		const op = this.quadruple.popOperating();
	        		this.quadruple.addConditionalJump(op, falseLabel);
	        		this.quadruple.pushJump(falseLabel);
	        	
	        this.state = 184;
	        this.body();
	        this.state = 185;
	        this.condition_else();
	        this.state = 186;
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
	        this.state = 192;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19) {
	            this.state = 189;
	            this.match(LittleDuckParserParser.ELSE);

	            		const byPassLabel = this.quadruple.newLabel();
	            		this.quadruple.addByPassJump(byPassLabel);

	            		const elseJump = this.quadruple.popJump();
	            		this.quadruple.pushJump(byPassLabel);
	            		const countElse = this.quadruple.getCurrentCount();
	            		this.quadruple.editQuadrupleByLabel(elseJump, countElse);
	            	
	            this.state = 191;
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
	        this.state = 198;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 33:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 194;
	            localctx._CTE_INT = this.match(LittleDuckParserParser.CTE_INT);

	            		this.programFunc.functions[`${this.funcName}`].varTable.addConstant((localctx._CTE_INT == null ? null : localctx._CTE_INT.text), "int");
	            	
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 196;
	            localctx._CTE_FLOAT = this.match(LittleDuckParserParser.CTE_FLOAT);

	            		this.programFunc.functions[`${this.funcName}`].varTable.addConstant((localctx._CTE_FLOAT == null ? null : localctx._CTE_FLOAT.text), "float");
	            	
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
	        this.state = 200;
	        this.exp();
	        this.state = 201;
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
	        this.state = 208;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 7340032) !== 0)) {
	            this.state = 203;
	            localctx._expression_logics = this.expression_logics();

	            		this.quadruple.pushOperator((localctx._expression_logics == null ? null : this._input.getText(new antlr4.Interval(localctx._expression_logics.start,localctx._expression_logics.stop))));

	            this.state = 205;
	            this.exp();

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
	        this.state = 210;
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
	        this.state = 212;
	        this.term();
	        this.state = 213;
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
	        this.state = 222;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===23 || _la===24) {
	            this.state = 215;
	            localctx._exp_operation = this.exp_operation();

	            		this.quadruple.pushOperator((localctx._exp_operation == null ? null : this._input.getText(new antlr4.Interval(localctx._exp_operation.start,localctx._exp_operation.stop))));

	            this.state = 217;
	            this.term();

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
	            	
	            this.state = 224;
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
	        this.state = 225;
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
	        this.state = 227;
	        this.factor();
	        this.state = 228;
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
	        this.state = 237;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===25 || _la===26) {
	            this.state = 230;
	            localctx._term_operation = this.term_operation();

	            		this.quadruple.pushOperator((localctx._term_operation == null ? null : this._input.getText(new antlr4.Interval(localctx._term_operation.start,localctx._term_operation.stop))));

	            this.state = 232;
	            this.factor();

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
	            	
	            this.state = 239;
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
	        this.state = 240;
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
	        this.state = 246;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 242;
	            this.factor_expression();
	            break;
	        case 23:
	        case 24:
	        case 31:
	        case 33:
	        case 34:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 243;
	            localctx._factor_operations = this.factor_operations();

	            	this.quadruple.pushOperating((localctx._factor_operations == null ? null : this._input.getText(new antlr4.Interval(localctx._factor_operations.start,localctx._factor_operations.stop))));

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
	        this.state = 248;
	        this.match(LittleDuckParserParser.PARENTHESIS_OPEN);
	        this.state = 249;
	        this.expression();
	        this.state = 250;
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
	        this.state = 253;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23 || _la===24) {
	            this.state = 252;
	            localctx._factor_operation_plus_minus = this.factor_operation_plus_minus();
	        }

	        this.state = 255;
	        localctx._factor_aux = this.factor_aux();

	        	const auxFaxPM = (localctx._factor_operation_plus_minus == null ? null : this._input.getText(new antlr4.Interval(localctx._factor_operation_plus_minus.start,localctx._factor_operation_plus_minus.stop)));
	        	const val = (localctx._factor_aux == null ? null : this._input.getText(new antlr4.Interval(localctx._factor_aux.start,localctx._factor_aux.stop)));
	        	const key = this.programFunc.functions[`${this.funcName}`].varTable.getAddress(val)
	        	if(auxFaxPM){
	        		if(auxFaxPM == "+"){
	        			this.programFunc.functions[`${this.funcName}`].varTable.editValByAddress(key, `+${val}`)
	        		} else {
	        			this.programFunc.functions[`${this.funcName}`].varTable.editValByAddress(key, `-${val}`)
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
	        this.state = 258;
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
	        this.state = 263;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 31:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 260;
	            localctx._ID = this.match(LittleDuckParserParser.ID);

	            		if(!this.programFunc.functions[`${this.funcName}`].varTable.checkVar((localctx._ID == null ? null : localctx._ID.text))){
	            			throw new Error(`Variable ${(localctx._ID == null ? null : localctx._ID.text)} not declared`);
	            		}
	            	
	            break;
	        case 33:
	        case 34:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 262;
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
	        this.state = 265;
	        this.match(LittleDuckParserParser.VOID);
	        this.state = 266;
	        this.funcs_id();
	        this.state = 267;
	        this.match(LittleDuckParserParser.PARENTHESIS_OPEN);
	        this.state = 268;
	        localctx._funcs_args = this.funcs_args();

	        		const args = (localctx._funcs_args == null ? null : this._input.getText(new antlr4.Interval(localctx._funcs_args.start,localctx._funcs_args.stop)));

	        		if (args !== ""){
	        			const varsWithType = args.split(",");

	        			varsWithType.forEach(uniqueVar => {
	        				const [id, type] = uniqueVar.split(":");
	        				this.programFunc.functions[`${this.funcName}`].varTable.addVar(id, type);
	        			});
	        		}

	        	
	        this.state = 270;
	        this.match(LittleDuckParserParser.PARENTHESIS_CLOSE);
	        this.state = 271;
	        this.match(LittleDuckParserParser.SQUARE_BRACKET_OPEN);
	        this.state = 272;
	        this.funcs_vars();
	        this.state = 273;
	        this.body();
	        this.state = 274;
	        this.match(LittleDuckParserParser.SQUARE_BRACKET_CLOSE);
	        this.state = 275;
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



	funcs_id() {
	    let localctx = new Funcs_idContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, LittleDuckParserParser.RULE_funcs_id);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277;
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
	        this.state = 281;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 280;
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
	        this.state = 295;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 283;
	            this.match(LittleDuckParserParser.ID);
	            this.state = 284;
	            this.match(LittleDuckParserParser.COLON);
	            this.state = 285;
	            this.type();
	            this.state = 292;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 286;
	                this.match(LittleDuckParserParser.COMMA);
	                this.state = 287;
	                this.match(LittleDuckParserParser.ID);
	                this.state = 288;
	                this.match(LittleDuckParserParser.COLON);
	                this.state = 289;
	                this.type();
	                this.state = 294;
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
	        this.state = 297;
	        this.match(LittleDuckParserParser.ID);
	        this.state = 298;
	        this.match(LittleDuckParserParser.PARENTHESIS_OPEN);
	        this.state = 299;
	        this.f_call_expression();
	        this.state = 300;
	        this.match(LittleDuckParserParser.PARENTHESIS_CLOSE);
	        this.state = 301;
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
	        this.state = 311;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 13)) & ~0x1f) === 0 && ((1 << (_la - 13)) & 3410945) !== 0)) {
	            this.state = 303;
	            this.expression();
	            this.state = 308;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 304;
	                this.match(LittleDuckParserParser.COMMA);
	                this.state = 305;
	                this.expression();
	                this.state = 310;
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
    }

	PROGRAM() {
	    return this.getToken(LittleDuckParserParser.PROGRAM, 0);
	};

	program_id() {
	    return this.getTypedRuleContext(Program_idContext,0);
	};

	SEMICOLON() {
	    return this.getToken(LittleDuckParserParser.SEMICOLON, 0);
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
        this._CTE_INT = null;
        this._CTE_FLOAT = null;
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
