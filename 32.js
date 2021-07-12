// 문자열을 입력 받으면 단어의 개수를 출력하는 프로그램

function jasosal(input) {
  return input.split(" ").length;
}

const line = "안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.";
console.log(jasosal(line));
