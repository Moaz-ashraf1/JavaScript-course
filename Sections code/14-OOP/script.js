'use strict';

// // Constructor Function

// const Person = function (fullName, birthYear, tele) {
//   this.fullName = fullName;
//   this.birthYear = birthYear;
//   this.tele = tele;
// };
// const Moaz = new Person('Moaz Ashraf', 2002, '01094977673');
// console.log(Moaz);

// Person.prototype.info = function () {
//   console.log(`fullName : ${this.fullName}
// birthYear :${this.birthYear}
// tele : ${this.tele}`);
// }
// Person.prototype.age = 20;
// Moaz.info();

// console.log(Person.prototype);
// console.log(Moaz.__proto__);
// console.log(Person.prototype === Moaz.__proto__);

// console.log(Moaz.__proto__.isPrototypeOf(Person));
// console.log(Person.prototype.isPrototypeOf(Person));

// console.log(Person.prototype.isPrototypeOf(Moaz));
// console.log(Moaz.__proto__.isPrototypeOf(Moaz));

// console.log(Moaz.constructor);

// console.log(Moaz.hasOwnProperty('age'));
// console.log(Moaz.hasOwnProperty('fullName'));

// / ----------------------------------------------------- /

// // prototypel inheritance on Built in Object
// const arr = [1, 2, 3, 4, 5, 5, 6, 6, 6];

// console.log(arr.__proto__);
// console.log(Array.prototype);

// / ----------------------------------------------------- /

// //ES6 Classes

// class PersonCl {
//   constructor(fullName, tele, birthYear) {
//     this.fullName = fullName;
//     this.tele = tele;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2022 - this.birthYear);
//   }

//   get telepone() {
//     return this.tele;
//   }

//   set telepone(tele) {
//     if (tele === '010323434344') {
//       this.tele = tele;
//     }
//     else {
//       alert('not vaild');
//     }
//   }

//   static hey() {
//     console.log(`Hey Hey`);
//     console.log(this);
//   }
// }

// const Mohamed = new PersonCl('Mohamed ahmed', '01032343434', 2003);
// console.log(Mohamed);

// console.log(Mohamed.telepone);
// Mohamed.telepone = '010323434344';
// console.log(Mohamed);

// / ----------------------------------------------------- /

// //static Methods in object

// PersonCl.hey();

// / ----------------------------------------------------- /

// const PersonProto = {
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   },
//   init(fullName, tele, birthYear) {
//     this.fullName = fullName;
//     this.tele = tele;
//     this.birthYear = birthYear;
//   }
// }
// const steven = Object.create(PersonProto);
// steven.init('steven mohamed', '2498955', 1999);
// console.log(steven);

// steven.calcAge();

/ ----------------------------------------------------- /;

// // person class
// const Person = function (firstName, birthYear) {
//   this.birthYear = birthYear;
//   this.firstName = firstName;

// };

// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };

// // student class
// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };
// // linked prototype
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

// console.log(Student.prototype);
// console.log(Person.prototype);
// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.log(Student.prototype.constructor);
// console.log(Person.prototype.constructor);

// ----------------------------------------------------- /

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce = function () {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   };
// }

// const rahma = new StudentCl('Rahma Ashraf', 2004, 'CS');
// console.log(rahma);
// rahma.introduce();

// console.log(rahma.__proto__ === StudentCl.prototype);
// console.log(rahma.__proto__ === PersonCl.prototype);
// console.log(PersonCl.prototype === StudentCl.prototype);

//----------------------------------------------------/

// const PersonProto = {
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// }

// const moaz = Object.create(PersonProto);
// moaz.init('moaz', 2030);
// console.log(moaz);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// }

// const steven = Object.create(StudentProto);
// steven.init('Mawada', 2010, 'Arabic')
// console.log(steven);

//-------------------------------------------------//

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     this.movements = [];
//     this.local = navigator.language;
//     console.log(`Thanks for opening an account, ${this.owner}`);
//   }
//   deposite(value) {
//     this.movements.push(value);
//   }

//   withdraw(value) {
//     this.movements.push(-value);
//   }

//   approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this.approveLoan(val)) {
//       this.deposite(val)
//       console.log(`loan approved`);
//     }
//   }

// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1);

// acc1.deposite(1200);
// acc1.withdraw(135);
// acc1.requestLoan(1000);
// acc1.approveLoan(1000);
// console.log(acc1.pin);
// console.log(acc1);

//----------------------------------------------------//
// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;

//     protected property
//     this._pin = pin;
//     this._movements = [];
//     this.local = navigator.language;
//     console.log(`Thanks for opening an account, ${this.owner}`);
//   }
//   getMovements() {
//     return this._movements;
//   }
//   deposite(value) {
//     this._movements.push(value);
//   }

//   withdraw(value) {
//     this._movements.push(-value);
//   }

//   _approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposite(val)
//       console.log(`loan approved`);
//     }
//   }

// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1.getMovements());
// console.log(acc1);

//-------------------------------------------------//
// class Account {
//   //(1) public property
//   local = navigator.language;

//   //(2) private property
//   #movements = [];
//   #pin;
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;

//     // protected property
//     this.#pin = pin;
//     // this._movements = [];
//     // this.local = navigator.language;
//     console.log(`Thanks for opening an account, ${this.owner}`);
//   }
//   //(3) public method
//   getMovements() {
//     return this.#movements;
//   }
//   deposite(value) {
//     this.#movements.push(value);
//     return this;
//   }

//   withdraw(value) {
//     this.#movements.push(-value);
//     return this;
//   }

//   #approveLoan(val) {
//     return true;
//   }

//   static helper() {

//   }
//   requestLoan(val) {
//     if (this.#approveLoan(val)) {
//       this.deposite(val)
//       console.log(`loan approved`);
//       return this;
//     }
//   }

// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1.withdraw(1000);
// acc1.withdraw(2000);
// console.log(acc1.getMovements());
// console.log(acc1);
// acc1.deposite(1000).deposite(2000).withdraw(2300);
// console.log(acc1);
// // console.log(acc1.#movements);
// // console.log(acc1.#pin);


/* ------------------------------------------------ */
// Inheritance Between "Classes": Constructor Functions
const Parent = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  Parent.prototype.calcAge = function () {
    console.log(2022 - this.birthYear);
  };
};
const Child = function (firstName, birthYear, course) {
  Parent.call(this, firstName, birthYear);
  this.course = course;
};
Child.prototype = Object.create(Parent.prototype);

Child.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}


const mike = new Child('mike', 2021, 'CS');
console.log(mike);
mike.introduce();
mike.calcAge();
console.log(mike.__proto__);
console.log(Child.prototype);
console.log(Parent.prototype);

/------------------------------------------------/;
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge = function () {
    console.log(2022 - this.birthYear);
  };
}
class StudentCl extends PersonCl {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear);
    this.course = course;
  }
  introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  };

}
const moaz = new StudentCl('Moaz', 2001, 'CS');
console.log(moaz);
moaz.introduce();
moaz.calcAge();
console.log(PersonCl.prototype);
console.log(StudentCl.prototype === PersonCl.prototype);
console.log(StudentCl.prototype === moaz.__proto__);

/-----------------------------------------------/;
const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

const essam = Object.create(PersonProto);
essam.init('moaz', 2001);
console.log(essam);


const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
}
const mohamed = Object.create(StudentProto);
mohamed.init('mohamed', 1999, 'CS');
console.log(mohamed);

/---------------------------------------/;
class Account {
  // public
  local = navigator.language;

  // private
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for openning an account ,${this.owner}`);
  }
  deposite(value) {
    this.#movements.push(value);
  }

  withdraw(value) {
    this.#movements.push(-value);
  }


  requestLoan(value) {
    if (this.#approveLoan(value)) {
      this.deposite(value)
      console.log(`loan approved`);
    }
  }

  // private method
  #approveLoan(value) {
    return true;
  }

}

const acc1 = new Account('Moaz Ashraf', 'EUR', 1111);
// acc1.movements.push(1000);
// acc1.movements.push(-1000);
acc1.withdraw(1200);
acc1.deposite(1000);
acc1.requestLoan(1000);
console.log(acc1);
/----------------------------------------------/;
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
}
class Student extends Person {
  university = 'BFCAI';
  #studyHourse = 0;
  static numSubjects = 10;
  #course;

  constructor(fullName, birthYear, startYear, course) {
    super(fullName, birthYear);

    this.startYear = startYear;

    this.#course = course;
  }

  introduce() {
    console.log(`I study ${this.#course} at ${this.university}`);
  }

  study(h) {
    console.log(this.#makeCoffe());
    this.#studyHourse += h;
  }

  #makeCoffe() {
    return `Here is a coffe for you ☕`;
  }
  get testScore() {
    return this._testScore;
  }
  set testScore(score) {
    this._testScore = score <= 20 ? score : 0
  }

  static printCurriculm() {
    console.log(`There are ${this.numSubjects} subjects`);
  }
}
const student = new Student('Jonas', 2020, 2022, 'medicinw');
console.log(student);
student.introduce();
student.study();
student.testScore = 20;
console.log(student.testScore);

/------------------------------------------/;
