import antlr4 from "antlr4";
import LittleDuckLexer from "./antlr_generated_files/LittleDuckLexer.js";
import LittleDuckParser from "./antlr_generated_files/LittleDuckParserParser.js";
import { FunctionDir } from "./semantic.js";
import { QuadrupleTable } from "./quadruple.js";
import fs from "fs";

// const input = fs.readFileSync("./Entrega1_Tests/test1.txt", "utf-8");
// const input = fs.readFileSync("./Entrega1_Tests/test2.txt", "utf-8");
// const input = fs.readFileSync("./Entrega1_Tests/test3.txt", "utf-8");
// const input = fs.readFileSync("./Entrega1_Tests/test4.txt", "utf-8");
// const input = fs.readFileSync("./Entrega1_Tests/test5.txt", "utf-8");
// const input = fs.readFileSync("./Entrega1_Tests/test6.txt", "utf-8");
// const input = fs.readFileSync("./Entrega1_Tests/test7.txt", "utf-8");
// const input = fs.readFileSync("./Entrega1_Tests/test8.txt", "utf-8");
// const input = fs.readFileSync("./Entrega1_Tests/test9.txt", "utf-8");
const input = fs.readFileSync("./Entrega1_Tests/test10.txt", "utf-8");
// const input = fs.readFileSync("./Entrega1_Tests/test11.txt", "utf-8");

const chars = new antlr4.InputStream(input);
const lexer = new LittleDuckLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new LittleDuckParser(tokens);

const programFunc = new FunctionDir();
const quadruple = new QuadrupleTable();
parser.programFunc = programFunc;
parser.quadruple = quadruple;

const tree = parser.program();

console.log("ENTREGA $1 - Árbol de análisis sintáctico:\n");
console.log(tree.toStringTree(parser.ruleNames));
console.log("\n");
console.log(
  "ENTREGA $2 - Directorio de funciones con sus tablas de variables\n"
);
programFunc.getDir();
console.log("\n");
console.log("ENTREGA $3 - Generación de Cuádruplos\n");
quadruple.printQuadrupleTable();
