function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return "" + Math.floor(Math.random() * (max - min) + min);
}

function getResult(you, computer) {
  let strike = 0;
  let ball = 0;

  const youLeft = new Set();
  const computerLeft = new Set();

  for (let i = 0; i < computer.length; i++) {
    if (you[i] === computer[i]) {
      strike += 1;
    } else {
      youLeft.add(you[i]);
      computerLeft.add(computer[i]);
    }
  }
  const difference = new Set([...youLeft].filter((x) => !computerLeft.has(x)));

  if (!difference.size) {
    ball = youLeft.size;
  }

  const ballResult = ball ? `${ball}B` : "";
  const strikeResult = strike ? `${strike}S` : "";
  const result = ballResult + strikeResult;
  return result || 0;
}

function tryRound(i) {
  const computer = getRandomInt(100, 1000);
  //   console.log(computer);
  const you = prompt(`[Round ${i}] 세자리 숫자를 입력하세요`);
  const result = getResult(you, computer);
  console.log(
    `[Round ${i}] you: ${you} | computer: ${computer} | result: ${result}`
  );
  return result;
}

function baseballGame() {
  for (let i = 1; i <= 9; i++) {
    if (tryRound(i) === "3S") {
      alert("YOU WIN!!!");
      return;
    }
  }
  alert("COMPUTER WIN!!!");
}

baseballGame();
