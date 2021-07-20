// 20190923 출력하기
// 1. 코드 내에 숫자가 없어야 합니다.
//    - 예) console.log(20190923)이라고 하시면 안됩니다.
// 2. 파일 이름이나 경로를 사용해서는 안됩니다.
// 3. 시간, 날짜 함수를 사용해서는 안됩니다.
// 4. 에러 번호 출력을 이용해서는 안됩니다.
// 5. input을 이용해서는 안됩니다.

// 방법 1. str.length
const withoutNums = ["##", "", "#", "#########", "", "#########", "##", "###"];
console.log(withoutNums.map((x) => x.length).join(""));

// 방법2. index
const idx = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "g"];
const answer =
  "" +
  idx.indexOf("c") +
  idx.indexOf("a") +
  idx.indexOf("b") +
  idx.indexOf("g") +
  idx.indexOf("a") +
  idx.indexOf("g") +
  idx.indexOf("c") +
  idx.indexOf("d");
console.log(answer);
