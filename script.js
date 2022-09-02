'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Moaz Ashraf',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2,
  pin: 1111,

  movementsDates: [
    '2022-09-02T21:31:17.178Z',
    '2022-09-01T07:42:02.383Z',
    '2022-09-02T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-pt', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z', //toISOString()
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2022-08-31T14:43:26.374Z',
    '2022-08-30T18:49:59.371Z',
    '2022-08-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];
/////////////////////////////////////////////////
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



/////////////////////////////////////////////////
// Functions
const formatMovmentDate = function (date, locale) {
  const calcPassDays = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 24 * 60 * 60));
  const passDay = calcPassDays(date, new Date());
  if (passDay === 0) return 'TODAY';
  if (passDay === 1) return 'YESTERDAY'
  if (passDay <= 7) return `${passDay} DAY AGO`
  else {
    // const year = String(date.getFullYear());
    // const month = String(date.getMonth() + 1).padStart(2, 0);
    // const day = String(date.getDate()).padStart(2, 0);
    // return (`${date.getFullYear()}/${month}/${day}`);
    return new Intl.DateTimeFormat(locale).format(date);
  }
}

const formatCur = function (value, acc, locale) {
  const format = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: acc.currency
  }).format(value);

  return format;
}
// Computing Usernames using map
const creatUserName = function (accounts) {
  accounts.map(account => account.userName = account.owner.toLowerCase().split(" ").map(arr => arr[0]).join(""));

}
creatUserName(accounts);

// Creating dom element
const displayMovements = function (account, sort = false) {
  containerMovements.innerHTML = " ";
  const movs = sort ? account.movements.sort((a, b) => a - b) : account.movements;
  movs.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";

    // display date
    const date = new Date(account.movementsDates[i]);
    const displayDateAndTime = formatMovmentDate(date, account.locale);
    // formt Numbers
    const formatNumbers = formatCur
      (mov, account, account.locale);
    console.log(formatNumbers);

    const html = ` 
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">${displayDateAndTime}</div>

    <div class="movements__value">${formatNumbers}</div>
    </div>
 `;
    containerMovements.insertAdjacentHTML("afterbegin", html)
  });

}

// display balance
const displayBalance = function (account) {
  account.balance = account.movements.reduce((acc, curr) =>
    acc + curr, 0);
  labelBalance.textContent = `${formatCur
    (account.balance, account, account.locale)}`;

};

// in / out and interset
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, cur) => acc + cur, 0);
  const outcomes = acc.movements.filter(mov => mov < 0).reduce((acc, cur) => acc + cur, 0);
  const interest = acc.movements.filter(mov => mov > 0).map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumIn.textContent = `${formatCur
    (Math.trunc(incomes), acc, acc.locale)}`;
  labelSumOut.textContent = `${formatCur
    (Math.abs(Math.trunc(outcomes)), acc, acc.locale)}`;
  labelSumInterest.textContent = `${formatCur
    (Math.trunc(interest), acc, acc.locale)}`;


}

const updateUI = function (acc) {
  // display movement
  displayMovements(acc);

  // display balance
  displayBalance(acc);

  // display summary
  calcDisplaySummary(acc);
}

const startLogOutTimer = function () {

  const tick = () => {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = (`${min}:${sec}`);
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = "Log in to get started";
      containerApp.style.opacity = 0;

    }
    time--;
  }
  let time = 120;
  tick();
  const timer = setInterval(tick, 1000);
  return timer;

}
///////////////////////////////////////
// Event handlers

let currentAccount, timer;

//  implementing Login
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value);

  if (currentAccount?.pin === +inputLoginPin.value) {

    // display UI / message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]} !`
    containerApp.style.opacity = 100;

    // display date and time
    // const date = new Date();
    // const month = String(date.getMonth() + 1).padStart(2, 0);
    // const day = String(date.getDate()).padStart(2, 0);
    // const hour = String(date.getHours()).padStart(2, 0);
    // const min = String(date.getMinutes()).padStart(2, 0);
    // const displayDateAndTime = (`${ date.getFullYear() } /${month}/${ day }, ${ hour }:${ min } `);
    // labelDate.textContent = displayDateAndTime;
    const now = new Date();
    const option = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    }

    const local = navigator.language;
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, option).format(now);
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // display timer
    if (timer) clearInterval(timer);

    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

//  transfer
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const recieverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value);

  const amount = +(inputTransferAmount.value);

  inputTransferTo.value = inputTransferAmount.value = '';

  if (amount > 0 &&
    recieverAcc &&
    currentAccount.userName !== recieverAcc.userName &&
    amount <= currentAccount.balance) {

    // Add negative movement to current user
    currentAccount.movements.push(-amount);

    // Add positive movement to recieverAcc
    recieverAcc.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    recieverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();

  }


});

//  Request loan 
btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const amount = +(inputLoanAmount.value);
  console.log(amount);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {

    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = "";
});

// close account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const user = inputCloseUsername.value;
  const pin = +(inputClosePin.value)
  if (currentAccount.userName === user && currentAccount.pin === pin) {
    const index = accounts.findIndex(
      acc => acc.pin === +inputClosePin.value
    );
    // delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;

    labelWelcome.textContent = `Log in to get started`;

  }
  inputCloseUsername.value = Number(inputClosePin.value) = "";



});

//  sort movements
let sorted = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
})
/////////////////////////////////////////////////
/////////////////////////////////////////////////

