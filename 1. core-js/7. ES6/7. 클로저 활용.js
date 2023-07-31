
// const increase = (() => {
//     let count = 0;
//     return ()=>++count;
// })();

// const decrease = (() => {
//     let count = 0;
//     return ()=>--count;
// })();

// console.log(increase());
// console.log(decrease());
// console.log(decrease());
// console.log(increase());
// console.log(increase());

// const countClosure = () =>{
//     let count = 0;

//     const increase = () => ++count;// 카운트에 접근하는 increase 함수 생성
//     const decrease = () => --count;// 카운트에 접근하는 decrease 함수 생성

//     return {
//         increase, 
//         decrease,
//     };
// };


// const counter = countClosure();

// console.log(counter.increase());
// console.log(counter.decrease());
// console.log(counter.increase());
// console.log(counter.decrease());
// console.log(counter.increase());


const {increase , decrease} = (()=>{
    let count = 0;
    return {
        increase: ()=>++count,
        decrease: ()=>--count,
    };
})();

console.log(increase());
console.log(decrease());
console.log(increase());
console.log(increase());
console.log(decrease());
console.log(increase());
console.log(increase());
console.log(increase());









