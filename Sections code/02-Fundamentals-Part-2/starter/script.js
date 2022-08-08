//32. Activating Strict Mode
"use strict";

/*let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log("I can drive :D");

// 33. Function
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} orangs`;
  return juice;
}

//console.log(fruitProcessor(1, 10));
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

function passOrNot(grade) {
  if (grade >= 100) return "pass";
  else return "Not Pass";
}
const result = passOrNot(100);
console.log(result);

// 34.Function Declarations vs. Expressions

// Function declaration
// can call function before defined it
const age1 = calcAge1(1990);
console.log(age1);

function calcAge1(birthday) {
  return 2022 - birthday;
}

// Function expression
const calcAge2 = function (birthday) {
  return 2022 - birthday;
};
console.log(calcAge2(2000));

// arrow function

const calcAge = (birthday) => 2022 - birthday;
const age2 = calcAge(10);
console.log(age2);

const yearUntilRetirement = (birthday, firstName) => {
  const age = 2022 - birthday;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearUntilRetirement(2001, "Moaz ashraf"));

// 36. Functions Calling Other Functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `juice with ${applePieces} apples and ${orangePieces} orangs`;
  return juice;
}

console.log(fruitProcessor(4, 5));

// review.....

const calcAgeForMen = function (birthday) {
  return 2022 - birthday;
};
function yearUntilRetirement(birthday, firstName) {
  const age = calcAgeForMen(birthday);
  const retirement = 60 - age;
  return `${firstName} retires in ${retirement} years`;
}

// expression function
const yearUntilRetirement = function (birthday, firstName) {
  const age = 2037 - birthday;
  const retirement = 60 - age;
  return `${firstName} retires in ${retirement} years`;
};
*/
// Array
/*
//const friend = ["Moaz", "Ahmed", "Mohamed"];
console.log(friend);

console.log(friend[0]);
console.log(friend[friend.length - 1]);

console.log(friend.length);

// Exercise

const calcAge = function (birthday) {
  return 2022 - birthday;
};

const years = new Array(2000, 2001, 2002);

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);

const age = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
console.log(age);

const friend = ["Moaz", "Ahmed", "Mohamed", "Mostafa"];

const pushh = friend.push("rahma");
console.log(friend);
console.log(pushh);

friend.unshift("Ashraf");
console.log(friend);

friend.pop();
console.log(friend);
const popped = friend.pop();
console.log(popped);

console.log(friend.indexOf("Moaz"));

console.log(friend.includes("Moaz"));
console.log(friend.includes("Ali"));


const moaz = {
  firstName: "Moaz",
  lastName: "Ashraf",
  age: 2022 - 2001,
  job: "software developer",
  friends: ["Moaz1", "Moaz2", "moaz3"],
};
moaz.location = "quesnai";
moaz["whatsApp"] = "01094977673";
console.log(moaz);

const nameKey = "Name";
// bracket notation
console.log(moaz["first" + nameKey]);

// dot notation
console.log(moaz.firstName);

/*const interstedIn = prompt(
  "what do you want to know bout Moaz? choose between firstName,  lastName, age, job and friends "
);
console.log(moaz[interstedIn] ? moaz[interstedIn] : "ادخل قيمه صحيحه");

console.log(
  `${moaz.firstName} has ${moaz.friends.length}, and his best friend is called ${moaz.friends[1]}`
);


// challenge 🤦‍♂️
const moaz = {
  firstName: "Moaz",
  lastName: "Ashraf",
  birthYear: 2001,
  job: "software developer",
  friends: ["Moaz", "Mama", "Baba", "grandFather"],
  hasDriverLicense: false,
  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSumarry: function () {
    this.summary = `${this.firstName} is a ${this.calcAge()} old ${this.job},${
      this.hasDriverLicense
        ? " and he has a driver's license"
        : " and no he has a driver's license"
    }`;
    return this.summary;
  },
};
console.log(moaz.calcAge());
console.log(moaz.age);
console.log(moaz.age);
console.log(moaz.age);
console.log(moaz.age);

console.log(moaz.getSumarry());

for (let i = 1; i <= 10; i++) {
  console.log(`Lifting weights repetition ${i} 🏋️‍♂️`);
}

const moaz = [
  1,
  "Ashraf",
  2022 - 2001,
  "SW Developer",
  ["Mohamed", "Mahmoud", "Mostafa"],
];
const typeOfElement = [];

for (let i = 0; i < moaz.length; i++) {
  console.log(moaz[i]);
  typeOfElement.push(typeof moaz[i]);
}

console.log(typeOfElement[2]);

const year = [1990, 2001, 2002, 2010, 2020];
const age = [];
for (let i = 0; i < year.length; i++) {
  age.push(2022 - year[i]);
}

console.log(age);


const moaz = [
  1,
  "Ashraf",
  2022 - 2001,
  "SW Developer",
  ["Mohamed", "Mahmoud", "Mostafa"],
];

for (let i = moaz.length - 1; i >= 0; i--) {
  console.log(moaz[i]);
}

for (let exercies = 1; exercies <= 3; exercies++) {
  console.log(`-------- Starting exercise ${exercies}`);
  for (let rep = 1; rep <= 5; rep++) {
    console.log(` Lifting weights repetition ${rep} 🏋️‍♂️`);
  }
}
*/

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
