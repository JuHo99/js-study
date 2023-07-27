
let members = [`유노윤호`,`최강창민`,`영웅재중`,`믹키유천`,`시아준수`];

while (true) {
    deleteMember = prompt(`삭제할 맴버의 이름을 적어주세요
현재 맴버 : ${members}`);
    let index = members.indexOf(deleteMember);
    if (index === -1) {
        alert(`틀린 이름입니다 정확한 맴버의 이름을 입력해주세요`);
        continue;
    }
    members.splice(index,1);
    if (members.length === 0) {
        break;
    }
}
alert(`모든 맴버가 삭제되었습니다.`)