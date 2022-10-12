

const CarPrototype = {
  accelerate() {
    this.speed += 10;
    console.log(`${this.speed} Km/h`);
  },

  brake() {
    this.speed -= 5;
    console.log(`${this.speed} Km/h`);
  },

  init(make, speed) {
    this.make = make;
    this.speed = speed;
  },


  get speedUS() {
    return this.speed / 1.6;
  },

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

};

const car1 = Object.create(CarPrototype);
car1.init('BMW', 120);

const ford = Object.create(CarPrototype);
ford.init('ford', 120);


console.log(car1.__proto__ === CarPrototype);
console.log(car1.__proto__ === ford.__proto__);

console.log(car1);
console.log(ford);

console.log(car1.__proto__);
console.log(ford.__proto__);

console.log(CarPrototype);


console.log(ford.speedUS);
ford.accelerate();
ford.speedUS = 50;
console.log(ford);