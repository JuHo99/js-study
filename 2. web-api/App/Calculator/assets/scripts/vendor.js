
// 프로그램 전역적으로 사용할 변수, 함수 정의

const $userInput = document.getElementById('input-number');
const $addBtn = document.getElementById('btn-add');
const $subtractBtn = document.getElementById('btn-subtract');
const $multiplyBtn = document.getElementById('btn-multiply');
const $divideBtn = document.getElementById('btn-divide');

const $currentResultOutput = document.getElementById('current-result');
const $currentCalculationOutput = document.getElementById('current-calculation');

const $resultsLogBox = document.querySelector('.resultsLogBox');


function outputResult(result, text) { //results 안에 박스에 넣어줄 숫자를 받는 함수 
  $currentResultOutput.textContent = result;
  $currentCalculationOutput.textContent = text;
}

function outputResultsLog(operation,prevResult,number,result) { //resultsLogBox에 resultLog를 넣어주는 함수
    const $newDivTag = document.createElement('div'); // resultLog를 받을 div 생성
    $resultsLogBox.appendChild($newDivTag); // resultsLogBox에 생성한 div 추가
    // div의 textContent를 이전결과 , 연산자 , 연산숫자 = 값으로 바꿔준다
    $resultsLogBox.lastChild.textContent = (` ${prevResult} ${operation} ${number} = ${result}`);
}

