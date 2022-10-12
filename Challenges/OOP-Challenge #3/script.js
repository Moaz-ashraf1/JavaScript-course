const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

/-------------------------------------------------/
const Ev = function (make, speed, chargeBettery) {
  Car.call(this, make, speed);
  this.chargeBettery = chargeBettery;
};

Ev.prototype = Object.create(Car.prototype);

Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.chargeBettery--;
  console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.chargeBettery}`);
}
Ev.prototype.charge = function (chargeTo) {
  this.chargeBettery = chargeTo;
};

const tesla = new Ev('tesla', 120, 23);
tesla.charge(20);
tesla.accelerate();
console.log(tesla);



