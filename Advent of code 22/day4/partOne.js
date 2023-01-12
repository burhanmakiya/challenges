const fs = require("fs");

const data = fs.readFileSync("text.text", "utf8").split("\n");
data.pop();
let counter = 0;
for (let i = 0; i < data.length; i++) {
  const element = data[i].split(/[,:-]/);
  const num1 = parseInt(element[0]);
  const num2 = parseInt(element[1]);
  const num3 = parseInt(element[2]);
  const num4 = parseInt(element[3]);
  if ((num1 >= num3 && num2 <= num4) || (num3 >= num1 && num4 <= num2)) {
    counter++;
  }
}
console.log(counter);
