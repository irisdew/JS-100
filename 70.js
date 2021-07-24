// 행렬 곱하기
const a = [
  [1, 2],
  [2, 4],
];

const b = [
  [1, 0],
  [0, 3],
];

function solution(a, b) {
  if (a.length === b[0].length && a[0].length === b.length) {
    const c = [];
    const x = a.length;
    const y = b[0].length;

    for (let i = 0; i < y; i++) {
      let row = [];
      for (let j = 0; j < x; j++) {
        let el = 0;
        for (let k = 0; k < a[0].length; k++) {
          el += a[i][k] * b[k][j];
          //   console.log(k, "/", a[i][k], "*", b[k][j], "=", a[i][k] * b[k][j]);
        }
        console.log("el: ", el);
        row.push(el);
      }
      c.push(row);
    }
    return c;
  } else {
    return -1;
  }
}

// console.log(solution(a, b));

const c = [
  [2, -3, -3],
  [-3, -2, 0],
];
const d = [
  [3, -1],
  [2, -2],
  [3, 0],
];

// console.log(c.length, d.length);
// console.log(d[0].length, c[0].length);
console.log(solution(c, d));
