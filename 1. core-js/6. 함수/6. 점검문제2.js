/*
  Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
     반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/

// 객체로 정수를 받아서 for in를 사용해서 값을 모두 더해주고 평균을 구한 후 그 값을 객체로 저장후 리턴해야함
function calcNumbersTotalAndAverage(...mainNumber) {// 정수를 받을 때 mainNumber을 배열로 받음
    let total = 0;  // mainNumber의 값을 모두 더해주는 총합
    for (let i of mainNumber) { // mainNumber의 값을 그 길이만큼 반복하는 for of문
        total += i; // mainNumber의 값이 들어있는 i를 total에 total+i를 해서 넣어줌
    }
    let average = total/mainNumber.length; // total에 있는 총합을 mainNumber의 길이만큼 나눠서 평균을 저장
    return { // total과 avg를 리턴해줌
        total , //리턴값과 name이 같을 경우 : 을 생략 가능함
        avg : average,
    };
}

let result = calcNumbersTotalAndAverage(90, 80, 100, 90); //360과 90이 리턴되어야 함!
console.log(`총합: ${result.total}, 평균: ${result.avg}`);