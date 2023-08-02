
// index.html에서 활용할 이벤트처리, 핸들러 등등 작성

// 현재 계산기에 표시될 숫자
let currentResult = 0;

// 사용자의 입력값을 읽어오는 함수 제작
const getUserNumberInput = () => +$userInput.value;

// 계산 이력을 모아둘 배열 제작
const logEntries = [];

// 로그 이력을 만드는 함수 제작
const writeToLog = (operation,prevResult,number,result) =>{
    // 연삭, 이전결과 , 연산숫자, 연산결과
    const logObject = {
        operation,
        prevResult,
        number,
        result
    };
    logEntries.push(logObject);
    console.log(logEntries);
};

// 계산 로그를 만들고 화면에 렌더링 하는 함수 제작
const createLogAndRenderOutput = (operteMark,originResult,calcNumber) => {
    // 로그 생성 (기존의 숫자 + enteredNumber)
    const calcDescriptionLog = `${originResult} ${operteMark} ${calcNumber}`;
    // 화면에 렌더링
    outputResult(currentResult, calcDescriptionLog)
};


//================= 이벤트 핸들러 제작==================

// 더하기 버튼 이벤트 핸들러
const addHandler = () => {
    console.log('+ button click');
    // 입력창에 입력한 숫자를 읽기
    const enteredNumber = getUserNumberInput();
    // 계산 전 값을 백업
    const originResult = currentResult;
    // 실제 결과 반영
    currentResult += enteredNumber;
    // 로그생성 + 화면에 렌더링 하는 함수 호출
    createLogAndRenderOutput('+',originResult,enteredNumber);
    // 로그이력 쌓기
    writeToLog('ADD',originResult,enteredNumber,currentResult);
};

// 빼기 버튼 이벤트 핸들러
const subtractHandler = () => {
    console.log('- button click');
    const enteredNumber = getUserNumberInput();
    const originResult = currentResult;
    currentResult -= enteredNumber;
    createLogAndRenderOutput('-',originResult,enteredNumber);
    writeToLog('SUB',originResult,enteredNumber,currentResult);
};

// 곱하기 버튼 이벤트 핸들러
const multiplyHandler = () => {
    console.log('* button click');
    const enteredNumber = getUserNumberInput();
    const originResult = currentResult;
    currentResult *= enteredNumber;
    createLogAndRenderOutput('×',originResult,enteredNumber);
    writeToLog('MULT',originResult,enteredNumber,currentResult);
};

// 나누기 버튼 이벤트 핸들러
const divideHandler = () => {
    console.log('/ button click');
    const enteredNumber = getUserNumberInput();
    const originResult = currentResult;
    currentResult /= enteredNumber;
    createLogAndRenderOutput('÷',originResult,enteredNumber);
    writeToLog('DIVIDE',originResult,enteredNumber,currentResult);
};

// ================이벤트 핸들러 바인딩===================
$addBtn.addEventListener('click', addHandler);
$subtractBtn.addEventListener('click', subtractHandler);
$multiplyBtn.addEventListener('click', multiplyHandler);
$divideBtn.addEventListener('click', divideHandler);