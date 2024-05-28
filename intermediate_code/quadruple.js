import fs from "fs";
import path from "path";

class Quadruple {
  constructor(op, arg1, arg2, res) {
    this.op = op;
    this.arg1 = arg1;
    this.arg2 = arg2;
    this.res = res;
  }

  toString() {
    return `\t${this.op}\t|\t${this.arg1}\t|\t${this.arg2}\t|\t${this.res}`;
  }

  toStringWithoutFormat() {
    return `${this.op},${this.arg1},${this.arg2},${this.res}`;
  }
}

class QuadrupleTable {
  constructor() {
    this.quadruple = [];
    this.globalCount = 0;
    this.tempCount = 0;
    this.labelCount = 0;

    this.operatorsPile = [];
    this.operatingsPile = [];
    this.typePile = [];
    this.jumpPile = [];
  }

  newTemp() {
    return `t${this.tempCount++}`;
  }

  newLabel() {
    return `L${this.labelCount++}`;
  }

  addQuadruple(op, arg1, arg2, res) {
    const quadruple = new Quadruple(op, arg1, arg2, res);
    this.quadruple.push(quadruple);
    this.globalCount++;
  }

  addEndQuadruple() {
    this.addQuadruple(12, "", "", "");
  }

  addAssignQuadruple(op, arg1, res) {
    const quadruple = new Quadruple(op, arg1, "", res);
    this.quadruple.push(quadruple);
    this.globalCount++;
  }

  pushOperator(operator) {
    this.operatorsPile.push(operator);
  }

  popOperator() {
    return this.operatorsPile.pop();
  }

  peekOperator() {
    return this.operatorsPile[this.operatorsPile.length - 1];
  }

  pushOperating(operating) {
    this.operatingsPile.push(operating);
  }

  popOperating() {
    return this.operatingsPile.pop();
  }

  peekOperating() {
    return this.operatingsPile[this.operatingsPile.length - 1];
  }

  pushType(type) {
    this.typePile.push(type);
  }

  popType() {
    return this.typePile.pop();
  }

  peekType() {
    return this.typePile[this.typePile.length - 1];
  }

  getCurrentCount() {
    return this.globalCount;
  }

  pushJump(jump) {
    this.jumpPile.push(jump);
  }

  popJump() {
    return this.jumpPile.pop();
  }

  peekJump() {
    return this.jumpPile[this.jumpPile.length - 1];
  }

  addByPassJump(label) {
    this.addQuadruple(11, "", "", label);
  }
  // ^
  // PODRIA SER EL MISMO DE ARRIBA
  // ...
  addGotoMainQuadruple(label) {
    this.addQuadruple(11, "", "", label);
  }

  addEndFunctionQuadruple() {
    this.addQuadruple(13, "", "", "");
  }

  addEraQuadruple(functionName) {
    this.addQuadruple(14, "", "", functionName);
  }

  addParamQuadruple(param, paramNumber) {
    this.addQuadruple(15, param, "", paramNumber);
  }

  addGoSubQuadruple(functionName) {
    this.addQuadruple(16, "", "", functionName);
  }

  addConditionalJump(condition, label) {
    this.addQuadruple(9, condition, "", label);
  }

  addCycleJump(condition, label) {
    this.addQuadruple(10, condition, "", label);
  }

  addPrintQuadruple(arg) {
    this.addQuadruple(8, "", "", arg);
  }

  getQuadrupleByIndex(index) {
    return this.quadruple[index];
  }

  editQuadrupleByLabel(label, newRes) {
    const index = this.quadruple.findIndex((quad) => quad.res === label);
    const quadruple = this.getQuadrupleByIndex(index);
    quadruple.res = newRes;
  }

  printQuadrupleTable() {
    console.log("Tabla de Cuádruplos:");
    console.log(
      "\t---------------------------------------------------------------------------------"
    );
    console.log("\t|\ti\t|\tOp\t|\tArg1\t|\tArg2\t|\tRes\t|");
    console.log(
      "\t---------------------------------------------------------------------------------"
    );
    this.quadruple.forEach((quad, index) => {
      console.log(`\t|\t${index}:\t|${quad.toString()}\t|`);
      console.log(
        "\t---------------------------------------------------------------------------------"
      );
    });
  }

  generateDocument(fileName, obj, functionDir) {
    const quadrupleDoc = this.quadruple
      .map((quad) => quad.toStringWithoutFormat())
      .join("\n");

    const objEntries = Object.values(obj)
      .map(({ name, address }) => `${address},${name}`)
      .join("\n");

    const functionEntries = Object.values(functionDir)
      .map(({ name, type, startQuad }) => {
        return `${name},${type},${startQuad}`;
      })
      .join("\n");

    const finalDoc = `${quadrupleDoc}\n$\n${objEntries}\n$\n${functionEntries}`;

    const folderPath = "./virtual_machine/tests";
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    const filePath = path.join(folderPath, `${fileName}.ovejota`);

    fs.writeFile(filePath, finalDoc, "utf8", (err) => {
      if (err) {
        console.error("Error writing the file:", err);
      } else {
        console.log(
          "File has been saved as",
          `${fileName}.ovejota`,
          "at virtual_machine/tests\n"
        );
      }
    });
  }
}

export { Quadruple, QuadrupleTable };
