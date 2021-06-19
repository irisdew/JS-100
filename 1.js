// 배열의 삭제

var nums = [100, 200, 300, 400, 500];

// 방법1: slice
answer1 = nums.slice(0, 3);
console.log(answer1);

// 방법2: length 이용
answer2 = nums.slice();
answer2.length = 3;
console.log(answer2);

// 방법3: pop
answer3 = [...nums];
answer3.pop();
answer3.pop();
console.log(answer3);

// 방법4: filter
const answer4 = nums.filter((el) => el !== 400 && el !== 500);
console.log(answer4);
