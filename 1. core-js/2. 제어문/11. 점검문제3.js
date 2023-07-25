
let puestionNumber = 1;
let userNumber;
let beWrongQuestionNumber = 0;

alert(`사칙연산 게임 
(종료를 원할 시 0 입력)`)
while (true) {
  let randomNumberA = Math.floor(Math.random() * 100) + 1;
  let randomNumberB = Math.floor(Math.random() * 100) + 1;
  userNumber = +prompt(`Q${puestionNumber}. ${randomNumberA} + ${randomNumberB} = ??`);
  if (userNumber === randomNumberA + randomNumberB) {
    alert(`정답입니다.`);
    puestionNumber++;
  } else if (userNumber === 0) {
        break;
  }
  else {
    alert(`오답입니다.`)
    puestionNumber++;
    beWrongQuestionNumber++;
  }
}
alert(`게임이 끝났습니다.
틀린 정답의 수 : ${beWrongQuestionNumber}`)