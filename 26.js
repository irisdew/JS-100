// 행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램

function PlanetName(kor) {
  const PlanetKor = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"];
  const PlanetEng = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

  //   // [ERROR] console.log(kor in PlanetKor); // "객체"에 요소가 있는지 검사하는 방법, 배열에서는 안됨!
  //   if (PlanetKor.includes(kor)) {
  //     PlanetKor.forEach((el, i) => {
  //       if (el === kor) {
  //         return i;
  //         // [ERROR] forEach 안에서 return하면  undefined!
  //         // https://discuss.codecademy.com/t/why-does-foreach-return-undefined/438369 (Why does .forEach() always return undefined?)
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
