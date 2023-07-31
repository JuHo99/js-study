
let x = 10;//전역변수 : 프로그램 전체에서 사용

function foo(z) {// 매개변수도 지역의 의미를 가짐
    // console.log(`지역변수 x 선언전 : ${x}`);
    let x = 30;
    let y =20+x; // 지역변수 : 함수(중괄호) 안에서 사용가
    console.log(y-z);
    console.log(`지역변수 x 선언후 : ${x}`);
}

foo(17);

// console.log(y);
// console.log(z);
 console.log(x);
console.log(`함수 바깥쪽 x : ${x}`);


// 중첩함수 = 함수 안에 함수를 또 정의한 형태

console.log(`=======================`);

function outer(m) {
    let n = `outer local n`;
    let v = `outer local v`;
    console.log(m);
    console.log(n);
    console.log(v);
    
    function inner() {
        console.log(n);
        let m = `inner local m`;
        let v = `inner local v`;
        console.log(m);
        console.log(v); 
    }
    inner();
}
let m = `global m`;

outer(`outer param m`);

console.log(m);

// 블록 스코프

let k = 100;

for (let k = 0; k < 3; k++) {
   console.log(`for문 안에서의 k : ${k}`);
}
console.log(`for문 밖에서의 k : ${k}`);









