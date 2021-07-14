// 10진수 -> 2진수
function binary(n) {
  return +n.toString(2);
}

console.log(binary(8));

bin_eight = binary(8);
console.log(parseInt(bin_eight, 2));

// 10진수를 진수 변환할때는 Number객체의 내장 함수인 toString()을 사용한다.
// 10진수 외의 다른 진수를 10진수로 변환할때는 전역 함수인 parseInt()을 사용한다.

// 다른 방법
let a = prompt("10진수를 입력해주세요.");
let b = [];
let result = "";

while (a) {
  b.push(a % 2);
  a = parseInt(a / 2, 10);
}
b.reverse();

b.forEach((n) => {
  result += n;
});

console.log(result);
