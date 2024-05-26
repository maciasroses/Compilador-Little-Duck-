import antlr4 from "antlr4";
import LittleDuckLexer from "./antlr/LittleDuckLexer.js";
import LittleDuckParser from "./antlr/LittleDuckParserParser.js";
import { FunctionDir } from "./semantic.js";
import { QuadrupleTable } from "./quadruple.js";
import semanticCube from "./semanticCube.js";
import fs from "fs";
import readline from "readline";

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
        throw new Error("No se pudo leer el archivo");
      }
      const chars = new antlr4.InputStream(data);
      const lexer = new LittleDuckLexer(chars);
      const tokens = new antlr4.CommonTokenStream(lexer);
      const parser = new LittleDuckParser(tokens);

      const programFunc = new FunctionDir();
      const quadruple = new QuadrupleTable();
      parser.programFunc = programFunc;
      parser.quadruple = quadruple;
      parser.semanticCube = semanticCube;

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
      console.log("\n");
      console.log("ENTREGA $4 - Máquina Virtual...\n");
      console.log(
        'Para interpretar el archivo compilado, corra el comando: "npm run interpret"\n'
      );

      userInput.close();
    }
  );
});
