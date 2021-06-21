// 2019/04/26/ 11:34:27 로 출력하기

const year = "2019";
const month = "04";
const day = "26";
const hour = "11";
const minute = "34";
const second = "27";

// 템플릿 문자열 활용
const result = `${year}/${month}/${day} ${hour}:${minute}:${second}`;
console.log(result);

// concat 활용
// const resultConcat = concat(
//   year,
//   "/",
//   month,
//   "/",
//   day,
//   " ",
//   hour,
//   ":",
//   minute,
//   ":",
//   second
// );
//concat() 메서드는 매개변수로 전달된 문자열을 메서드를 호출한 문자열에 붙여 새로운 문자열로 반환합니다.
const resultConcat = year.concat(
  "/",
  month,
  "/",
  day,
  " ",
  hour,
  ":",
  minute,
  ":",
  second
);
console.log(resultConcat);

// 자바스크립트 현재 시간 출력
const now = new Date();
const nowResult = `${now.getFullYear()}/${now.getMonth()}/${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
console.log(nowResult);
