/*
  Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
     반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/

// 객체로 정수를 받아서 for in를 사용해서 값을 모두 더해주고 평균을 구한 후 그 값을 객체로 저장후 리턴해야함
function calcNumbersTotalAndAverage(...mainNumber) {
    let total = 0;
    for (let i of mainNumber) {
        total += i;
    }
    let average = total/mainNumber.length;
    return {
        total : total,
        avg : average,
    };
}




let result = calcNumbersTotalAndAverage(90, 80, 100, 90); //360과 90이 리턴되어야 함!
console.log(`총합: ${result.total}, 평균: ${result.avg}`);