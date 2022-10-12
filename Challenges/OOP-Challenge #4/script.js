class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUs() {
    return this.speed / 1.6;
  }
  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}

class Ev extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBettery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(`${this.make} is going at ${this.speed} km/h with a charge of ${this.#charge}`);
    return this;
  }
}
const Car1 = new Ev('Rivian', 120, 23);
console.log(Car1);
Car1.accelerate().accelerate().accelerate().brake().chargeBettery(50).accelerate();