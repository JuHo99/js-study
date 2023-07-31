
let num1 = +prompt(`첫번째 숫자 입력`);
let num2 = +prompt(`두번째 숫자 입력`);
let num3 = 0;
let total = 0;
if (num1 > num2) {
    num3 = num1;
    num1 = num2;
    num2 = num3;
}
for (let i=num1;i <= num2; i++) {
    total += i;
}
alert(`${num1} ~ ${num2}까지의 합 : ${total}`);


