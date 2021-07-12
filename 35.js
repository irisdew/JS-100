// 2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수

function one(n) {
  function two(val) {
    return Math.pow(val, n);
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));

// Math.pow(밑, 지수)

// 중첩합수(Nested function) : 함수 안쪽에 또 다른 함수를 선언
// two함수를 one 함수 내부에 위치시켜
// two 함수는 one 함수 내부에서만 사용되는 함수임을 명시적으로 나타낼 수 있다.
// 자바스크립트의 중첩 함수(Nested functions)는 언제 사용해야 할까? https://siyoon210.tistory.com/162

// cf)
// 콜백함수 : 함수의 내부처리결과값을 함수 외부로 내보낼 때 사용, 파라미터로 함수를 전달받아 함수의 내부에서 실행하는 함수.
// 콜백: 함수 실행결과값을 리턴이 아닌 매개변수로 넘어온 함수를 호출해서 넘겨주는 방식
