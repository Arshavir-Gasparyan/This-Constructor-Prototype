function Calculator(...[a, b]) {
  this.a = a;
  this.b = b;
  this.add = function (a, b) {
    return a + b;
  };
  this.subtract = function (a, b) {
    return a - b;
  };
  this.multiply = function (a, b) {
    return a * b;
  };
  this.divide = function (a, b) {
    return a / b;
  };
}
const calculator = new Calculator();
console.log(calculator.add(3, 5));
console.log(calculator.subtract(3, 5));
console.log(calculator.multiply(3, 5));
console.log(calculator.divide(3, 5));
