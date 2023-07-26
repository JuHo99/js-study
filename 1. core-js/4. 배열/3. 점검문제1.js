
userNumber = [];
let total = 0;
while (true) {
    let inputDate = prompt(`숫자 입력 
    그만 둘 때에는 '그만' 입력`);
    
    if (inputDate === '그만') {
        break
    }
    userNumber.push(+inputDate);
}
for(let i = 0; i<userNumber.length;i++){
    total+=userNumber[i];
}
alert(`입력한 숫자 목록 ${userNumber}
입력한 숫자 총합 ${total}`)
