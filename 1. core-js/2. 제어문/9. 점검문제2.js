
alert(`랜덤 숫자 맞추기 게임`);
let randomNumber = Math.floor(Math.random() * 100) + 1;
let tryNumber = 0;
let userNumber = 0;
let minNumber = 1;
let maxNumber = 100;

while (true) {
  let mode = prompt(`난이도를 선택 (상 : 기회 3회, 중 : 기회 6회, 하 : 기회 9회)`);
  if (mode === `상`) {
    tryNumber = 3;
    break;
  } else if (mode === `중`) {
    tryNumber = 6;
    break;
  } else if (mode === `하`) {
    tryNumber = 9;
    break;
  } else {
    alert(`난이도를 잘못입력했습니다`)
  }
}

alert(`1~100 사이의 숫자를 맞춰보세요`)
for (let i = 0; i < tryNumber + 1; i++) {
  userNumber = +prompt(`${minNumber} ~ ${maxNumber} 사이에 숫자 입력 
    ( 현재 남은 기회 : ${tryNumber - i})`)
  if (userNumber > randomNumber) {
    alert(`Down`);
    maxNumber = userNumber;
  } else if (userNumber < randomNumber) {
    alert(`Up`);
    minNumber = userNumber;
  } else if (userNumber === randomNumber) {
    alert(`Clear!
        남은 기회 ${tryNumber - i}`);
    break;
  }
}








