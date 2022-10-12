'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// (1) Creating dom element
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;


  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// (2) Computing Usernames using map
const creatUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(a => a[0])
      .join('');
  });
};
creatUserName(accounts);
// (3) display balance
const displayBalance = function (account) {
  account.balance = account.movements.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
  labelBalance.textContent = `${account.balance} EUR`;
};
// (4) in / out and interset
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumIn.textContent = `${incomes}€`;
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;
  labelSumInterest.textContent = `${interest}€`;
};

// (5) implementing Login
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display UI / message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]
      }`;

    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // display movement
    displayMovements(currentAccount.movements);

    // display balance
    displayBalance(currentAccount);

    // display summary
    calcDisplaySummary(currentAccount);
  }
});

// (6) transfer
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const recieverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );
  const amount = Number(inputTransferAmount.value);

  inputTransferTo.value = inputTransferAmount.value = '';

  if (
    amount > 0 &&
    recieverAcc &&
    currentAccount.userName !== recieverAcc.userName &&
    amount <= currentAccount.balance
  ) {
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);

    // display movement
    displayMovements(currentAccount.movements);

    // display balance
    displayBalance(currentAccount);

    // display summary
    calcDisplaySummary(currentAccount);
  }
});

// (7) Request loan 
btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);

    // update UI

    // display movement
    displayMovements(currentAccount.movements);

    // display balance
    displayBalance(currentAccount);

    // display summary
    calcDisplaySummary(currentAccount);

    inputLoanAmount.value = "";

  }
})

// (8) close account
btnClose.addEventListener('click', e => {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // find index of account
    const index = accounts.findIndex(
      acc => acc.pin === Number(inputClosePin.value)
    );
    // delete account
    accounts.splice(index, 1);


    // log user out 
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = Number(inputClosePin.value) = "";


});

// (9) sort movements
let sorted = false;
btnSort.addEventListener('click', (e) => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// // MAP

// // const movementsUSD = movements.map(function (mov) {
// //   return mov * 1.1;
// // });

// const movementsUSD = movements.map(mov => mov * 1.1);

// // console.log(movementsUSD);

// // const movementsUSD = [];
// // for (const mov of movements) {
// //   movementsUSD.push(mov * 1.1);
// // }
// // console.log(movementsUSD);

// const movementsDescription = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'Withdrew'} ${Math.abs(
//       mov
//     )}`
// );

// console.log(movementsDescription);

// // Filter

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// // using for of

// const depositFor = [];
// for (const mov of movements) {
//   if (mov > 0) depositFor.push(mov);
// }
// console.log(depositFor);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// // reduce

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   return acc + cur;
// }, 0);
// console.log(balance);

// const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;

// console.log(balance2);

// // Maximum value
// const maximum = movements.reduce(function (ass, cur) {
//   return ass > cur ? ass : cur;
// }, movements[0]);
// console.log(maximum);

// // Minimum value

// const minimum = movements.reduce(function (ass, cur) {
//   return ass < cur ? ass : cur;
// }, movements[0]);
// console.log(minimum);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const number = movements.find(num => num < 0);
// console.log(number);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// // for of
// let account = {};
// for (const acc of accounts) {
//   if (acc.owner === 'Jessica Davis') {
//     account = acc;
//   }
// }
// console.log(account);

// // fill method
// const x = new Array(7);
// x.fill(1, 3, 7);
// console.log(x);

// const y = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log();

// // use Array.form() with node list


// labelBalance.addEventListener("click", function () {
//   const movementUI = Array.from(document.querySelectorAll('.movements__value'));
//   console.log(movementUI.map((el => el.textContent.replace('€', ''))));
// })

// Array Practice

// // 1.
// const bankDepositSum = accounts.flatMap(acc => acc.movements).reduce((sum, curr) => sum + curr, 0);
// console.log(bankDepositSum);



// //2. 

// const numOfDeposit = accounts.flatMap(acc => acc.movements).filter(value => value > 1000).length;
// console.log(numOfDeposit);

// const numOfDeposit = accounts.flatMap(acc => acc.movements).
//   reduce((count, curr) => curr > 1000 ? count + 1 : count, 0);
// console.log(numOfDeposit);


// // 3.
// const sums = accounts.flatMap((acc) => acc.movements).reduce((sum, curr) => {
//   curr > 0 ? (sum.deposit += curr) : (sum.withdrawals += curr);
//   return sum;
// }
//   , { deposit: 0, withdrawals: 0 });
// const { deposit, withdrawals } = accounts.flatMap((acc) => acc.movements).reduce((sum, curr) => {
//   // curr > 0 ? (sum.deposit += curr) : (sum.withdrawals += curr);
//   sum[curr > 0 ? 'deposit' : 'withdrawals'] += curr;
//   return sum;
// }
//   , { deposit: 0, withdrawals: 0 });
// console.log(deposit);


const convertTitleCase = function (str) {
  const capitzalize = word => word[0].toUpperCase() + word.slice(1);
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = str.toLowerCase().split(" ").map(word => exceptions.includes(word) ? word : capitzalize(word)).join(" ");
  return capitzalize(titleCase);
}

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));