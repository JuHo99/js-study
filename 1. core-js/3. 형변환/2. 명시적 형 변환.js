
let x =30;
let y =40;
let result = x+y;
console.log(`result = ${result}`);

let num = 1234567;


let count = 0;
while (true) {
    num= Math.floor(num/10);
    count++;
    let rest = num%10;
    if (rest === 0) break;
}
console.log(`자리수 : ${count}`);

let num1 = 1234567;

num1 = num1.toString();
console.log(`자리수 : ${num1.length}`);

let x1 =30;
let y1 =40;
let result1 = String(x)+y.toString;
console.log(`result = ${result}`);


// 논리로 변환
let money = 7000;
let hasMoney = !!money;
console.log(`돈이 있는 가? ${hasMoney}`);







