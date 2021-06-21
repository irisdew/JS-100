// 별 찍기

// 내 답
const input = 5;

function stars(input) {
  for (let i = 1; i <= input; i++) {
    const blank = Array(input - i + 1).join(" ");
    const star = Array(i * 2).join("*");
    console.log(blank, star);
  }
}

stars(5);

// 정답
const n = prompt("숫자를 입력하세요.");
let tree = "";

for (let i = 1; i <= n; i++) {
  let star = "";
  for (let j = 1; j <= n - i; j++) {
    star += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    star += "*";
  }
  tree += star + "\n";
}

console.log(tree);
