function Person(name, age, stomach = []) {
  this.name = name;
  this.age = age;
  this.stomach = stomach;
}

Person.prototype.eat = function (...a) {
  if (this.stomach.length < 10) {
    this.stomach = [...this.stomach, ...a];
    return this.stomach;
  } else {
    return "i am not hungry";
  }
};
Person.prototype.poop = function () {
  this.stomach.length = 0;
  return this.stomach;
};
Person.prototype.toString = function () {
  return `${this.name},${this.age}`;
};

const user1 = new Person("Ann", 40);
const user2 = new Person("Bob", 29);
console.log(user1.eat("fruits", "apple"));
console.log(user1.eat("something"));
console.log(user1.poop());
console.log(user1.toString());
