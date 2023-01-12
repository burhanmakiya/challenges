const alpha = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};

const fs = require("fs");

const data = fs.readFileSync("3.text", "utf8").split("\n");
data.pop();

let sum_of_the_alpha = 0;

for (let index = 0; index < data.length; index++) {
  const element = data[index];
  const elementLength = element.length;
  const midpoint = elementLength / 2;
  const firstHalf = element.slice(0, midpoint).split("");
  const secondHalf = element.slice(midpoint).split("");
  const repeatedElements = firstHalf.filter(function (element) {
    return secondHalf.includes(element);
  });
  const set = new Set(repeatedElements);
  const set_to_arr = [...set];
  sum_of_the_alpha += alpha[set_to_arr[0]];
}
console.log(sum_of_the_alpha);
