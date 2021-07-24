// 버스 시간표
const 시간표 = ["12:30", "13:20", "14:13"];
const 현재시간 = "12:40";

// 출력
// ['지나갔습니다', '00시간 40분', '01시간 33분']
function solution(시간표, 현재시간) {
  const 현재시 = +현재시간.split(":")[0];
  const 현재분 = +현재시간.split(":")[1];
  return 시간표.map((el) => {
    if (+el.split(":")[0] < 현재시) {
      return "지나갔습니다";
    } else if (+el.split(":")[0] === 현재시 && +el.split(":")[1] < 현재분) {
      return "지나갔습니다";
    } else {
      const 남은시간 = (+el.split(":")[0] - 현재시) * 60 + (+el.split(":")[1] - 현재분);
      let 남은시 = Math.floor(남은시간 / 60);
      const 남은분 = String(남은시간 - 남은시 * 60);
      if (남은시 < 10) {
        남은시 = "0" + 남은시;
      } else {
        남은시 = String(남은시);
      }
      return `${남은시}시간 ${남은분}분`;
    }
  });
}

console.log(solution(시간표, 현재시간));

// padStart
// 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환
// 채워넣기는 대상 문자열의 시작(좌측)부터 적용
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
console.log("1".padStart(2, 0));
