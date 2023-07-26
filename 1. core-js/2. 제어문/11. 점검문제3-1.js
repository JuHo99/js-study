
let puestionNumber = 1;
let userNumber;
let correctCount = 0;
let beWrongQuestionNumber = 0;
let realAnswer;
let maxNumber;

alert(`사칙연산 게임 
(종료를 원할 시 0 입력)`)


while (true) {
  while (true) {
    let level = +prompt(`~~~~~~~~ 난이도를 설정합니다 ~~~~~~~~~~~~
    [상 (1~100) |  중 (1~50) |  하 (1~20) ]`);
    if (level === `상`) {
      maxNumber = 100;
    } else if (level === `중`) {
      maxNumber = 50;
    } else if (level === `하`) {
      maxNumber = 20;
    } else {
      alert(`난이도를 다시 입력하세요`);
      continue;
    }
    break;
  }

  let randomNumberA = Math.floor(Math.random() *maxNumber) + 1;
  let randomNumberB = Math.floor(Math.random() *maxNumber) + 1;
  let mark = Math.floor(Math.random() * 3) + 1;//부호 랜덤

  if (mark === 1) {
    mark = `+`;
    realAnswer = randomNumberA + randomNumberB;
  } else if (mark === 2) {
    mark = `-`;
    realAnswer = randomNumberA - randomNumberB;
    if (randomNumberA === randomNumberB) {
      continue;
    } else if (randomNumberA < randomNumberB) {
      let t = randomNumberA;
      randomNumberA = randomNumberB;
      randomNumberB = t;
    }
  } else {
    mark = `*`
    realAnswer = randomNumberA * randomNumberB;
  }

  userNumber = +prompt(`Q${puestionNumber}. ${randomNumberA} ${mark} ${randomNumberB} = ??`);

  if (userNumber === realAnswer) {
    alert(`정답입니다.`);
    puestionNumber++;
    correctCount++;
  } else if (userNumber === 0) {
    break;
  } else {
    alert(`오답입니다.`)
    puestionNumber++;
    beWrongQuestionNumber++;
  }
}
alert(`게임이 끝났습니다.
맞춘 정답의 수 : ${correctCount}
틀린 정답의 수 : ${beWrongQuestionNumber}`)