// 반장 선거
function vote(input) {
  const result = {};
  input.split(" ").forEach((el) => {
    if (el in result) {
      result[el] += 1;
    } else {
      result[el] = 1;
    }
  });

  // 가장 많은 표를 받은 당선자 정하기

  //   // 방법1) 객체 정렬 -> 배열로 바꿔서 정렬
  //   var sortedVote = [];
  //   for (let r in result) {
  //     sortedVote.push([r, result[r]]);
  //   }
  //   sortedVote.sort((a, b) => b[1] - a[1]);
  //   return `${sortedVote[0][0]}(이)가 총 ${sortedVote[0][1]}표로 반장이 되었습니다.`;

  // 방법2) reduce로 최댓값 구하기
  const winner = Object.keys(result).reduce((a, b) => (result[a] > result[b] ? a : b));
  return `${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`;
}

const a = "원범 원범 혜원 혜원 혜원 혜원 유진 유진";
console.log(vote(a));

// 객체에 배열 전용 매서드를 사용하고 싶을 때 (객체를 순회하고 싶을 때)
// Object.keys() 객체의 키만 담은 배열을 반환
// Object.values() 객체의 값만 담은 배열을 반환
// Object.entries() 객체의 [키, 값] 쌍을 담은 배열을 반환

// 모던자바스크립트 Object.keys, values, entries https://ko.javascript.info/keys-values-entries
// ※ Object.keys, values, entries는 심볼형 프로퍼티를 무시한다.
// ※ for .. in 반복문에서도 심볼형 프로퍼티를 무시한다.
// 심볼형 키가 필요한 경우에는 심볼형 키만 배열 형태로 반환해주는 Object.getOwnPropertySymbols()를 사용

// <가격 인상> 객체 prieces의 프로퍼티 값들을 두배로 늘려보기
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(Object.entries(prices).map(([k, v]) => [k, v * 2]));
// Object.fromEntries() 배열을 객체로 다시 되돌림

console.log("doublePrices", doublePrices);

// <급여 합계>
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salaries) {
  return Object.values(salaries).reduce((a, b) => a + b, 0);
  // reduce로 합계 구하기
}

console.log("sumSalaries", sumSalaries(salaries)); // 650

// <프로퍼티 개수 세기>
let user = {
  name: "John",
  age: 30,
};

function count(user) {
  return Object.keys(user).length;
}

console.log("count", count(user)); // 2
