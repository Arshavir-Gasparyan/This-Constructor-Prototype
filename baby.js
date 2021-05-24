function Person({ name, age, surname, stomach = [] } = {}) {
  this.name = name;
  this.age = age;
  this.stomach = stomach;
  this.surname = surname;
}
Person.prototype.eat = function (...food) {
  if (this.stomach.length < 10) {
    this.stomach = [...this.stomach, ...food];
  } else {
    throw new Error("TOO MUCH FOOD!");
  }
};
Person.prototype.poop = function () {
  this.stomach = [];
};
Person.prototype.toString = function () {
  return `Person: ${this.name} — ${this.age}`;
};
const rawUser = { name: "Ilon", age: 44 };
const u1 = new Person(rawUser);
const u2 = new Person();
u1.eat("shawarma", "kebab", "fries", "pepper");
u1.eat("lasagna", "pasta");
// console.log(u1);
// console.log(u2);
function Baby(name, age, surname, favoriteToys = []) {
  Person.call(this, { name, age, surname });
  this.favoriteToys = favoriteToys;
}
Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function play() {
  return `${this.name} playing with ${this.favoriteToys}`;
};
const baby1 = new Baby("Mary", 2, "Ananyan", "toys");
// console.log(baby1);
console.log(baby1.play());
