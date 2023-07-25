
let age1 = 5;
let age2 = '5';

// javascript는 정수,실수를 구분하지 않고 모두 실수로 처리

let num=2;
console.log(typeof num);
console.log(5/num);

// text typeof
let s1 ='str1';
let s2 ="str2";
let s3 =`str3`;// 백틱
console.log(typeof s1);
console.log(typeof s2);
console.log(typeof s3);

let tag = '<ul>\n\t<li>\n\t\t<a href="#">link</a>\n\t</li>\n</ul>';
console.log(tag);

let tag2 = `
<ul>
    <li>
        <a href="#">
            link
        </a>
    </li>
</ul>`;

console.log(tag2);

let userName = '뽀로로';
let userAge = 5;

// let message = '제 이름은 ' + userName+'이고 '+userAge+'살입니다.';
let message = `제 이름은 ${userName}이고 나이는 ${userAge}살입니다`;
console.log(message);


// 논리 타입
let flag = false;

console.log(typeof flag);

// undefined 타입 , null 타입
// undefined = 변수를 만들고 실수로 값을 넣지 않은 상태 (값을 넣지 않았을 때 js의 경우 undefined를 표시해준다)
// null = 변수의 값을 고의적으로 비워둔 상태

let address;

console.log(address);

let address1 = '충남 청양군 고리섬들길';
address1 = null;
console.log(address1);




