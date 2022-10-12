const markMass = 78;
const markHeight = 1.69;

const jounMass = 92;
const jounHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const jounBMI = jounMass / jounHeight ** 2;

console.log(markBMI);
console.log(jounBMI);

let markHigherBMI = markBMI > jounBMI;
console.log(markHigherBMI);

if (markBMI > jounBMI) {
  console.log(`Mark's BMI (${markBMI})is higher than Joun's (${jounBMI})!`);
} else {
  console.log(`Joun's BMI (${jounBMI})is higher than Mark's (${markBMI})!`);
}
