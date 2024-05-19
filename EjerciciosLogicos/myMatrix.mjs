export class MyMatrix {
    constructor(matrix) {
      this.matrix = matrix;
    }
  
    dimension() {
      const getDepth = (arr) => Array.isArray(arr) ? 1 + Math.max(0, ...arr.map(getDepth)) : 0;
      return getDepth(this.matrix);
    }
  
    straight() {
      const checkUniformity = (arr) => {
        if (!Array.isArray(arr)) return true;
        const len = arr.length;
        return arr.every(subArr => Array.isArray(subArr) && subArr.length === len && checkUniformity(subArr));
      };
      return checkUniformity(this.matrix);
    }
  
    compute() {
      const sumElements = (arr) => {
        if (!Array.isArray(arr)) return arr;
        return arr.reduce((sum, subArr) => sum + sumElements(subArr), 0);
      };
      return sumElements(this.matrix);
    }
  }
  