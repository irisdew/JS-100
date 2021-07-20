// 줄임말
input = "복잡한 세상 편하게 살자";

function term(input) {
  return input
    .split(" ")
    .map((x) => x[0])
    .join("");
}

console.log(term(input));
