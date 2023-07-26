
let members = [`유노윤호`,`최강창민`,`영웅재중`,`믹키유천`,`시아준수`];

while (true) {
    changeName = prompt(`수정할 맴버의 이름을 적어주세요
현재 맴버 : ${members}`);
        let index = members.indexOf(changeName);
        if (index === -1) {
            alert(`틀린 이름입니다 정확한 맴버의 이름을 입력해주세요`);
            continue;
        }
        newName = prompt(`수정할 맴버의 새로운 이름을 적어주세요`)
        members.splice(index,1,newName);
        break;
}
alert(`현재 맴버 : ${members}`)