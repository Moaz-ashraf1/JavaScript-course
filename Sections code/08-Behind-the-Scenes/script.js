'use strict';
/*

const calcAge = function (birthday) {
  console.log(2037 - birthday);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthday => {
  console.log(2037 - birthday);
  console.log(this);
};
calcAgeArrow(200);

const moaz = {
  year: 2001,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};

var firstName = 'moaz';
const moaz = {
  firstName: 'Moaz',
  year: 2000,
  greet: () => console.log(`hey ${this.firstName}`),
};
moaz.greet();


const moaz = {
  year: 2001,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);

    const isM = function () {
      console.log(this);
      console.log(this.year);
    };
  },
};

moaz.calcAge();
*/

const arr = () => {
  return this;
};
