// 문자열 속 문자 찾기
function FindStr(first, second) {
  for (let i = 0; i < first.length - second.length; i++) {
    let temp = true;
    for (let j = 0; j < second.length; j++) {
      if (first[i + j] !== second[j]) {
        temp = false;
      }
    }

    if (temp) {
      return i;
    }
  }
}

function FindStr2(first, second) {
  return first.indexOf(second);
}

const first = "pineapple is yummy";
const second = "apple";
console.log(FindStr(first, second));
console.log(FindStr2(first, second));

// indexOf() 매서드는 호출한 스트링 객체나 배열에서 주어진 값과 일치하는 값이나 요소의 "첫번째 인덱스"를 반환
// 찾는 값이 존재하지 않으면 -1 반환
