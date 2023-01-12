function main() {
  let data = read_file("text.text");
  let parsed_data = parse_input(data);
  console.log(puzzle1(parsed_data));
}

function read_file(filename) {
  const fs = require("fs");
  try {
    return fs.readFileSync(filename, "utf8");
  } catch (err) {
    console.log("Error reading file");
    process.exit(1);
  }
}

function parse_input(input) {
  return input.split("\r\n");
}

function puzzle1(input) {
  let total = 0;
  for (let index = 0; index < input.length; index++) {
    let element = input[index].split("").reverse();
    let hoch_num = 1;
    let sum = 0;
    for (let i = 0; i < element.length; i++) {
      if (element[i] == "=") {
        sum = sum + hoch_num * -2;
      } else if (element[i] == "-") {
        sum = sum + hoch_num * -1;
      } else {
        sum = sum + hoch_num * parseInt(element[i]);
      }
      hoch_num = hoch_num * 5;
    }
    total += sum;
  }

  let divisible = total;
  let rest = [];
  while (divisible > 0) {
    rest.push(divisible % 5);
    divisible = divisible - (divisible % 5);
    divisible = divisible / 5;
  }
  let answer_in_snafu = [];
  for (let index = 0; index < rest.length; index++) {
    const element = rest[index];
    if (2 >= element) {
      answer_in_snafu.push(element);
    } else if (element == 3) {
      rest[index + 1] = rest[index + 1] + 1;
      answer_in_snafu.push("=");
    } else if (element == 4) {
      rest[index + 1] = rest[index + 1] + 1;
      answer_in_snafu.push("-");
    } else if (element == 5) {
      rest[index + 1] = rest[index + 1] + 1;
      answer_in_snafu.push(0);
    }
  }

  return answer_in_snafu.reverse().join("");
}
if (require.main === module) {
  main();
}
