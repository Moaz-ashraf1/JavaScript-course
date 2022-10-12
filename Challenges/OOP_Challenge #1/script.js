const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  this.speed *= 10;
  console.log(`${this.speed} Km/h`);
}

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.speed} Km/h`);
}

const car1 = new Car('BMW', 120);
console.log(car1);
car1.accelerate();
car1.brake();

const car2 = new Car('BMW', 120);
console.log(car2);
car2.accelerate();
car2.brake();
