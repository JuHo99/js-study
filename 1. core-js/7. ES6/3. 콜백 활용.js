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

// 4명중 hobbys가 2개인 사람들 필터링 => 모아서 배열에 다시 담기

function filterByHas2Hobby() {
    const filteredArray = [];
    for(let user of userList){
        if(user.hobbys.length === 2 ){
            filteredArray.push(user);
        }
    }
    return filteredArray;
}

const hobby2 =  filterByHas2Hobby();
// console.log(hobby2);

// 서울사는 사람들만 필터링해서 새로운 배열에 담기

function filterUserLivedInSeoul() {
    const filteredArray = [];
    for(let user of userList){
        if(user.address === `서울` ){
            filteredArray.push(user);
        }
    }
    return filteredArray;
}

const address2 = filterUserLivedInSeoul();
// console.log(address2);

//콜백을 이용한 필터링 함수
function filter(condition) {
    const filteredArray = [];
    for(let user of userList){
        if(condition(user) ){
            filteredArray.push(user);
        }
    }
    return filteredArray;
}

const results1 = filter((user)=>user.hobbys.length>=3);
// console.log(results1);


const results2 = filter((user)=>user.address === `서울` && user.job === `게이머`);
console.log(results2);

// 회원정보중 회원 이름만 전부 모아서 배열에 담기  - 매핑

function map(callback) {
    const mappedArray = [];//이름을 받을 배열
for(const user of userList){//userList의 데이터를 user에 대입하는 걸 userList의 길이만큼 반복 실행
    mappedArray.push(callback(user)); //callback 함수를 불러와서 조건을 걸어준다
}
return mappedArray;
}
console.log(`==========================`);
const nameList = map(user => user.userName);
console.log(nameList);

const addressList = map(user => user.address);//user를 받아서 user.address를 리턴해준다 
console.log(addressList);



