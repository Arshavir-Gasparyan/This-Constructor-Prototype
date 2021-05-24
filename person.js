function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.compareAge = function () {
  if (this.age > 18) {
    return `${this.name} is older than me`;
  } else if (this.age < 18) {
    return `${this.name} is younger than me`;
  } else {
    return `${this.name} is the same age as me`;
  }
};

const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 17);
const p3 = new Person("Lily", 18);
console.log(p1.compareAge());
console.log(p2.compareAge());
console.log(p3.compareAge());
