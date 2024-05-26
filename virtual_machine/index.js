import fs from "fs";
import { Interpreter } from "./interpreter.js";
import readline from "readline";

const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Los archivos de prueba deben estar en la carpeta tests");
userInput.question("Nombre del archivo sin extensión: ", (fileName) => {
  fs.readFile(
    `./virtual_machine/tests/${fileName}.ovejota`,
    "utf8",
    (err, data) => {
      if (err) {
        userInput.close();
        throw new Error("No se pudo leer el archivo");
      }
      const interpreter = new Interpreter(data);
      interpreter.execute();
      userInput.close();
    }
  );
});
