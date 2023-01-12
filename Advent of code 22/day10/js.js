if (require.main === module) {
  main();
}

function main() {
  const data = input_text("/home/cs/Desktop/Satr/AOC/22/day10/text.text");
  const edited_input = input_editing(data);
  task1(edited_input);
  //puzzle2(parsed_data);
}

function input_text(filename) {
  const fs = require("fs");
  try {
    return fs.readFileSync(filename, "utf8");
  } catch (err) {
    console.error(err);
  }
}

function input_editing(input) {
  let splitted_input = input.split(/[\s\n]+/);
  splitted_input.pop();
  return splitted_input;
}

function task1(params) {
  let cycles = [20, 60, 100, 140, 180, 220];
  let x = 1;
  let cycle = 0;
  let signal_strength = 0;
  //7777777777777777777777777777777777777777777777777777777777
  while (cycles.length >= 1) {
    if (cycle == cycles[0]) {
      signal_strength += cycle * x;
      cycles.shift();
    }
    if (!Number.isNaN(parseInt(params[cycle - 1]))) {
      x += parseInt(params[cycle - 1]);
    }
    cycle++;
  }
  console.log(signal_strength);
}
