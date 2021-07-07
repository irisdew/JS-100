// 2-gram, 문자열에서 2개의 연속된 요소 출력
function twogram(input) {
  for (let i = 0; i < input.length - 1; i++) {
    console.log(`${input[i]} ${input[i + 1]}`);
  }
}

twogram("Javascript");
