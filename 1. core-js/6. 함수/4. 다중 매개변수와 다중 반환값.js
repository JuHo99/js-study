
// multi parameter : 매개변수의 개수가 n개일 경우
// n개를 하나의 박스(배열, 객체)에 담아서 전달


// 정수 n개의 총합 (es5)
function addAll(numbers){
    let total = 0;
    for (let n of numbers) {
        total += n;
    }
    return total;
}

// 정수 n개의 총합 (es6)
function addAllEs6(...numbers){
    let total = 0;
    for (let n of numbers) {
        total += n;
    }
    return total;
}

let r1 = addAll([10,20,30,40,50]);
console.log(`r1 = ${r1}`);

let r2 = addAllEs6(10,20,30,40);
console.log(`r2 = ${r2}`);


// 다중 반환값
// 함수의 반환값은 언제나 하나여야 한다

// 2개의 정수를 전달하면 두 수의 덧셈, 뻴셈, 곱셈, 나눗셈을 반환

function oprateAll(n1,n2) {
    return {
        minus : n1-n2,
        multi : n1*n2,
        divide : n1/n2,
        plus : n1+n2,
    };
}

let results = oprateAll(20,10)

console.log(results);
console.log(`덧셈결과 : ${results.plus}`);
console.log(`곱셈결과 : ${oprateAll(4,5).multi}`);



