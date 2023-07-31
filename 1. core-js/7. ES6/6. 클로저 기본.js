// 자바스크립트의 함수는 또 다른 함수를 리턴 할 수 있음.

// function Calculator() {
//   return (n1, n2) => n1 + n2;
// }

const Calculator = () => (n1, n2) => n1 + n2;

const result = Calculator();
console.log(result(5, 8));

console.log((Calculator())(7, 4));

console.log('==========================');



const line = () =>console.log(`=======================`);


/*
let count = 0; //전역변수

const increase = ()=>++count;// 카운트를 하나 증가시키는 함수

console.log(increase());
console.log(increase());
count = 999;
console.log(increase());


const increase = () => {
    let count =0;
    return ++count;
};

console.log(increase());
console.log(increase());
console.log(increase());

line();


// 카운트를 증가시키는 함수를 리턴하는 클로저를 생성

const increaseClosure = () =>{
    let count = 0;
    return ()=>++count;
};


const increase = increaseClosure();

console.log(increase());
console.log(increase());
count = 900;
console.log(increase());

// 즉시 실행 함수 = 1회성 호출 함수를 만들 때 주로 사용



const r1 = (function (n1, n2) {
    return n1+n2;
})(10,20);

console.log(r1);
*/




const increase = (() =>{
    let count = 0;
    return ()=>++count;
})();

console.log(increase());
console.log(increase());
count = 900;
console.log(increase());

