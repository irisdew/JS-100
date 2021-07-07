// 대문자 검사
function isUpper(a) {
  if (a === a.toUpperCase()) {
    return "YES";
  }
  return "NO";
}

console.log(isUpper("Z"));
console.log(isUpper("p"));
