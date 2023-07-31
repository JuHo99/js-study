
line = ()=>{console.log(`======================================`);};

const emp = {
    empName : `뽀로로`,
    age : 4,
    hireDate : `2020-01-01`,
    birthDay : `2020-01-01`,
};

const {empName , birthDay ,age} = emp;

console.log(`내 이름은 ${empName}이고, 나이는 ${age}살 입니다. 그리고 생일은 ${birthDay}입니다.`);

const {empName :en , birthDay :bd ,age:a} = emp;

line();
console.log(`제 이름은 ${en}이고, 나이는 ${a}살 입니다. 그리고 생일은 ${bd}입니다.`);

line();
const {birthDay:bDay,...others} = emp;
console.log(others);

line();
// 객체 복사
const copyEmp = {
    ...emp,
    address : `청양군`,
    hobbies : [`산책`,`수영`],
    age : 17,
};
copyEmp.empName = `잔망루피`;

console.log(emp);
line();
console.log(copyEmp);

line();






