
// index.html에서 활용할 이벤트처리, 핸들러 등등 작성

// 현재 계산기에 표시될 숫자
let currentResult = 0; 




//================= 이벤트 핸들러 제작==================

// 더하기 버튼 이벤트 핸들러
const addHandler = () =>{
    console.log( '+ button click' );
    // 입력창에 입력한 숫자를 읽기
    const enteredNumber = +$userInput.value;
    // 로그 생성 (기존의 숫자 + enteredNumber)
    const calcDescriptionLog = `${currentResult} + ${enteredNumber}`;
    // 실제 결과 반영
    currentResult += enteredNumber;
    // 화면에 렌더링
    outputResult(currentResult,calcDescriptionLog)
};

// 빼기 버튼 이벤트 핸들러
const subtractHandler = ()=>{
    console.log('- button click');

        const enteredNumber = +$userInput.value;

        const calcDescriptionLog = `${currentResult} - ${enteredNumber}`;

        currentResult -= enteredNumber;

        outputResult(currentResult,calcDescriptionLog)
};

// 곱하기 버튼 이벤트 핸들러
const multiplyHandler = () =>{
    console.log('* button click');
    const enteredNumber = +$userInput.value;

    const calcDescriptionLog = `${currentResult} * ${enteredNumber}`;

    currentResult *= enteredNumber;
    
    outputResult(currentResult,calcDescriptionLog)
};

// 나누기 버튼 이벤트 핸들러
const divideHandler = () =>{
    console.log( '/ button click' );
    const enteredNumber = +$userInput.value;

    const calcDescriptionLog = `${currentResult} / ${enteredNumber}`;

    currentResult /= enteredNumber;
    
    outputResult(currentResult,calcDescriptionLog)
};

// ================이벤트 핸들러 바인딩===================
$addBtn.addEventListener('click',addHandler);
$subtractBtn.addEventListener('click',subtractHandler);
$multiplyBtn.addEventListener('click',multiplyHandler);
$divideBtn.addEventListener('click',divideHandler);