bills = [100, 300, 250, 340, 503, 6013, 598, 789, 1029, 435];

tips = [];
totals = [];

function calcTip(bills) {
  if (bills >= 50 && bills <= 300) {
    return bills * 0.15;
  } else return bills * 0.2;
}

for (let i = 0; i < bills.length; i++) {
  tips[i] = Math.trunc(calcTip(bills[i]));
  totals[i] = tips[i] + bills[i];
}

console.log(tips);
console.log(totals);

function calcAverage(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

arr = [10, 40, 30, 60, 33, 67, 98, 60, 120];
console.log(calcAverage(arr));
