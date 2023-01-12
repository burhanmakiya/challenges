function main() {
  let data = read_file("tex.text");
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
  const f_input = input.split("\r\n");
  const output = f_input.map((element) => element.split(",").map(Number));
  return output;
}

function puzzle1(input) {
  let grid = input;

  const gridSet = new Set();
  for (const element of grid) {
    gridSet.add(element.join(","));
  }

  let surfaceArea = 0;
  for (const element of grid) {
    const [x, y, z] = element;

    if (!gridSet.has(`${x + 1},${y},${z}`)) surfaceArea++;
    if (!gridSet.has(`${x - 1},${y},${z}`)) surfaceArea++;
    if (!gridSet.has(`${x},${y + 1},${z}`)) surfaceArea++;
    if (!gridSet.has(`${x},${y - 1},${z}`)) surfaceArea++;
    if (!gridSet.has(`${x},${y},${z + 1}`)) surfaceArea++;
    if (!gridSet.has(`${x},${y},${z - 1}`)) surfaceArea++;
  }

  return surfaceArea;
}
if (require.main === module) {
  main();
}
