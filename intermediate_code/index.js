import antlr4 from "antlr4";
import LittleDuckLexer from "./antlr/LittleDuckLexer.js";
import LittleDuckParser from "./antlr/LittleDuckParserParser.js";
import { FunctionDir, ConstantTable } from "./semantic.js";
import { QuadrupleTable } from "./quadruple.js";
import semanticCube from "./semanticCube.js";
import fs from "fs";
import readline from "readline";
import MyErrorListener from "./antlr/ErrorListener.js";

const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Los archivos de prueba deben estar en la carpeta tests");
userInput.question("Nombre del archivo sin extensión: ", (fileName) => {
  fs.readFile(
    `./intermediate_code/tests/${fileName}.txt`,
    "utf8",
    (err, data) => {
      if (err) {
        userInput.close();
        console.error("No se pudo leer el archivo");
        return;
      }

      try {
        const chars = new antlr4.InputStream(data);
        const lexer = new LittleDuckLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new LittleDuckParser(tokens);

        const lexerErrorListener = new MyErrorListener();
        const parserErrorListener = new MyErrorListener();
        lexer.removeErrorListeners();
        parser.removeErrorListeners();
        lexer.addErrorListener(lexerErrorListener);
        parser.addErrorListener(parserErrorListener);

        const programFunc = new FunctionDir();
        const constantsTable = new ConstantTable();
        const quadruple = new QuadrupleTable();

        parser.programFunc = programFunc;
        parser.constantTable = constantsTable;

        parser.quadruple = quadruple;
        parser.semanticCube = semanticCube;

        const tree = parser.program();

        const lexerErrors = lexerErrorListener.getErrors();
        const parserErrors = parserErrorListener.getErrors();

        if (lexerErrors.length > 0) {
          throw new Error(`Errores léxicos: \n${lexerErrors.join("\n")}`);
        }

        if (parserErrors.length > 0) {
          throw new Error(`Errores sintácticos: \n${parserErrors.join("\n")}`);
        }

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
        console.log("\n");
        console.log("ENTREGA $4 - Máquina Virtual...\n");
        console.log(
          'Para interpretar el archivo compilado, corra el comando: "npm run interpret"\n'
        );
      } catch (error) {
        console.error("Se encontró un error durante el análisis:");
        console.error(error.message);
      } finally {
        userInput.close();
      }
    }
  );
});
