function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function (gallons) {
  this.tank += Number(gallons);
  return this.tank;
};
Car.prototype.drive = function (distans) {
  if (this.tank * this.milesPerGallon > distans) {
    this.odometer = distans;
    return this.odometer;
  } else {
    return "Iran out of fuel at " + this.tank * this.milesPerGallon + " miles!";
  }
};

const car1 = new Car("bmw", 10);
console.log(car1.fill(20));
console.log(car1.drive(180));
