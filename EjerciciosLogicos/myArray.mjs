export class MyArray {
    constructor(expression) {
      this.expression = expression;
    }
  
    operation() {
      // Regex to check if the string is a valid arithmetic expression
      const regex = /^[\d+\-*/().\s]+$/;
      try {
        // Evaluate the expression to check its validity
        new Function(`return ${this.expression}`);
        return regex.test(this.expression);
      } catch (e) {
        return false;
      }
    }
  
    compute() {
      if (!this.operation()) {
        return false;
      }
      try {
        // Use Function constructor to safely evaluate the expression
        const result = new Function(`return ${this.expression}`)();
        return result;
      } catch (e) {
        return false;
      }
    }
  }
  