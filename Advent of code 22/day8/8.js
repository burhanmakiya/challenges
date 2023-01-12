const fs = require("fs");
const data = fs.readFileSync("8.text", "utf8").split("\n");
data.pop();
///77777777777777777777777777777777777777777777777777777777777777///////////////
let main_array = [];
for (let index = 0; index < data.length; index++) {
  const element = data[index];
  const sE = element.split("");
  const numberList = sE.map((string) => Number(string));
  main_array.push(numberList);
}
///77777777777777777777777777777777777777777777777777777777777777///////////////
let visible_array = [];
for (let i = 0; i < 99; i++) {
  visible_array.push(Array.from({ length: 99 }, () => 0));
}
///77777777777777777777777777777777777777777777777777777777777777///////////////
for (let j = 0; j < main_array[0].length; j++) {
  let check = -1;
  for (let i = 0; i < main_array.length; i++) {
    if (main_array[i][j] > check) {
      visible_array[i][j] = 1;
      check = main_array[i][j];
    }
  }
}

// عامود مقلوب
for (let j = main_array[0].length - 1; j >= 0; j--) {
  let check = -1;
  for (let i = main_array.length - 1; i >= 0; i--) {
    if (main_array[i][j] > check) {
      visible_array[i][j] = 1;
      check = main_array[i][j];
    }
  }
}

// سطر
for (let i = 0; i < main_array.length; i++) {
  let check = -1;
  for (let j = 0; j < main_array[0].length; j++) {
    if (main_array[i][j] > check) {
      visible_array[i][j] = 1;
      check = main_array[i][j];
    }
  }
}
// سطر مقلوب
for (let i = 0; i < main_array.length; i++) {
  let check = -1;
  for (let j = main_array[0].length - 1; j >= 0; j--) {
    if (main_array[i][j] > check) {
      visible_array[i][j] = 1;
      check = main_array[i][j];
    }
  }
}

function sum_2D_array(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      sum += array[i][j];
    }
  }
  return sum;
}

console.log(sum_2D_array(visible_array));
