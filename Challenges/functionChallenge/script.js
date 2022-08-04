const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

const cheackWinner = (koalas, Dolphins) => {
  if (team1 >= 2 * team2) {
    console.log(`koalas win 🥇 (${koalas}. vs ${Dolphins})`);
  } else if (team2 >= 2 * team1) {
    console.log(`Dolphins win 🥇 (${Dolphins}. vs ${koalas})`);
  } else {
    console.log("No team wins... 😭");
  }
};

const team1 = calcAverage(85, 54, 41);
const team2 = calcAverage(23, 34, 27);
console.log(team1);
console.log(team2);
console.log(cheackWinner(team1, team2));
