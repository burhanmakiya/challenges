const fs = require("fs");
const data = fs.readFileSync("1.text", "utf8").split("\n");

let theSum = 0;
let arr = [];

for (let index = 0; index < data.length; index++) {
  const element = data[index];

  if (!isNaN(parseInt(element))) {
    theSum += parseInt(element);
  } else {
    arr.push(theSum);
    theSum = 0;
  }
}
arr.sort(function (a, b) {
  return b - a;
});

console.log(arr[0] + arr[1] + arr[2]);
