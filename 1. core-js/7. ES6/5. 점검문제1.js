const traders = [
    {
      trader: {
        name: "김철수",
        city: "대전",
      },
      year: 2023,
      value: 500000,
    },
    {
      trader: {
        name: "박영희",
        city: "서울",
      },
      year: 2022,
      value: 600000,
    },
    {
      trader: {
        name: "김철수",
        city: "대전",
      },
      year: 2022,
      value: 1200000,
    },
    {
      trader: {
        name: "박영희",
        city: "서울",
      },
      year: 2023,
      value: 650000,
    },
    {
      trader: {
        name: "뽀로로",
        city: "부산",
      },
      year: 2023,
      value: 800000,
    },
    {
      trader: {
        name: "루피",
        city: "대전",
      },
      year: 2022,
      value: 780000,
    },
  ];
  
  // 연습 1: 2022년에 발생한 모든 거래를 찾아 
  //   거래자 정보(이름, 도시)를 배열에 매핑해주세요

  // 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요. 

  // 연습 3: 대전에 근무하는 
  // 모든 거래자를 찾아 거래자정보를 배열에 매핑해주세요.
  
  // 연습 4: 모든 거래자의 이름을 배열에 모아주세요.
  
  // 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.
  
  function line() {
    console.log(`===========================`);
  }

  const ex1 = traders
  .filter(trs => trs.year ===2022)
  .map(traderDate => {
    return{
        name : traderDate.trader.name,
        city : traderDate.trader.city,
    };
  });
console.log(ex1);

line();

const ex2 = traders
.map(tradersCityAll => tradersCityAll.trader.city);

console.log(ex2);
const cities = [...new Set(ex2)];
// Set으로 중복 제거( 집합개념 ) - 배열이 풀리기 때문에 수정이 안 됨
console.log(cities);

line();

const ex3 = traders
.filter(tradersCity => tradersCity.trader.city === `대전`)
.map(trader => trader.trader);

console.log(ex3);

line();

const ex4 =traders
.map(tradersName => tradersName.trader.name)

console.log(ex4);

line();

let total = 0;

// const ex5 = traders
// .filter(tradersCity => tradersCity.trader.city ===`서울`)
// .map(tradersValue => tradersValue.value)
// .forEach(totalValue =>total += totalValue);

// console.log(`서울의 거래 총 액 : ${total}`);

line();

// reduce함수 :  배열을 반복해서 각 요소에 콜백함수를 적용한 결과를 누적하는 함수

const ex5 = traders
.filter(tradersCity => tradersCity.trader.city ===`서울`)
.reduce((acc,curr) => acc+curr.value,0);


console.log(`서울의 거래 총 액 : ${total}`);





  