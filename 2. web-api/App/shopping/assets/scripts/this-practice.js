
// function foo() {
//     console.log(this);
//     // 일반 함수에서 this
//     // nodejs환경 = global객체 할당
//     // 브라우저환경 = window객체 할당
// }

// foo();

// 객체에서 this
// const car = {
//     madeBy : '현대',
//     model : '그랜저',
//     showCarInfo: function () {
//         console.log(`재조사 : ${this.madeBy} , 모델명 : ${this.model}`);
//     }
// };

// car.showCarInfo();

// // 이벤트 핸들러에서의 this
// const $btn = document.getElementById('btn');

// //  function으로 선언할 경우 이벤트를 건 요소
// const buttonHandler = function () {
//     console.log(this);
//     this.style.background = 'red';
// };
// $btn.addEventListener('click',buttonHandler);


// console.log(`=======================`);

// this를 조작하는 메서드 bind, call, apply

function sayHello(lang1,lang2) {
    console.log(`this : ${this}`);
    console.log(`Hello I am ${this.name}, I can speak ${lang1} and ${lang2}`);
}
const kim = {
    name:'김철수',
    age : 33
};
const park = {
    name:'박영희',
    age : 55
};
// // call = 첫 param 에서는 조작할 this전달 두번째 param에서는 원래 함수가 받아야할 파라미터를 전달
// sayHello.call(park, 'English','Japanese');

// sayHello.apply(park, ['English','Japanese']);

// call, apply는 함수를 바로 실행
// 그러나 bind는 this를 조작한 새로우 ㄴ함수를 반환하고 실행은 시키지 않는다

const bindedSayHello = sayHello.bind(park, 'Korean','Spanish');

bindedSayHello();


const eventHandler = function (fruit, e) {
    console.log(`event 객체 : ${e}`);
    console.log(`과일명 : ${fruit}`);
    // console.log(this);
};
const $input = document.querySelector('input');
// document.getElementById('btn').addEventListener('click',evenHandler.bind($input));
document.getElementById('btn').addEventListener('click',eventHandler.bind(null,`사과`));