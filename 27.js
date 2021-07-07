const keys = prompt("첫번쨰 입력").split(" ");
const values = prompt("두번째 입력").split(" ");
const obj = {};

for (let i = 0; i < keys.length; i++) {
  obj[keys[i]] = +values[i];
}

console.log(obj);
