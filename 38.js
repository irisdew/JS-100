function candy(input) {
  const scores = input.split(" ").map((el) => +el);
  scores.sort((a, b) => b - a);
  const cutLine = [...new Set(scores)][2];
  let count = 0;
  scores.forEach((el) => {
    if (el >= cutLine) {
      count++;
    }
  });
  return count;
}

console.log(candy("97 86 75 66 55 97 85 97 97 95"));

// 답안) while문으로 풀기
// let count = 0;
// let arr = [];

// while (arr.length < 3) {
//   let n = scores.pop();
//   if (!arr.includes(n)){
//     arr.push(n);
//   }
//   count += 1;
// }
