function power(input) {
  const [a, b] = input.split(" ").map((x) => parseInt(x));
  return a ** b;
}

console.log(power("2 3"));
