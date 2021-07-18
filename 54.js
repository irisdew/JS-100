// 연속되는 수
function solution(nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] + 1 !== nums[i]) {
      return "NO";
    }
  }
  return "YES";
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 4, 2, 6, 3]));
