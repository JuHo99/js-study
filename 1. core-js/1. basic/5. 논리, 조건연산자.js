let t = true;
let f = false;

console.log(`&&연산`);
console.log(t && t);
console.log(t && f);
console.log(f && t);
console.log(f && f);

console.log(`=======================`);

console.log(`||연산`);
console.log(t || t);
console.log(t || f);
console.log(f || t);
console.log(f || f);

console.log(`=======================`);

let money = 1;
if (!money) {
    console.log(`쉴 것이다`);
}
else{
    console.log(`놀 것이다`);
}

console.log(`=======================`);

money = 7000;

let food;
if (money>6000) {
    food=`돈까스`
}else{
    food=`라면`
}
console.log(`선택된 음식 : ${food}`);

console.log(`=======================`);

money = 10;
console.log(`선택된 음식 : ${money>6000?'돈까스' : '라면'}`);

console.log(`=======================`);




