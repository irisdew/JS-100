// sort 구현하기
// 키가 주어지면 키 순서대로 제대로 섰는지 확인
const line = prompt("현재 줄 서있는 순서를 입력해주세요").split(" ");
const ordered = line.slice().sort((a, b) => a - b);

console.log(ordered);
console.log(line);

if (line === ordered) {
  console.log("YES");
} else {
  console.log("NO");
}

/*
const unsorted = prompt('키를 입력하세요');
let sorted = "";

sorted = unsorted
  .split(" ")
  .sort(function(a, b) {
    return a - b;
  })
  .join(" ");

if (unsorted === sorted) {
  console.log("Yes");
} else {
  console.log("No");
}
*/
