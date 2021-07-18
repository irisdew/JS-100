// 하노이의 탑
const route = []; // 움직인거 기록하는 배열

// 옮기려는 원반 개수, 출발기둥, 도착기둥, 보조기둥
function hanoi(num, start, end, temp) {
  // 원판이 한 개 일 때는 바로 옮기기
  if (num === 1) {
    route.push(`${num}번 원반을 ${start}기둥에서 -> ${end}기둥으로 옮깁니다`);
    return NaN;
  }

  // 원판 n-1개를 보조기둥으로 옮기고
  hanoi(num - 1, start, temp, end);
  // 가장 큰 원반은 목표 기둥으로
  route.push(`${num}번 원반을 ${start}기둥에서 -> ${end}기둥으로 옮깁니다`);
  // 보조기둥과 시작 기둥을 바꾼다
  hanoi(num - 1, temp, end, start);
}

hanoi(3, "A", "B", "C");
console.log(route);
console.log(route.length);

// 첫번째 재귀에서는 맨 밑의 n번 원판을 목적지로 옮기기 위해 위에 올려진 n-1개의 원판을 경유지로 옮긴다.
// 그 다음 맨 밑 원판을 목적지로 옮긴다
// 경유지에 있는 n-1개의 원판을 목적지로 옮긴다

// 3번 원판을 A에서 C로 옮기기 위해 1~2번 원판을 B로 옮긴다
//  - 1~2번 원판을 A에서 B로 옮긴다. C를 보조기둥으로 사용해서
// 3번 원판을 A에서 C로 옮긴다
// B에 있는 1~2번 원판을 목적지로 옮긴다
