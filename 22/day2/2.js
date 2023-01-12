const fs = require("fs");

const data = fs.readFileSync("2.text", "utf8").split("\n");
data.pop();

let countB = 0;
const shapesA = {
  A: 0,
  B: 1,
  C: 2,
};

const outcome_of_the_round = {
  draw: 3,
  won: 6,
};

for (let index = 0; index < data.length; index++) {
  const element = data[index].split(" ");
  if (element[1] === "Y") {
    countB += outcome_of_the_round.draw + 1 + shapesA[element[0]];
  } else if (element[1] === "X") {
    countB += ((shapesA[element[0]] + 2) % 3) + 1;
  } else {
    countB += ((shapesA[element[0]] + 1) % 3) + 1 + outcome_of_the_round.won;
  }

  // if (element[1] === "X") {
  //   countB += shapesB[element[1]] + 1 + outcome_of_the_round.draw;
  // } else if (element[1] === "Z") {
  //   countB += shapesB[element[1]] + 1 + outcome_of_the_round.won;
  // } else {
  //   countB += shapesB[element[1]] + 1;
  // }
}

console.log(countB);
