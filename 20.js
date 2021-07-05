function divide(input) {
  const [a, b] = input.split(" ").map((x) => parseInt(x));
  const mean = Math.floor(a / b);
  const rest = a % b;
  return mean + " " + rest;
}

console.log(divide("37 7"));

// parseInt 정리하기
console.log(parseInt(10.43));
console.log(parseInt("10.43", 10));
console.log(parseInt("011", 2));
// parseInt(34.5, 10);
// parseInt의 두번째 인자값은 redix로 10진법, 2진법 등등 진법을 지정 가능
/* 
If the string begins with "0x", the radix is 16 (hexadecimal)
If the string begins with "0", the radix is 8 (octal). This feature is deprecated
If the string begins with any other value, the radix is 10 (decimal)
*/
