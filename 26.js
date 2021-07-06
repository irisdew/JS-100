// 행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램

function PlanetName(kor) {
  const PlanetKor = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"];
  const PlanetEng = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

  //   // [ERROR] console.log(kor in PlanetKor); // "객체"에 요소가 있는지 검사하는 방법, 배열에서는 안됨!
  //   if (PlanetKor.includes(kor)) {
  //     PlanetKor.forEach((el, i) => {
  //       if (el === kor) {
  //         return i;
  //         // [ERROR] forEach 안에서 return하면 언제나 undefined!
  //         // [Why does .forEach() always return undefined?] https://discuss.codecademy.com/t/why-does-foreach-return-undefined/438369
  //       }
  //     });
  //   } else {
  //     return "태양계 행성 이름이 아닙니다!";
  //   }

  const idx = PlanetKor.findIndex((x) => x === kor);
  if (idx !== -1) {
    return PlanetEng[idx];
  } else {
    return "태양계 행성 이름이 아닙니다!";
  }
}

console.log(PlanetName("지구"));
console.log(PlanetName("깐따삐아"));

// forEach()의 단점 : break를 사용하지 못한다. (모두 다 순회해야함), return의 값이 항상 undefined이다.
// 배열을 순회할 때 break;를 사용하고 싶다면 for문을 사용해야한다.
// return값을 얻고 싶다면, map(새로운 배열을 return), filter(조건에 맞는 요소만 포함된 새로운 배열을 return)를 사용하는 것이 좋다.

// 정확한 행성이름을 입력한다고 했을 떄, indexOf()로도 풀어보기
function PlanetName2(kor) {
  const PlanetKor = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"];
  const PlanetEng = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

  return PlanetEng[PlanetKor.indexOf(kor)];
}

console.log(PlanetName2("목성"));
// console.log(PlanetName2("목상")); // 없는 행성을 입력하면 ERROR 발생
