// 대소문자 바꿔서 출력하기
function UpperLower(input) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i].toUpperCase()) {
      result += input[i].toLowerCase();
    } else {
      result += input[i].toUpperCase();
    }
  }
  return result;
}

console.log(UpperLower("AAABBBcccddd"));
