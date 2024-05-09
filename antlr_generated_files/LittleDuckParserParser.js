// Generated from LittleDuckParser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import LittleDuckParserListener from './LittleDuckParserListener.js';
const serializedATN = [4,1,34,276,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,3,1,85,8,
1,1,2,5,2,88,8,2,10,2,12,2,91,9,2,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,4,4,101,
8,4,11,4,12,4,102,1,5,1,5,1,5,5,5,108,8,5,10,5,12,5,111,9,5,1,6,1,6,1,7,
1,7,1,7,1,7,1,8,5,8,120,8,8,10,8,12,8,123,9,8,1,9,1,9,1,9,1,9,1,9,3,9,130,
8,9,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,3,11,143,8,11,
1,12,1,12,5,12,147,8,12,10,12,12,12,150,9,12,1,13,1,13,1,13,1,13,1,13,1,
14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
1,15,1,16,1,16,3,16,175,8,16,1,17,1,17,1,18,1,18,1,18,1,19,1,19,1,19,3,19,
185,8,19,1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,22,5,22,195,8,22,10,22,12,
22,198,9,22,1,23,1,23,1,24,1,24,1,24,1,25,1,25,1,25,5,25,208,8,25,10,25,
12,25,211,9,25,1,26,1,26,1,27,1,27,3,27,217,8,27,1,28,1,28,1,28,1,28,1,29,
1,29,3,29,225,8,29,1,30,3,30,228,8,30,1,31,1,31,1,32,1,32,1,32,1,32,1,32,
1,32,1,32,1,32,1,32,1,32,1,32,1,33,3,33,244,8,33,1,34,1,34,1,34,1,34,1,34,
1,34,1,34,5,34,253,8,34,10,34,12,34,256,9,34,3,34,258,8,34,1,35,1,35,1,35,
1,35,1,35,1,35,1,36,1,36,1,36,5,36,269,8,36,10,36,12,36,272,9,36,3,36,274,
8,36,1,36,0,0,37,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,0,5,1,0,8,9,1,0,33,34,
1,0,20,22,1,0,23,24,1,0,25,26,261,0,74,1,0,0,0,2,84,1,0,0,0,4,89,1,0,0,0,
6,92,1,0,0,0,8,100,1,0,0,0,10,104,1,0,0,0,12,112,1,0,0,0,14,114,1,0,0,0,
16,121,1,0,0,0,18,129,1,0,0,0,20,131,1,0,0,0,22,142,1,0,0,0,24,148,1,0,0,
0,26,151,1,0,0,0,28,156,1,0,0,0,30,164,1,0,0,0,32,174,1,0,0,0,34,176,1,0,
0,0,36,178,1,0,0,0,38,184,1,0,0,0,40,186,1,0,0,0,42,188,1,0,0,0,44,196,1,
0,0,0,46,199,1,0,0,0,48,201,1,0,0,0,50,209,1,0,0,0,52,212,1,0,0,0,54,216,
1,0,0,0,56,218,1,0,0,0,58,224,1,0,0,0,60,227,1,0,0,0,62,229,1,0,0,0,64,231,
1,0,0,0,66,243,1,0,0,0,68,257,1,0,0,0,70,259,1,0,0,0,72,273,1,0,0,0,74,75,
5,1,0,0,75,76,5,31,0,0,76,77,5,6,0,0,77,78,3,2,1,0,78,79,3,4,2,0,79,80,5,
2,0,0,80,81,3,14,7,0,81,82,5,3,0,0,82,1,1,0,0,0,83,85,3,6,3,0,84,83,1,0,
0,0,84,85,1,0,0,0,85,3,1,0,0,0,86,88,3,64,32,0,87,86,1,0,0,0,88,91,1,0,0,
0,89,87,1,0,0,0,89,90,1,0,0,0,90,5,1,0,0,0,91,89,1,0,0,0,92,93,5,4,0,0,93,
94,3,8,4,0,94,7,1,0,0,0,95,96,3,10,5,0,96,97,5,5,0,0,97,98,3,12,6,0,98,99,
5,6,0,0,99,101,1,0,0,0,100,95,1,0,0,0,101,102,1,0,0,0,102,100,1,0,0,0,102,
103,1,0,0,0,103,9,1,0,0,0,104,109,5,31,0,0,105,106,5,7,0,0,106,108,5,31,
0,0,107,105,1,0,0,0,108,111,1,0,0,0,109,107,1,0,0,0,109,110,1,0,0,0,110,
11,1,0,0,0,111,109,1,0,0,0,112,113,7,0,0,0,113,13,1,0,0,0,114,115,5,10,0,
0,115,116,3,16,8,0,116,117,5,11,0,0,117,15,1,0,0,0,118,120,3,18,9,0,119,
118,1,0,0,0,120,123,1,0,0,0,121,119,1,0,0,0,121,122,1,0,0,0,122,17,1,0,0,
0,123,121,1,0,0,0,124,130,3,26,13,0,125,130,3,30,15,0,126,130,3,28,14,0,
127,130,3,70,35,0,128,130,3,20,10,0,129,124,1,0,0,0,129,125,1,0,0,0,129,
126,1,0,0,0,129,127,1,0,0,0,129,128,1,0,0,0,130,19,1,0,0,0,131,132,5,12,
0,0,132,133,5,13,0,0,133,134,3,22,11,0,134,135,5,14,0,0,135,136,5,6,0,0,
136,21,1,0,0,0,137,138,3,36,18,0,138,139,3,24,12,0,139,143,1,0,0,0,140,141,
5,32,0,0,141,143,3,24,12,0,142,137,1,0,0,0,142,140,1,0,0,0,143,23,1,0,0,
0,144,145,5,7,0,0,145,147,3,22,11,0,146,144,1,0,0,0,147,150,1,0,0,0,148,
146,1,0,0,0,148,149,1,0,0,0,149,25,1,0,0,0,150,148,1,0,0,0,151,152,5,31,
0,0,152,153,5,15,0,0,153,154,3,36,18,0,154,155,5,6,0,0,155,27,1,0,0,0,156,
157,5,17,0,0,157,158,3,14,7,0,158,159,5,16,0,0,159,160,5,13,0,0,160,161,
3,36,18,0,161,162,5,14,0,0,162,163,5,6,0,0,163,29,1,0,0,0,164,165,5,18,0,
0,165,166,5,13,0,0,166,167,3,36,18,0,167,168,5,14,0,0,168,169,3,14,7,0,169,
170,3,32,16,0,170,171,5,6,0,0,171,31,1,0,0,0,172,173,5,19,0,0,173,175,3,
14,7,0,174,172,1,0,0,0,174,175,1,0,0,0,175,33,1,0,0,0,176,177,7,1,0,0,177,
35,1,0,0,0,178,179,3,42,21,0,179,180,3,38,19,0,180,37,1,0,0,0,181,182,3,
40,20,0,182,183,3,42,21,0,183,185,1,0,0,0,184,181,1,0,0,0,184,185,1,0,0,
0,185,39,1,0,0,0,186,187,7,2,0,0,187,41,1,0,0,0,188,189,3,48,24,0,189,190,
3,44,22,0,190,43,1,0,0,0,191,192,3,46,23,0,192,193,3,48,24,0,193,195,1,0,
0,0,194,191,1,0,0,0,195,198,1,0,0,0,196,194,1,0,0,0,196,197,1,0,0,0,197,
45,1,0,0,0,198,196,1,0,0,0,199,200,7,3,0,0,200,47,1,0,0,0,201,202,3,54,27,
0,202,203,3,50,25,0,203,49,1,0,0,0,204,205,3,52,26,0,205,206,3,54,27,0,206,
208,1,0,0,0,207,204,1,0,0,0,208,211,1,0,0,0,209,207,1,0,0,0,209,210,1,0,
0,0,210,51,1,0,0,0,211,209,1,0,0,0,212,213,7,4,0,0,213,53,1,0,0,0,214,217,
3,56,28,0,215,217,3,58,29,0,216,214,1,0,0,0,216,215,1,0,0,0,217,55,1,0,0,
0,218,219,5,13,0,0,219,220,3,36,18,0,220,221,5,14,0,0,221,57,1,0,0,0,222,
225,5,31,0,0,223,225,3,34,17,0,224,222,1,0,0,0,224,223,1,0,0,0,225,59,1,
0,0,0,226,228,3,62,31,0,227,226,1,0,0,0,227,228,1,0,0,0,228,61,1,0,0,0,229,
230,7,3,0,0,230,63,1,0,0,0,231,232,5,27,0,0,232,233,5,31,0,0,233,234,5,13,
0,0,234,235,3,68,34,0,235,236,5,14,0,0,236,237,5,28,0,0,237,238,3,66,33,
0,238,239,3,14,7,0,239,240,5,29,0,0,240,241,5,6,0,0,241,65,1,0,0,0,242,244,
3,6,3,0,243,242,1,0,0,0,243,244,1,0,0,0,244,67,1,0,0,0,245,246,5,31,0,0,
246,247,5,5,0,0,247,254,3,12,6,0,248,249,5,7,0,0,249,250,5,31,0,0,250,251,
5,5,0,0,251,253,3,12,6,0,252,248,1,0,0,0,253,256,1,0,0,0,254,252,1,0,0,0,
254,255,1,0,0,0,255,258,1,0,0,0,256,254,1,0,0,0,257,245,1,0,0,0,257,258,
1,0,0,0,258,69,1,0,0,0,259,260,5,31,0,0,260,261,5,13,0,0,261,262,3,72,36,
0,262,263,5,14,0,0,263,264,5,6,0,0,264,71,1,0,0,0,265,270,3,36,18,0,266,
267,5,7,0,0,267,269,3,36,18,0,268,266,1,0,0,0,269,272,1,0,0,0,270,268,1,
0,0,0,270,271,1,0,0,0,271,274,1,0,0,0,272,270,1,0,0,0,273,265,1,0,0,0,273,
274,1,0,0,0,274,73,1,0,0,0,20,84,89,102,109,121,129,142,148,174,184,196,
209,216,224,227,243,254,257,270,273];


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
    static ruleNames = [ "program", "has_vars", "has_funcs", "vars", "var_complement", 
                         "id_complement", "type", "body", "body_complement", 
                         "statement", "print", "print_complement", "expression_print_aux", 
                         "assign", "cycle", "condition", "condition_else", 
                         "cte", "expression", "expression_aux", "expression_logics", 
                         "exp", "exp_aux", "exp_operation", "term", "term_aux", 
                         "term_operation", "factor", "factor_expression", 
                         "factor_aux", "factor_operations", "factor_operation_plus_minus", 
                         "funcs", "funcs_vars", "funcs_args", "f_call", 
                         "f_call_expression" ];

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
	        this.state = 74;
	        this.match(LittleDuckParserParser.PROGRAM);
	        this.state = 75;
	        this.match(LittleDuckParserParser.ID);
	        this.state = 76;
	        this.match(LittleDuckParserParser.SEMICOLON);
	        this.state = 77;
	        this.has_vars();
	        this.state = 78;
	        this.has_funcs();
	        this.state = 79;
	        this.match(LittleDuckParserParser.MAIN);
	        this.state = 80;
	        this.body();
	        this.state = 81;
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



	has_vars() {
	    let localctx = new Has_varsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LittleDuckParserParser.RULE_has_vars);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 83;
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
	    this.enterRule(localctx, 4, LittleDuckParserParser.RULE_has_funcs);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===27) {
	            this.state = 86;
	            this.funcs();
	            this.state = 91;
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
	    this.enterRule(localctx, 6, LittleDuckParserParser.RULE_vars);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.match(LittleDuckParserParser.VAR);
	        this.state = 93;
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
	    this.enterRule(localctx, 8, LittleDuckParserParser.RULE_var_complement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 95;
	            this.id_complement();
	            this.state = 96;
	            this.match(LittleDuckParserParser.COLON);
	            this.state = 97;
	            this.type();
	            this.state = 98;
	            this.match(LittleDuckParserParser.SEMICOLON);
	            this.state = 102; 
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
	    this.enterRule(localctx, 10, LittleDuckParserParser.RULE_id_complement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.match(LittleDuckParserParser.ID);
	        this.state = 109;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 105;
	            this.match(LittleDuckParserParser.COMMA);
	            this.state = 106;
	            this.match(LittleDuckParserParser.ID);
	            this.state = 111;
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



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LittleDuckParserParser.RULE_type);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
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
	    this.enterRule(localctx, 14, LittleDuckParserParser.RULE_body);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(LittleDuckParserParser.CURLY_BRACKET_OPEN);
	        this.state = 115;
	        this.body_complement();
	        this.state = 116;
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
	    this.enterRule(localctx, 16, LittleDuckParserParser.RULE_body_complement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2147880960) !== 0)) {
	            this.state = 118;
	            this.statement();
	            this.state = 123;
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
	    this.enterRule(localctx, 18, LittleDuckParserParser.RULE_statement);
	    try {
	        this.state = 129;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 124;
	            this.assign();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 125;
	            this.condition();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 126;
	            this.cycle();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 127;
	            this.f_call();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 128;
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
	    this.enterRule(localctx, 20, LittleDuckParserParser.RULE_print);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this.match(LittleDuckParserParser.PRINT);
	        this.state = 132;
	        this.match(LittleDuckParserParser.PARENTHESIS_OPEN);
	        this.state = 133;
	        this.print_complement();
	        this.state = 134;
	        this.match(LittleDuckParserParser.PARENTHESIS_CLOSE);
	        this.state = 135;
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
	    this.enterRule(localctx, 22, LittleDuckParserParser.RULE_print_complement);
	    try {
	        this.state = 142;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	        case 31:
	        case 33:
	        case 34:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 137;
	            this.expression();
	            this.state = 138;
	            this.expression_print_aux();
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 140;
	            this.match(LittleDuckParserParser.CTE_STRING);
	            this.state = 141;
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
	    this.enterRule(localctx, 24, LittleDuckParserParser.RULE_expression_print_aux);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 144;
	                this.match(LittleDuckParserParser.COMMA);
	                this.state = 145;
	                this.print_complement(); 
	            }
	            this.state = 150;
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
	    this.enterRule(localctx, 26, LittleDuckParserParser.RULE_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this.match(LittleDuckParserParser.ID);
	        this.state = 152;
	        this.match(LittleDuckParserParser.EQUAL);
	        this.state = 153;
	        this.expression();
	        this.state = 154;
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
	    this.enterRule(localctx, 28, LittleDuckParserParser.RULE_cycle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this.match(LittleDuckParserParser.DO);
	        this.state = 157;
	        this.body();
	        this.state = 158;
	        this.match(LittleDuckParserParser.WHILE);
	        this.state = 159;
	        this.match(LittleDuckParserParser.PARENTHESIS_OPEN);
	        this.state = 160;
	        this.expression();
	        this.state = 161;
	        this.match(LittleDuckParserParser.PARENTHESIS_CLOSE);
	        this.state = 162;
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
	    this.enterRule(localctx, 30, LittleDuckParserParser.RULE_condition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        this.match(LittleDuckParserParser.IF);
	        this.state = 165;
	        this.match(LittleDuckParserParser.PARENTHESIS_OPEN);
	        this.state = 166;
	        this.expression();
	        this.state = 167;
	        this.match(LittleDuckParserParser.PARENTHESIS_CLOSE);
	        this.state = 168;
	        this.body();
	        this.state = 169;
	        this.condition_else();
	        this.state = 170;
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



	condition_else() {
	    let localctx = new Condition_elseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, LittleDuckParserParser.RULE_condition_else);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19) {
	            this.state = 172;
	            this.match(LittleDuckParserParser.ELSE);
	            this.state = 173;
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
	    this.enterRule(localctx, 34, LittleDuckParserParser.RULE_cte);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        _la = this._input.LA(1);
	        if(!(_la===33 || _la===34)) {
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, LittleDuckParserParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.exp();
	        this.state = 179;
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
	    this.enterRule(localctx, 38, LittleDuckParserParser.RULE_expression_aux);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 7340032) !== 0)) {
	            this.state = 181;
	            this.expression_logics();
	            this.state = 182;
	            this.exp();
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
	    this.enterRule(localctx, 40, LittleDuckParserParser.RULE_expression_logics);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
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
	    this.enterRule(localctx, 42, LittleDuckParserParser.RULE_exp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 188;
	        this.term();
	        this.state = 189;
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
	    this.enterRule(localctx, 44, LittleDuckParserParser.RULE_exp_aux);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 196;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===23 || _la===24) {
	            this.state = 191;
	            this.exp_operation();
	            this.state = 192;
	            this.term();
	            this.state = 198;
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
	    this.enterRule(localctx, 46, LittleDuckParserParser.RULE_exp_operation);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
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
	    this.enterRule(localctx, 48, LittleDuckParserParser.RULE_term);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
	        this.factor();
	        this.state = 202;
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
	    this.enterRule(localctx, 50, LittleDuckParserParser.RULE_term_aux);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 209;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===25 || _la===26) {
	            this.state = 204;
	            this.term_operation();
	            this.state = 205;
	            this.factor();
	            this.state = 211;
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
	    this.enterRule(localctx, 52, LittleDuckParserParser.RULE_term_operation);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 212;
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
	    this.enterRule(localctx, 54, LittleDuckParserParser.RULE_factor);
	    try {
	        this.state = 216;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 214;
	            this.factor_expression();
	            break;
	        case 31:
	        case 33:
	        case 34:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 215;
	            this.factor_aux();
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
	    this.enterRule(localctx, 56, LittleDuckParserParser.RULE_factor_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 218;
	        this.match(LittleDuckParserParser.PARENTHESIS_OPEN);
	        this.state = 219;
	        this.expression();
	        this.state = 220;
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



	factor_aux() {
	    let localctx = new Factor_auxContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, LittleDuckParserParser.RULE_factor_aux);
	    try {
	        this.state = 224;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 31:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 222;
	            this.match(LittleDuckParserParser.ID);
	            break;
	        case 33:
	        case 34:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 223;
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



	factor_operations() {
	    let localctx = new Factor_operationsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, LittleDuckParserParser.RULE_factor_operations);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 227;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23 || _la===24) {
	            this.state = 226;
	            this.factor_operation_plus_minus();
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
	        this.state = 229;
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



	funcs() {
	    let localctx = new FuncsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, LittleDuckParserParser.RULE_funcs);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 231;
	        this.match(LittleDuckParserParser.VOID);
	        this.state = 232;
	        this.match(LittleDuckParserParser.ID);
	        this.state = 233;
	        this.match(LittleDuckParserParser.PARENTHESIS_OPEN);
	        this.state = 234;
	        this.funcs_args();
	        this.state = 235;
	        this.match(LittleDuckParserParser.PARENTHESIS_CLOSE);
	        this.state = 236;
	        this.match(LittleDuckParserParser.SQUARE_BRACKET_OPEN);
	        this.state = 237;
	        this.funcs_vars();
	        this.state = 238;
	        this.body();
	        this.state = 239;
	        this.match(LittleDuckParserParser.SQUARE_BRACKET_CLOSE);
	        this.state = 240;
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



	funcs_vars() {
	    let localctx = new Funcs_varsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, LittleDuckParserParser.RULE_funcs_vars);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 243;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 242;
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
	    this.enterRule(localctx, 68, LittleDuckParserParser.RULE_funcs_args);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 257;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 245;
	            this.match(LittleDuckParserParser.ID);
	            this.state = 246;
	            this.match(LittleDuckParserParser.COLON);
	            this.state = 247;
	            this.type();
	            this.state = 254;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 248;
	                this.match(LittleDuckParserParser.COMMA);
	                this.state = 249;
	                this.match(LittleDuckParserParser.ID);
	                this.state = 250;
	                this.match(LittleDuckParserParser.COLON);
	                this.state = 251;
	                this.type();
	                this.state = 256;
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
	    this.enterRule(localctx, 70, LittleDuckParserParser.RULE_f_call);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 259;
	        this.match(LittleDuckParserParser.ID);
	        this.state = 260;
	        this.match(LittleDuckParserParser.PARENTHESIS_OPEN);
	        this.state = 261;
	        this.f_call_expression();
	        this.state = 262;
	        this.match(LittleDuckParserParser.PARENTHESIS_CLOSE);
	        this.state = 263;
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
	    this.enterRule(localctx, 72, LittleDuckParserParser.RULE_f_call_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 273;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 13)) & ~0x1f) === 0 && ((1 << (_la - 13)) & 3407873) !== 0)) {
	            this.state = 265;
	            this.expression();
	            this.state = 270;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 266;
	                this.match(LittleDuckParserParser.COMMA);
	                this.state = 267;
	                this.expression();
	                this.state = 272;
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
LittleDuckParserParser.RULE_has_vars = 1;
LittleDuckParserParser.RULE_has_funcs = 2;
LittleDuckParserParser.RULE_vars = 3;
LittleDuckParserParser.RULE_var_complement = 4;
LittleDuckParserParser.RULE_id_complement = 5;
LittleDuckParserParser.RULE_type = 6;
LittleDuckParserParser.RULE_body = 7;
LittleDuckParserParser.RULE_body_complement = 8;
LittleDuckParserParser.RULE_statement = 9;
LittleDuckParserParser.RULE_print = 10;
LittleDuckParserParser.RULE_print_complement = 11;
LittleDuckParserParser.RULE_expression_print_aux = 12;
LittleDuckParserParser.RULE_assign = 13;
LittleDuckParserParser.RULE_cycle = 14;
LittleDuckParserParser.RULE_condition = 15;
LittleDuckParserParser.RULE_condition_else = 16;
LittleDuckParserParser.RULE_cte = 17;
LittleDuckParserParser.RULE_expression = 18;
LittleDuckParserParser.RULE_expression_aux = 19;
LittleDuckParserParser.RULE_expression_logics = 20;
LittleDuckParserParser.RULE_exp = 21;
LittleDuckParserParser.RULE_exp_aux = 22;
LittleDuckParserParser.RULE_exp_operation = 23;
LittleDuckParserParser.RULE_term = 24;
LittleDuckParserParser.RULE_term_aux = 25;
LittleDuckParserParser.RULE_term_operation = 26;
LittleDuckParserParser.RULE_factor = 27;
LittleDuckParserParser.RULE_factor_expression = 28;
LittleDuckParserParser.RULE_factor_aux = 29;
LittleDuckParserParser.RULE_factor_operations = 30;
LittleDuckParserParser.RULE_factor_operation_plus_minus = 31;
LittleDuckParserParser.RULE_funcs = 32;
LittleDuckParserParser.RULE_funcs_vars = 33;
LittleDuckParserParser.RULE_funcs_args = 34;
LittleDuckParserParser.RULE_f_call = 35;
LittleDuckParserParser.RULE_f_call_expression = 36;

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

	ID() {
	    return this.getToken(LittleDuckParserParser.ID, 0);
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
    }

	factor_expression() {
	    return this.getTypedRuleContext(Factor_expressionContext,0);
	};

	factor_aux() {
	    return this.getTypedRuleContext(Factor_auxContext,0);
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
    }

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
    }

	VOID() {
	    return this.getToken(LittleDuckParserParser.VOID, 0);
	};

	ID() {
	    return this.getToken(LittleDuckParserParser.ID, 0);
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
LittleDuckParserParser.Factor_auxContext = Factor_auxContext; 
LittleDuckParserParser.Factor_operationsContext = Factor_operationsContext; 
LittleDuckParserParser.Factor_operation_plus_minusContext = Factor_operation_plus_minusContext; 
LittleDuckParserParser.FuncsContext = FuncsContext; 
LittleDuckParserParser.Funcs_varsContext = Funcs_varsContext; 
LittleDuckParserParser.Funcs_argsContext = Funcs_argsContext; 
LittleDuckParserParser.F_callContext = F_callContext; 
LittleDuckParserParser.F_call_expressionContext = F_call_expressionContext; 
