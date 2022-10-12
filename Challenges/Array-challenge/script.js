function calcTip(billValue) {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15;
  } else return billValue * 0.2;
}

const bill = [125, 555, 44, 600];
bill.push(280);
bill.unshift(50);

const tip = [
  calcTip(bill[0]),
  calcTip(bill[1]),
  calcTip(bill[2]),
  calcTip(bill[3]),
  calcTip(bill[4]),
  calcTip(bill[5]),
];
const total = [bill[0] + tip[0], bill[1] + tip[1], bill[2] + bill[2]];

console.log(total);
