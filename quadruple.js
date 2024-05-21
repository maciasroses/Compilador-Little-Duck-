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

  // BORRAR
  getTypePile() {
    return this.typePile;
  }
  // BORRAR

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
    this.addQuadruple("GOTO", "", "", label);
  }

  addConditionalJump(condition, label) {
    this.addQuadruple("GOTOF", condition, "", label);
  }

  addCycleJump(condition, label) {
    this.addQuadruple("GOTOT", condition, "", label);
  }

  addPrintQuadruple(arg) {
    this.addQuadruple("PRINT", "", "", arg);
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
}

export { Quadruple, QuadrupleTable };
