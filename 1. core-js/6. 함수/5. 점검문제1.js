/* 
Q. n의 약수의 개수를 구하기
1. 정수 n을 전달받아 n의 약수들을 출력하고 
약수의 개수를 리턴하는 함수 calcDivisor를 정의하세요.
2. 약수의 출력은 함수 내부에서 이뤄져야 합니다.
3. 힌트) 전달받은 n을 1부터 n까지 지속적으로 나누어
 나누어 떨어졌을 시 약수의 개수 카운트를 1증가시키고 출력.
*/

// 호출부

// number을 받아서 for 문으로 i = 1 부터 나눠서 나머지 값이 0일 경우만 저장해서 돌려주는 calcDivisor 함수 생성

function calcDivisor(mainNumber) {// 약수를 구할 mainNumber 을 받는 함수 작성
    let disCount = 0; // 약수의 갯수를 알려주는 변수
    let divisor = []; // 약수를 저장하는 배열
    for(i = 1;i <= mainNumber;i++){  // 1부터 mainNumber까지 i를 1씩 더해주는 for문 
        if (mainNumber % i  === 0){ // mainNumber을 i로 나눠서 0이 나오는 값을 걸러넴
            divisor.push(i) // divisor에 약수(i)를 저장
            disCount++;  // 약수의 갯수를 카운트 
        }
    }   
    console.log(`${mainNumber}의 약수 : ${divisor}`);  // 약수를 받은 배열을 출력
    return disCount; // 약수의 갯수를 센 변수를 리턴
}


let divCount = calcDivisor(20); // 20을 약수를 구하는 함수에 넣음
console.log(`약수의 개수: ${divCount}개`);  //  출력