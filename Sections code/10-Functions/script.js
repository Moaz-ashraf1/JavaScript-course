'use strict';

/*
// 128 
const bookings = [];

const createBooking = function (
  flightNum = 'LH123',
  numPassenger = 100,
  price = 190 * numPassenger
) {
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', undefined, 1000);


// 129

const flight = 'LH234';
const Moaz = {
  name: 'Moaz ashraf',
  passport: 24739479284,
};

const checkIn = function (flighgtNum, Passenger) {
  (flighgtNum = 'LH999'), (Passenger.name = 'Mr.' + Passenger.name);
  if (Passenger.passport === 24739479284) {
    alert('checked in');
  } else {
    alert('wrong passport!');
  }
};

//Ctrl+K+C
// checkIn(flight, Moaz);
// console.log(flight);
// console.log(Moaz);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};
newPassport(Moaz);
checkIn(flight, Moaz);
console.log(Moaz);

// higher order fun

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

// low level of abstraction
const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

// high level of abstraction
const transformer = function (str, fu) {
  console.log(`original string: ${str}`);
  console.log(`Transformed string: ${fu(str)}`);
  console.log(`Transformed by: ${fu.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// Js use callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
// high5 ---> call back fun
// addEvent ---> higher order fun
['moaz', 'rahma', 'gana'].forEach(high5);


function greeting(name) {
  alert(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);


const great = function (greating) {
  return function (name) {
    console.log(`${greating} ${name}`);
  };
};

const greatHey = great('Hey');
greatHey('Moaz');
great('Hey')('Moaz');


let great = greating => name => console.log(`${greating} ${name} `);
great('السلام عليكم')('احمد');


const lufthanse = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flighgtNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight${this.iataCode}${flighgtNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flighgtNum}`, name });
  },
};

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EN',
  bookings: [],
};

const egypt = {
  airline: 'Egypt',
  iataCode: 'EN',
  bookings: [],
};
const book = lufthanse.book;
book.call(eurowings, '1234', 'Moaz');

//  call method
book.call(eurowings, 23, 'Sarah williams');
console.log(eurowings);

book.call(egypt, 22, 'محمد السيد ');
console.log(egypt);

// Apply method
const flight = [583, 'Moaz coper'];
book.apply(egypt, flight);

book.call(egypt, ...flight);

// bind method

const bookEw = book.bind(eurowings);
const bookEG = book.bind(egypt);
bookEG(20, 'Moaz');

const bookEw23 = book.bind(eurowings, 23);
bookEw23('jonas Schmedtmann');
bookEw23('marth cooper');

// event listener
lufthanse.planes = 300;
lufthanse.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// Let's make this consultation on something other than the element
document
  .querySelector('.buy')
  .addEventListener('click', lufthanse.buyPlane.bind(lufthanse));
/-----------------------------------------/;

const addTax = (rate, value) => (value = rate * value);
console.log(addTax(0.23, 200));
// need to make the rate a constant value
const addVat = addTax.bind(null, 0.23);
// addVat = value => value = value * 0.23;
console.log(addVat(200));

/-----------------------------------------------/;

const addVatChallenge = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVat2 = addVatChallenge(0.23);
console.log(addVat2(100));


(function () {
  console.log('This will never run again');
  // const isPrivate = 23;
})();

(() => console.log('This will never run again'))();

{
  const isPrivate = 23;
  var isNotPrivate = 46;
}
console.log(isNotPrivate);
console.log(isPrivate);


// CLOSURES

const secureBooking = function () {
  let PassengerCount = 0;

  return function () {
    PassengerCount++;
    console.log(`${PassengerCount} Passenger`);
  };
};
const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);


// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g(); 
f(); 
h();
f();


// Example 2

const boardPassenger = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with${perGroup} passengers`);
  }, wait * 100);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassenger(180, 3);
*/
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
