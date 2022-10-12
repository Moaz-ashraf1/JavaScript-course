const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1- Loop over the game.scored array and print each player name to the console,long with the goal number (Example: "Goal 1: Lewandowski"
for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal}: ${player}`);
}

// 2- Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember
let average = 0;
for (const value of Object.values(game.odds)) {
  average += value;
}
console.log(`average of odd is ${average / Object.values(game.odds).length}`);

// 3- Print the 3 odds to the console, but in a nice formatted way
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

//4. Bonus:

const scores = {};
