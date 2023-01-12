if (require.main === module) {
  main();
}

function main() {
  const data = read_file("text.text");
  const parsed_data = parse_input(data);
  console.log(puzzle1(parsed_data));
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
  let splitted_input = input.split("\n");
  splitted_input.pop();
  return splitted_input;
}

function puzzle1(params) {
  let files = { "/root": 0 };
  let pwd = "/root";

  for (let index = 0; index < params.length; index++) {
    const element = params[index].split(" ");

    if (element[1] == "cd") {
      if (element[2] == "/") {
        //back to root
        pwd = "/root";
      } else if (element[2] == "..") {
        //back one level
        const pwdArr = pwd.split("/");
        pwdArr.pop(); //remove the last file from the pwd
        pwd = pwdArr.join("/"); //update the PWD
      } else {
        // add the file to the pwd
        pwd += "/" + element[2];
        files[pwd] = 0;
      }
      // if it is a size file
    } else if (!isNaN(parseInt(element[0]))) {
      let currentPath = pwd;
      let sum = 0;
      // to get the current path Length
      for (let i = 0; i < currentPath.length; i++) {
        if (currentPath[i] === "/") {
          sum++;
        }
      }
      for (let i = 0; i < sum; i++) {
        //to add the Size to all paths
        files[currentPath] = files[currentPath] + parseInt(element[0]);
        //to go back one file
        currentPath = currentPath.slice(0, currentPath.lastIndexOf("/"));
      }
    }
  }
  // to calculate under 100000
  let sum = 0;
  for (const prop in files) {
    if (files[prop] < 100000) {
      sum += files[prop];
    }
  }
  return sum;
}
