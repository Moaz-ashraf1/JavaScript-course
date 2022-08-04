//Logic Code

// 10. Values and Variables

/*
let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN!");

40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

// section 3
// variable
// box(Variable) = value
let firstName = "Moaz";

console.log(firstName);

// Variable name conventions
let PI = 3.1415;
let person = "MOAZ";

let myFirstJop = "programmer";
let myCurrentJop = "teacher";

let job1 = "programer";
let jop2 = "teacher";

*/

// 12. DATA TYPE

/*
let JavaScriptIsFun = true;
console.log(JavaScriptIsFun);

console.log(typeof JavaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Moaz");

JavaScriptIsFun = "YES!";
console.log(JavaScriptIsFun);

let firstName;
console.log(firstName);
console.log(typeof firstName);

firstName = "Moaz";
console.log(firstName);
console.log(typeof firstName);
*/

// 13. let, const and var

/*let age = 20;
age = 21;

// immutable
const birthYear = 2001;

// لا تتغير القيمه
// birthYear = 2002;

// const declarations must be initialized
// const name;

var job = "programmer";
jop = "teacher";

lastName = "Ashraf";
console.log(lastName);
*/

// 14. Basic operators

/*  
// Math operator
const now = "2022";
const ageMoaz = now - 2001;
const ageMama = now - 1984;

console.log(ageMoaz, ageMama);
console.log(ageMoaz / 2, ageMama * 2);
console.log(ageMoaz ** 3);

const firstName = "Moaz";
const lastName = "Ashraf";
console.log(firstName + " " + lastName);

//Assignment operator
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x++;
console.log(x);

//Comparison operators
console.log(ageMoaz > ageMama);
console.log(ageMama <= 18);
console.log(ageMoaz != 23);

const isFullAge = ageMoaz > 18;
*/

// 15. operator precedence

/*
const now = 2022;
const ageMoaz = now - 1919;
const ageMama = now - 2010;

console.log(now - 1919 > now - 2018);

let x, y;
x = y = 25 - 10 - 10;
console.log(x, y);

const averageAge = (ageMama + ageMoaz) / 2;
console.log(averageAge);
*/

//17. String and Template

/*
const firstName = "Moaz";
const jop = "teacher";
const birthYear = 2001;
const year = 2022;

const moaz =
  "I'm " + firstName + " a " + (year - birthYear) + " year old " + jop + " !";
console.log(moaz);

const newMoaz = `I'm ${firstName} a ${year - birthYear} year old ${jop} ! `;
console.log(newMoaz);

console.log(`string with \n\
multiple \n\
lines`);

console.log(`string 
multiple
lines`);
*/
//Taking Decisions:if / else Statements

/*const age = 10;
if (age >= 18) {
  console.log("Moaz can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Moaz is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2001;

let century;
if (birthYear > 2000) {
  century = 21;
} else {
  century = 20;
}
console.log(century);*/

// type conversion
/*const inputYear = "1919";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("MOAZ"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log("I am " + 23 + " years old");
console.log("I am " + "23" + " years old");
console.log("I am " + String(23) + " years old");

console.log("40" + "50" + "1");
console.log("40" - "50" + "1");
console.log("40" - "50" - "1");
console.log("40" * "50" * "1");

// Truethy anf falsy values

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let firstName;
if (firstName) {
  console.log("YAY! firstName is defined");
} else {
  console.log("firstName is UNDEFINED");
}

// === VS ==
const favourite = Number(prompt("What's your favourit number?"));
console.log(favourite);

if (favourite == 20) {
  console.log("Cool! 20 is an amazing number!");
}

if (favourite === 20) {
  console.log("Cool! 20 is an amazing number!");
}
*/
// 24. Logical Operators

const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

if (hasDriverLicense && hasGoodVision) {
  console.log("Moaz is able to drive!");
} else {
  console.log("Someone else should drive...");
}

const isTired = true;

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Moaz is able to drive!");
} else {
  console.log("Someone else should drive...");
}

// 26. The switch Statement

const day = "monday";

if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "thesday") {
  console.log("write code example");
} else {
  console.log("Record videos");
}

//28. The Conditional (Ternary) Operator

const age = 10;
const drink = age >= 18 ? "pepsi 🍾" : "water 🌊";
console.log(drink);

let drink2;
if (age > 18) {
  drink2 = "pepsi 🍾";
} else {
  drink2 = "water 🌊";
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "pepsi 🍾" : "water 🌊"}`);
