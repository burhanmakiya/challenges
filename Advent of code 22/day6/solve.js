if (require.main === module) {
  main();
}

function main() {
  const data = read_file("text.text");
  const parsed_data = parse_input(data);
  puzzle1(parsed_data);
}

function read_file(filename) {
  const fs = require("fs");

  try {
    return fs.readFileSync(filename, "utf8");
  } catch (err) {
    console.error(err);
  }
}

function parse_input(input) {
  let splitted_input = input.split("");
  splitted_input.pop();
  return splitted_input;
}

function puzzle1(params) {
  let data = params;
  let char_list = [];
  let i = 0;

  while (char_list.length != 14) {
    let element = data[i];
    const index = char_list.indexOf(element);
    if (index !== -1) {
      char_list.splice(0, index + 1);
      char_list.push(element);
    } else {
      char_list.push(element);
    }
    i++;
  }
  console.table(i);
}
