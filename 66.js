// 블럭탑 쌓기

// 내 정답
function block(arr, rule) {
  return arr.map((el) => {
    const tmp = [];
    for (let x of rule) {
      const idx = el.indexOf(x);
      if (idx !== -1) tmp.push(idx);
    }
    const tmp2 = tmp.slice().sort();
    for (let i = 0; i < tmp.length; i++) {
      if (tmp[i] !== tmp2[i]) {
        return "불가능";
      }
    }
    return "가능";
  });
}

arr = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
rule = "ABD";

console.log(block(arr, rule));

// 의문점: 왜 같은 요소를 가진 배열을 비교하면 다른가?
console.log([1, 2, 3] == [1, 2, 3]);

// 책 정답
function solution(전체블록, 규칙) {
  let answer = [];
  for (let 부분블록 of 전체블록) {
    answer.push(블록순서체크(부분블록, 규칙));
  }
  return answer;
}

function 블록순서체크(부분블록, 규칙) {
  let 임시변수 = 규칙.indexOf(규칙[0]);
  for (let 문자 of 부분블록) {
    if (규칙.includes(문자)) {
      if (임시변수 > 규칙.indexOf(문자)) {
        return "불가능";
      }
      임시변수 = 규칙.indexOf(문자);
    }
  }
  return "가능";
}

const 전체블록 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "AEBFDGCH"];
const 규칙 = "ABCD";

console.log(solution(전체블록, 규칙));
