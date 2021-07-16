let nums = "";
for (let i = 1; i < 21; i++) {
  nums += String(i);
}

console.log(nums);

const answer = Array.from(nums).reduce((a, b) => {
  return a + +b;
}, 0);
console.log(answer);
