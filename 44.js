// 각 자리수의 합
function sumAll(n) {
  answer = 0;
  for (let i = 0; i < String(n).length; i++) {
    answer += +String(n)[i];
  }
  return answer;
}

console.log(sumAll(18234));
console.log(sumAll(3849));

// 다른 방법
let n = prompt("숫자를 입력하세요.");
let sum = 0;

while (n !== 0) {
  sum += n % 10;
  n = Math.floor(n / 10);
}

console.log(sum);
