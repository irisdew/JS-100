// getTime() 함수 사용하기
// Date 객체의 매소드 중 하나인 getTIme()인 1970년 1월 1일 0시 0분 0초 이후로 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환
// getTime()으로 현재 연도 출력하기

const today = new Date();
console.log(today);

console.log(today.getTime());
const year = Math.floor(today.getTime() / (3600 * 24 * 365 * 1000)) + 1970;
console.log(year);
console.log(today.getFullYear());
