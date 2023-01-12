const fs = require("fs");

const data = fs.readFileSync("text.text", "utf8").split("\n");
data.pop();

let stacks = [
  ["Q", "S", "W", "C", "Z", "V", "F", "T"],
  ["Q", "R", "B"],
  ["B", "Z", "T", "Q", "P", "M", "S"],
  ["D", "V", "F", "R", "Q", "H"],
  ["J", "G", "L", "D", "B", "S", "T", "P"],
  ["W", "R", "T", "Z"],
  ["H", "Q", "M", "N", "S", "F", "R", "J"],
  ["R", "N", "F", "H", "W"],
  ["J", "Z", "T", "Q", "P", "R", "B"],
];

for (let index = 0; index < data.length; index++) {
  const element = data[index];
  const numbers = element.match(/\d+/g);
  const move = numbers[0];
  const from = (numbers[1])-1;
  const to = (numbers[2])-1;
  const transfer_list = stacks[from].splice(-move, move);
  stacks[to].push(...transfer_list);
}


let newWord = "";
for (let index = 0; index < stacks.length; index++) {
  const element = stacks[index];
  newWord = newWord + element[element.length - 1];
}
console.log(newWord);

