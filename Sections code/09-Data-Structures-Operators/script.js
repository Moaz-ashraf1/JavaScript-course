// destructuring array
'use strict';
/*const arr = [1, 2, 3, 4, 5];
const [x, y, z] = arr;
console.log(x, y, z);

/--------------------------------------------------/;
const resturant = {
  name: 'moaz',
  locationn: 'benha',
  menu: ['بيتزا', 'حواوشي', 'كفته', 'حمام '],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const [first, second, third] = resturant.menu;
console.log(first, second, third);
/--------------------------------------------------/;
//  ناخد الاول ونعدي التاني وناخد التالت
let [fir, , sec] = resturant.menu;
console.log(fir, sec);

/--------------------------------------------------/;
// نبدل مكان بعض
[fir, sec] = [sec, fir];
console.log(fir, sec);

/--------------------------------------------------/;
// Object destruction

const { name, locationn, menu } = resturant;
console.log(locationn);

/--------------------------------------------------/;
// عاوز اغير الاسماء
const {
  name: resturantName,
  locationn: resturantLocation,
  menu: resturantMenu,
} = resturant;

console.log(resturantName);

/--------------------------------------------------/;
//default value
const { tele = [] } = resturant;

/-------------------------------------------------/;

// mutating variables
let a = 111;
let b = 999;
let c = 201;
const obj = { a: 120, b: 130, c: 200 };
({ a, b } = obj);
console.log(a, b, c);

/-----------------------------------------------/;

// nested object
const {
  fri: { open: o = 10, close: h = 20 },
} = resturant.openingHours;

/------------------------------------------------/;
// spread operator(...)
const arrOfNum = [7, 8, 9];
console.log(...arrOfNum);
const spreadArr = [...arrOfNum, 1, 2, 3, 4];
console.log(spreadArr);

// copy arr
const MainMenuCopy = [...spreadArr];
console.log(...MainMenuCopy);

//join 2 arr together
const menu2 = [...arrOfNum, ...spreadArr];
console.log(menu2);

// spread with string
const str = 'Moaz';
console.log(...str);
const arrStr = [...str];
console.log(arrStr);

// pass values into function

function orderPasta(ing1 = [], ing2 = [], ing3 = []) {
  console.log(`${ing1}  + ${ing2} + ${ing3}`);
}
const arrOfIng = ['لحمه', 'خضروات'];
orderPasta(...arrOfIng);

// object
const newObject = {
  lastName: 'moaz',
  ...resturant,
  client: {},
};
console.log(newObject);

// copy of object
const newCopy = { ...resturant };
console.log(newCopy);

/---------------------------------------------------/;
// rest pattern and parameters
// spread ------> unpack an array
// rest --------> pack an array

const [q, w, ...other] = [1, 2, 3, 4, 56];
console.log(other);

// rest with fun
const add = function (...number) {
  for (let index = 0; index < number.length; index++) {
    console.log(number[index]);
  }
};
add(2, 3);
add(1, 2, 3, 4, 5, 6, 7);
add(111, 1111, 222222, 333333, 4, 55);

const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};
/*
// OR Assignment Operator
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;
console.log(rest1.numGuests, rest2.numGuests);

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
console.log(rest1.numGuests, rest2.numGuests);

// Nullish Assignment Operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1.numGuests, rest2.numGuests);


// AND Assignment Operator
rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>';
console.log(rest1.owner, rest2.owner);

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1, rest2);

/---------------------------------------------------------------/;

// 111.The for-of loop

const menu = ['حمام', 'بط', 'حواوشي', 'كفته', 'فراخ مشويه'];
// for (const [item] of menu.entries()) console.log(`${item[0] + 1}: ${item[1]}`);

// de-structure it
for (const [i, item] of menu.entries()) console.log(`${i + 1}:${item}`);
/---------------------------------------------------------------/;

// 112.enhanced object literals
const weakdays = ['sat', 'sun', 'mon', 'thu', 'wed', 'fri'];

const openningHourse = {
  [weakdays[3]]: {
    open: 12,
    close: 22,
  },

  [weakdays[4]]: {
    open: 11,
    close: 23,
  },

  [weakdays[5]]: {
    open: 0,
    close: 24,
  },
};
const resturant = {
  name: 'moaz',
  locationn: 'benha',
  menu: ['بيتزا', 'حواوشي', 'كفته', 'حمام '],
  openningHourse,
  printMenu(menu) {
    console.log(menu);
  },
  do(a, b) {
    console.log(a, b);
  },
};
console.log(resturant);
console.log(resturant.openningHourse?.mon?.open);

for (const day of weakdays) {
  console.log(day);
  // optional chaining operator with nullish coalescing operator
  const open = resturant.openningHourse?.[day]?.open ?? 'closed';
  console.log(`on ${day}, we open at ${open}`);
}

/---------------------------------------------------------------/;
// method
resturant.do?.(0, 1) ?? 'method does not exist';

/---------------------------------------------------------------/;
const users = [
  { name: 'Moazz', email: 'moaza2298@gmail.com', password: 'moaza2298' },
];
const user = [];
console.log(users[0]?.name ?? 'user array empty');
// ?. test if the value on the left does exist

/---------------------------------------------------------------/;
// 114 . looping objects

console.log('/--------------------------------/');
// looping object key
for (const key of Object.keys(openningHourse)) {
  console.log(key);
}
/---------------------------------------------------------------/;

// looping object value

for (const value of Object.values(openningHourse)) {
  console.log(value);
}
/---------------------------------------------------------------/;

// looping object itself

for (const [key, { open, close }] of Object.entries(openningHourse)) {
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}

/---------------------------------------------------------------/;
// set

const setOfNum = new Set(['1', '2', '3', '4', '5', '6']);
const order = new Set(['moaz', 'mohamed', 'moaz', 'mohamed']);
console.log(order);

console.log(new Set('Moaz ashraf abdelghany'));

/---------------------------------------------------------------/;

//size of set
console.log(order.size);

// check if a certain element is in a set
console.log(order.has('Mona'));

// add new element in a set
order.add('Mona');
console.log(order);

// delete element
order.delete('moaz');
console.log(order);

// delete set
setOfNum.clear();
console.log(setOfNum);

// set are also iterables
for (const element of order) {
  console.log(element);
}

//set --> array
console.log([...order]);
/---------------------------------------------------------------/;
// MAP

const rest = new Map();

console.log(
  rest
    .set('1', 'Moaz')
    .set('2', 'Ahmed')
    .set('open', 12)
    .set('close', 24)
    .set(true, 'We are open :D')
    .set(false, 'We are closed :(')
);

console.log(rest.get('1'));

const time = 12;
console.log(rest.get(time >= rest.get('open') && time < rest.get('close')));

// checking if the map has a certain key
console.log(rest.has('1'));

// delete element from map
rest.delete('2');
console.log(rest);

//size property
console.log(rest.size);

// use an array as key
const arr = [1, 2];
rest.set(arr, 'Moaz');
console.log(rest.get(arr));

// remove all the element of map
rest.clear();
console.log(rest);



// convert object to map
//console.log(Object.entries(openingHours));
//const hoursMap = new Map(Object.entries(openingHours));
//console.log(hoursMap);

const question = new Map([
  ['quetsion', "what's the best programming language in the?"],
  [1, 'c'],
  [2, 'java'],
  [3, 'javaScript'],
  ['correct', 3],
  [true, 'Corret 😜'],
  [false, 'try again 😭'],
]);

console.log(question.get('quetsion'));
for (const [k, v] of question) {
  if (typeof k === 'number') {
    console.log(`Answer ${k}: ${v}`);
  }
}
const answer = 3;
answer === question.get('correct')
  ? console.log(question.get(true))
  : console.log(question.get(false));

// convert map to array
console.log(...question);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());


/---------------------------------------------------------------/;

// 121. working with string
const airline = 'TAP Air Egypt';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

// index method
const airline = 'TAP Air Egypt';

console.log(airline.indexOf('r'));
console.log(airline.indexOf('Egypt'));
console.log(airline.indexOf('port'));
console.log(airline.lastIndexOf('r'));

// slice method
console.log(airline.slice(4));
console.log(airline.slice(0, 4));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

// example

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat 😬');
  } else {
    console.log(`You are lucky 😎`);
  }
};
checkMiddleSeat('11B');

console.log(new String('MOAZ').slice(1));

/----------------------------------------------/;

// Fix capitalization in name
const fixedName = function (passengerName) {
  const passengerLower = passengerName.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  return passengerCorrect;
};

console.log(fixedName('mOaZ Ashraf'));
// comparing emails

const checkEmail = function (user_email) {
  const normalizedEmail = user_email.toLowerCase().trim();
  return normalizedEmail;
};

console.log(checkEmail(' helLO@Moaz.Io\n'));

// replacing
const priceUS = '288,97$';
const priceEg = priceUS.replace('$', 'LE').replace(',', '.');
console.log(priceEg);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans

const plan = 'Airbus A320neo';
console.log(plan.includes('A320'));
console.log(plan.includes('Boeing'));
console.log(plan.startsWith('Air'));

if (plan.startsWith('Airbus') && plan.endsWith('neo')) {
  console.log('part of the new Aribus family');
}

// practice exercies
const checkBaggage = function (item) {
  item = item.toLowerCase();
  if (item.includes('kinfe') || item.includes('gun')) {
    console.log('You are not allowed on board 🤐');
  } else {
    console.log('Welcome aboard! 🤭');
  }
};

checkBaggage('I have a labtop, some food and a packet KiNfe');

/----------------------------------------------/;

// split && join method
console.log('a+very+large+small'.split('+'));
console.log('Moaz Ashraf AbdElghany'.split(' '));

const [firstName, lastName] = 'Moaz Ashraf'.split(' ');
console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

/----------------------------------------------/;

// احول اول حرف من الكلمه الي حرف كابتل
const passenger = 'moaz ashraf abdelghany hessian';
const names = passenger.split(' ');
const capName = [];
for (const name of names) {
  capName.push(name[0].toUpperCase() + name.slice(1));
}
console.log(capName.join(' '));

/---------------------------------------------------/;
//  solution using replace
/*
const passenger = 'moaz ashraf abdelghany hessian';
const names = passenger.split(' ');
const arr = [];
for (const name of names) {
  arr.push(name.replace(name[0], name[0].toUpperCase()));
}
console.log(arr);


// padding

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log(message.padEnd(25, '$'));

const maskCreditCard = function (number) {
  const str = number + '';
  const creditNum = str
    .slice(str.length - 4, str.length) // slice (-4)
    .padStart(str.length, '*');
  console.log(creditNum);
};
maskCreditCard(4332563738301023);
*/

// String Methods Practice
const flights =
  '_Delayed_Departure;fao11111111111;txl2222222;11:25+_Arrival;bru312233233;fao33333333;11:45+_Delayed_Departure;fao11111111111;txl2222222;12:05+_Departure;fao11111111111;txl2222222;12:30';

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${from.slice(0, 3).toUpperCase()} to ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replaceAll(':', 'h')})`
    .trim()
    .padStart(46);
  console.log(output);
}
