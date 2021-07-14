// 무슨 요일?
function day(a, b) {
  const days = ["TUE", "WED", "THU", "FRI", "SAT", "SUN", "MON"];
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  passed = month.slice(0, a - 1).reduce((a, b) => (a += b), 0) + b;
  //   console.log(passed);
  return days[passed % 7];
}

console.log(day(5, 24));
console.log(day(1, 1));

// Date 함수 이용
function solution(a, b) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const x = new Date(`2020-${a}-${b}`);
  return days[x.getDay()];
}

console.log(solution(5, 24));
console.log(solution(1, 1));
