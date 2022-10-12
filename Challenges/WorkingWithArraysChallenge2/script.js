const Data1 = [5, 2, 4, 1, 15, 8, 3];
const Data2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map(function (age, i) {
//     return age <= 2 ? age * 2 : 16 + age * 4;
//   });
//   const adults = humanAge.filter(function (age) {
//     return age >= 18;
//   });
//   const avg =
//     adults.reduce(function (acc, cur) {
//       console.log(acc);

//       return cur + acc;
//     }, 0) / adults.length;
//   return avg;
// };

// console.log(calcAverageHumanAge(Data1));

calcAverageHumanAge = (ages) => {
  const avg = ages
    .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  return avg;
};
console.log(calcAverageHumanAge(Data1));
