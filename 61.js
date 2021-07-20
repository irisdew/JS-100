// 문자열 압축하기
const s = "aaabbbbcdddd";

function solution(s) {
  let answer = s[0];
  let count = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === s[i]) {
      count++;
    } else {
      answer = answer + count + s[i];
      count = 1;
    }
  }
  answer += count;
  return answer;
}

console.log(solution(s));
