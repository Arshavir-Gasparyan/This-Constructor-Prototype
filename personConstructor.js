class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }

  eat(...a) {
    if (this.stomach.length < 10) {
      this.stomach.push(a);
      return this.stomach;
    } else {
      return "i am not hungry";
    }
  }
  poop() {
    this.stomach.length = 0;
    return this.stomach;
  }
  toString() {
    return `${this.name},${this.age}`;
  }
}
const user1 = new Person("Ann", 40);
const user2 = new Person("Bob", 29);
console.log(user1.eat("fruits"));
console.log(user1.eat("something"));
console.log(user1.poop());
console.log(user1.toString());
