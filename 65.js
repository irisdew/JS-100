// 변형된 리스트

const a = [1, 2, 3, 4];
const b = ["a", "b", "c", "d"];

const result = a.map((el, idx) => {
  return [el, b[idx]];
});

console.log(result);
