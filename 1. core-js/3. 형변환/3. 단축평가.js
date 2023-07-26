
/*
단축 평가 

    && 연산자
    t && t  > t
    t && f  > f
    f && t  > f
    f && f  > f
    첫번째  falsy를 반환

    || 연산자
    t || t  > t
    t || f  > f
    f || t  > f
    f || f  > f
    첫번째 truthy를 반환
*/
console.log(`hello` || `world`);
console.log(0 || `안녕`);

console.log(`HELLO` || `WIRLD`);
console.log(null || `메롱`);

/*
    실사용 예시
    <h1>월컴 투 홈페이지</h1>
    isLogin && <h2>xxx님 환영합니다</h2>

    coupon && sendCoffee()
*/