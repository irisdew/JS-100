// 콤마 찍기, 회계 숫자

function solution(n) {
  const tmp = [];
  String(n)
    .split("")
    .reverse()
    .forEach((el, idx, array) => {
      tmp.push(el);
      if (idx !== array.length - 1 && idx % 3 == 2) {
        tmp.push(",");
      }
    });
  return tmp.reverse().join("");
}

console.log(solution(123456789));

// 내장함수 toLocaleString() 사용
const num = 123456789;
console.log(num.toLocaleString());

// 재귀함수 사용
function comma(s) {
  if (s.length <= 3) {
    return s;
  } else {
    return comma(s.slice(0, s.length - 3)) + "," + s.slice(s.length - 3);
  }
}

console.log(comma("" + num));
