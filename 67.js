// 민규의 악수
const input = 59;

function solution(input) {
  let input_copy = input;
  let people = 1;
  while (input_copy > 0) {
    input_copy -= people;
    people += 1;
  }
  withoutMK = 0;
  for (let j = 1; j < i - 1; j++) {
    withoutMK += j;
  }
  return [i, input - withoutMK]; // 사람의 수, 민규가 악수한 횟수
}

console.log(solution(input));
