function avg(input) {
  const scores = input.split(" ").map((x) => parseInt(x));
  return scores.reduce((acc, cur) => (acc += cur)) / scores.length;
}
console.log(avg("20 30 40"));
