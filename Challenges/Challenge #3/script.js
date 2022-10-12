const dolphinsScore = (97 + 112 + 100) / 3;
const koalsScore = (109 + 95 + 50) / 3;

console.log(dolphinsScore, koalsScore);

if (dolphinsScore > koalsScore) {
  console.log("Dolphins win the trophy🥇");
} else if (dolphinsScore < koalsScore) {
  console.log("koals win the trophy🥇");
} else {
  console.log("Both win the trophy!");
}

// BOUNS
if (dolphinsScore > koalsScore && dolphinsScore >= 100) {
  console.log("Dolphins win the trophy🥇");
} else if (dolphinsScore < koalsScore && koalsScore >= 100) {
  console.log("koals win the trophy🥇");
} else if (
  dolphinsScore === koalsScore &&
  dolphinsScore >= 100 &&
  koalsScore >= 100
) {
  console.log("Both win the trophy!");
}
