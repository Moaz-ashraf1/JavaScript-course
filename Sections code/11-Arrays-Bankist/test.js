var maximumWealth = function (accounts) {
  const array = accounts.map(element => element.reduce((a, curr) => a + curr, 0));
  const maximum = array.reduce((a, curr) => a > curr ? a : curr, array[0]);
  return maximum;
};
console.log(maximumWealth(accounts = [[2, 8, 7], [7, 1, 3], [1, 9, 5]]));