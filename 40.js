// 놀이기구 무게 제한
function weightLimit(limit, n) {
  const friends = [];
  for (let i = 0; i < n; i++) {
    f = prompt("몸무게 입력");
    friends.push(+f);
  }
  count = 0;
  friends.forEach((el) => {
    limit -= el;
    if (limit < 0) {
      return count;
    }
    count++;
  });
  return count;
}

console.log(weightLimit(50, 5));
