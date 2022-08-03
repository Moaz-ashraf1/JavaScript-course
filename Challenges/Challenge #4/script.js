const value = 275;
const tip = value >= 50 && value <= 200 ? value * 0.15 : value * 0.2;

console.log(
  `The value was ${value}, the tip was ${tip}, and the total value ${
    value + tip
  }`
);
