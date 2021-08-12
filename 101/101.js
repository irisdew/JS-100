const input = "사과1호랑이,고니 수박BT닭";

function solution(input) {
  const 유니코드자음 = [
    "ㄱ",
    "ㄲ",
    "ㄴ",
    "ㄷ",
    "ㄸ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅃ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅉ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ];

  const 초성추출 = input
    .split("")
    .map((el) => parseInt((el.charCodeAt(0) - 44032) / 588))
    .filter((el) => el >= 0)
    .map((el) => 유니코드자음[el]);

  const 자음 = 유니코드자음.filter((el) => !["ㄲ", "ㄸ", "ㅃ", "ㅆ", "ㅉ"].includes(el));

  // 정답 출력
  자음.forEach((x) => {
    const count = 초성추출.filter((el) => el === x).length;
    console.log(`${x}:${count}`);
  });
}

solution(input);
