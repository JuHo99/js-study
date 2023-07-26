// random정수 생성

// 난수 생성
//  - Math.random = 0.0이상 1.0미만의 수 생성
//  - Math.random *10의 배수 로 원하는 구간을 정할 수 있다
//  - Math.floor(Math.random()*100)로 소숫점 아래의 숫자를 버릴 수 있다

// x이상 y이하의 랜덤 정수 생성 공식
//  - Math.floor(Math.random( )*( y - x + 1 ))+x;
let rn = Math.floor(Math.random()*100)+1;
console.log(rn);