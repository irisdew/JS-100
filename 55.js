// 하노이의 탑
const route = []; // 움직인거 기록하는 배열

// 옮기려는 원반 개수, 출발기둥, 도착기둥, 보조기둥
function hanoi(num, start, end, temp) {
  // 원판이 한 개 일 때는 바로 옮기기
  if (num === 1) {
    route.push(`원반 ${num}번을 ${start}기둥에서 -> ${end}기둥으로 옮깁니다`);
    return NaN;
  }

  // 원판 n-1개를 보조기둥으로 옮기고
  hanoi(num - 1, start, temp, end);
  // 가장 큰 원반은 목표 기둥으로
  route.push(`원반 ${num}번을 ${start}기둥에서 -> ${end}기둥으로 옮깁니다`);
  // 보조기둥과 시작 기둥을 바꾼다
  hanoi(num - 1, temp, end, start);
}

hanoi(3, "A", "B", "C");
console.log(route);
console.log(route.length);
