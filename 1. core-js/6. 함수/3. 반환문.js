
function addNumber(n1 ,n2){
    // 반환값 : 함수 호출이 끝나면 함수 호출부로 전달될 값
    return n1 + n2;
    // 반환문은 함수의 탈출문
    let n3 = 50;
    console.log(`dkdkdkdkdk`);
}

let r1 = addNumber(5,7);

console.log(r1);

console.log(addNumber(10,20));

//  함수의 중첩호출 - 안쪽부터 실행,  같은 레벨일 경우 왼쪽부터 실행

let r2 = addNumber(addNumber(addNumber(3,2),10),addNumber(5,8));

console.log(r2);

// 리턴이 없는 함수 : void 함수

function multi (n1,n2){
    let result = n1*n2;
    console.log(`${n1} x ${n2} = ${result}`);
}


multi(4,6);
let r3 = multi(4,6);

console.log(`r3 : ${r3}`);

// void함수는 다른 변수에 담지도 말고 다른 함수의 매개값으로 쓰지도 말아라

multi(addNumber(2,2),addNumber(4,4)); //가능
addNumber(multi(2,2),multi(5,5));// 불가능

// return 의 탈출의 의미

function callName(nixkName){
    let prohidits = [`돌아이`,`멍청이`,`빠가`];
    if(prohidits.includes(nixkName)){
        console.log(`바른말 고운말 사용`);
        return;
    }
    console.log(`${nixkName}님 하이~`);
}
console.log(`===============`);
callName(`빠가사리`)

function stopLoop(){
    while (true) {
        let flag = prompt(`명령어 입력`);
        if(flag === `stop`){
            break;
        }
        alert(flag);
    }
    alert(`수고`);
}

stopLoop();



