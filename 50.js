// 버블정렬 구현

function bubble(arr) {
  let result = arr.slice(); // 원본 배열 복사

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - 1 - i; j++) {
      console.log(i, j, result[j], result[j + 1]);
      if (result[j] > result[j + 1]) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}

const items = "5 1 4 2 8".split(" ").map((n) => {
  return parseInt(n, 10);
});

console.log(bubble(items));
