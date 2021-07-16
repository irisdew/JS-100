// 최댓값 구하기
const input = prompt("숫자를 입력해주세요");

console.log(input.split(" "));

const maxNum = input.split(" ").sort((a, b) => b - a)[0];

console.log(maxNum);
