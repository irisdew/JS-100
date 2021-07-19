// 0 ~ 1000까지 1의 개수

// 순회
let count = 0;

for (let i = 0; i <= 1000; i++) {
  String(i)
    .split("")
    .forEach((el) => {
      if (el === "1") {
        count++;
      }
    });
}

console.log(count);

// 정규표현식
let s = "";
for (let i = 0; i <= 1000; i++) {
  s += i;
}
// console.log(s);
console.log(s.match(/1/g).length);
