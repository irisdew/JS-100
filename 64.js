// 이상한 엘리베이터 ★

// 거스름돈 문제처럼 7 -> 3 순서로 큰수로 나누면 3의 배수인 경우 가능한 무게인데도 -1 출력 될 수 있음
// while문 활용
let N = parseInt(prompt("정량을 입력하세요"), 10);
let result = 0;

while (true) {
  if (N % 7 === 0) {
    result += parseInt(N / 7, 10);
    console.log(result);
    break;
  }
  N -= 3;
  result += 1;
  if (N < 0) {
    console.log(-1);
    break;
  }
}
