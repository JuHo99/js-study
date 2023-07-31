
let qNum = 1;
let correctCount = 0;
let wrongCount = 0;
let realAnswer;
let maxNumber;


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

  let firstNumber = Math.floor(Math.random() * maxNumber) + 1;
  let secondNumber = Math.floor(Math.random() * maxNumber) + 1;
  let mark = Math.floor(Math.random() * 3) + 1;//부호 랜덤

  if (mark === 1) {
    mark = `+`;
    realAnswer = firstNumber + secondNumber;
  } 
  else if (mark === 2) {
    mark = `-`;
    realAnswer = firstNumber - secondNumber;

    if (firstNumber === secondNumber) {
      continue;
    } else if (firstNumber < secondNumber) {
      let t = firstNumber;
      firstNumber = secondNumber;
      secondNumber = t;
    }
  } 
  else {
    mark = `*`
    realAnswer = firstNumber * secondNumber;
  }

  userAnswer = +prompt(`Q${qNum++}. ${firstNumber} ${mark} ${secondNumber} = ??`);

  if (userAnswer === 0) {
    alert(`게임 종료`);
    break;
  }

  if (userAnswer === realAnswer) {
    alert(`정답`);
  } else {
    alert(`오답`);
  }
}
alert(`정답 : ${correctCount}
오답 : ${wrongCount}`);