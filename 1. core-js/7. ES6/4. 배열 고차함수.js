
const userList = [{
    account: 'abc1234',
    userName: '대길이',
    job: '추노',
    address: '서울',
    hobbys: ['수영', '축구', '테니스']
},
{
    account: 'banana',
    userName: '빠나나',
    job: '과일',
    address: '서울',
    hobbys: ['푸드파이팅', '테니스']
},
{
    account: 'park1234',
    userName: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobbys: ['족구', '축구', '테니스', '영화감상']
},
{
    account: 'fire',
    userName: '불꽃남자카리스마',
    job: '게이머',
    address: '서울',
    hobbys: ['독서', '테니스']
},
];
function line() {
    console.log(`====================================`);
}
// 배열 고차함수 
// forEach ( ()=>{}  ) =  배열의 요소를 반복하면서 하나씩 소비 (콜백함수 사용)  -  for of문을 대체 가능함
userList.forEach((user) => { console.log(`제 이름은 ${user.userName}입니다 ${user.address}에 살고있습니다`); });

const foodList = [`짜장면`, `제육볶음`, `치킨`];
foodList.forEach(food => console.log(`${food}맛있어요`))

console.log(`====================================`);

// filter( ( )=>{} )  = 특정 조건에 의해 필터링된 새로운 배열을 반환 (콜백함수 사용)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArray = numbers.filter(n => n % 3 === 0);
console.log(newArray);

// 회원중 아이디가 abc1234 인 사람을 필터링
console.log(`====================================`);
const newUserList = userList.filter(usr => usr.account === `abc1234`);
console.log(newUserList);

// map( () => {} )  = 특정 배열에서 특정 조건에 맞는 값들만 따로 모아서 새롭게 매핑한 배열을 반환 (콜백함수 사용) - 배열의 구성원 각각에 접근해서 작용하는 것

line();

const doubler = numbers.map(n => n ** 2);
console.log(doubler);

line();

const plusTwo = numbers.map(n => n + 2);
console.log(plusTwo);

line();

const firstHobby = userList.map(u => u.hobbys[0]);
console.log(firstHobby);

line();
// 회원 목록에서 이름과 주소만 추출 

const prettierUserList = userList.map(u => {
    return {
        userName: u.userName,
        addr: u.address
    }; // 객체값을 받아서 리턴하기 위해서 중괄호를 축약하지 못하고 그냥 사용함
});

console.log(prettierUserList);



line();

const appleBasket = [{
    color: 'green',
    sweet: 13
},
{
    color: 'red',
    sweet: 14
},
{
    color: 'red',
    sweet: 11
},
{
    color: 'green',
    sweet: 6
},
{
    color: 'green',
    sweet: 7
},
{
    color: 'green',
    sweet: 9
},
];
// 사과중에 녹색이면서 당도가 9 이상인 사과만 선별해서 '이 사과는 xxx색이며 당도는 xxx입니다'
// 라는 문자열이 매핑되어 있는 배열을 리턴
console.log(appleBasket.length);

const mappedApples = appleBasket
    .filter(apple => apple.color === `green` && apple.sweet >= 9)//색과 당도를 걸러냄
    .map(apple => `이 사과는 ${apple.color}색이며 당도는 ${apple.sweet}입니다`) //  배열에 문구를 매핑
    .forEach(a => console.log(a)); //하나씩 소비 

// 회원 목록에서 서울에 사는 회원들의 두번째 취미만 배열에 모아서 xxx회원님의 2번째 취미는 xxx입니다를 반복해서 출력
line();

userList // [{5},{5},{5},{5}]
.filter(usr => usr.address ===`서울`)// [{5},{5},{5}]
// .map(usr => usr.hobbys[1]) // [`축구`,`테니스`,`테니스`]
.map(usr => {
    return{
        name : usr.userName,
        secondHobby : usr.hobbys[1],
    };
})
.forEach(u =>console.log(`${u.name}회원의 2번재 취미는 ${u.secondHobby}입니다`));


