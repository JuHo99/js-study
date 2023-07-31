/*
console.log(`김철수님 안녕하세요~~`);
console.log(`오늘도 즐거운 하루되세요~`);

//100줄 코드

console.log(`박영희님 안녕하세요~~`);
console.log(`오늘도 즐거운 하루되세요~`);

//500줄 코드

console.log(`홍길동님 안녕하세요~~`);
console.log(`오늘도 수고하셨습니다~`); 

*/

function sayHello(nickName,isMorning) {
    console.log(`${nickName}님 안녕하세요~~`);
    if (isMorning) {
        console.log(`오늘도 즐거운 하루되세요~`);
    }else{
        console.log(`오늘도 수고하셨습니다~`);
    }
}
//  함수의 호출 - use

sayHello(`김철수`,true);
console.log(`=============`);
sayHello(`박영희`,true);
console.log(`*************`);
sayHello(`홍길동`,false);

function makeLine(){
    console.log(`=====================`);
}

// makeLine();
// makeLine();
// makeLine();
// makeLine();


for (let i = 0; i < 4; i++) {
    makeLine();
}

// input이 주어졌을 때 output 데이터가 나와야 함

function calcAreaCircle(r){
    console.log(`원의 넓이 구하는 중 ... `);
    const PI = 3.14159265;
    const area = PI * r **2;
    return area;
}

// 반지름 5

let result = calcAreaCircle(5);
console.log(`원의 넓이 : ${result}`);

// 반지름 10

let result2 = calcAreaCircle(10);
console.log(`원의 넓이 : ${result2}`);







