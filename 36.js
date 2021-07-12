// 구구단 출력
function gugudan(n) {
  let result = "";
  for (let i = 1; i < 10; i++) {
    result = result + String(n * i) + " ";
  }
  return result;
}

console.log(gugudan(2));
