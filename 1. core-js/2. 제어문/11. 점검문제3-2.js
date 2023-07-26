
let qNum = 1;

while (true) {
    let firstNumber = Math.floor(Math.random()*20)+1;
    let secondNumber = Math.floor(Math.random()*20)+1;


    userAnswer = +prompt(`Q${qNum++}. ${firstNumber} + ${secondNumber} = ??`);
    
    if (userAnswer === 0) {
        alert(`게임 종료`);
        break;
    }
    
    if(userAnswer === firstNumber+secondNumber){
        alert(`정답`);
    }else{
        alert(`오답`);
    }
}