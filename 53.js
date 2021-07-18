// 괄호 검사

function solution(input) {
  const left = "{[<(";
  const right = "}]>)";

  const stack = [];
  let result = true;
  input.split("").forEach((el) => {
    if (left.includes(el)) {
      stack.push(el);
    } else if (stack.length < 0) {
      result = false;
    } else {
      let prev = stack.pop();
      if (left.indexOf(prev) !== right.indexOf(el)) {
        result = false;
      }
    }
  });
  if (!stack.length < 0) {
    result = false;
  }
  return result ? "YES" : "NO";
}

console.log(solution("(())"));
console.log(solution("[]()"));
console.log(solution("[}{}"));
console.log(solution("[({})]"));

// 문자열 순회하는 방법 : for문으로 순회, 배열로 바꿔서 forEach, ...
