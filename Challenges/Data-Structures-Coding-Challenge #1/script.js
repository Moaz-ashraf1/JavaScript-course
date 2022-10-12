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

const [player1, player2] = game.players;
console.log(player1, player2);

const [gk, ...fieldPlayers] = player1;
console.log(fieldPlayers);

const allPlayers = [...player1, ...player2];
console.log(allPlayers);

const players1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

function printGoals(...playersName) {
  for (let index = 0; index < playersName.length; index++) {}
}

// (6)
const {
  odds: { team1, x: draw, team2 },
} = game;
team1 > team2 && console.log("team 1 is more likely to wins");
team1 < team2 && console.log("team 2 is more likely to wins");
// (7)
function printGoals(...playerName) {
  console.log(...playerName);
  console.log(`${playerName.length} goals were scored`);
}

printGoals(...game.scored);
