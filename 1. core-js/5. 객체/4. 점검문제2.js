/*
- 요구사항
1. 사용자에게 계정을 입력받으세요.
2. 입력된 계정이 존재하는 계정이 아니라면
   "존재하지 않는 회원입니다"를 출력하세요.
3. 계정이 존재한다면 비밀번호를 입력받으세요.
4. 비밀번호가 입력한 아이디에 대응해서 일치한다면
   "xxx님 환영합니다!"을 출력하고 반복문을 탈출하세요.
5. 비밀번호가 다르다면 "비밀번호가 틀렸습니다" 를 출력하세요.
6. 로그인이 성공할때까지 반복하세요.
*/
let userInfo = {
  userList: [{
    account: 'kim1234',
    password: 'kkk1234',
    username: '김두한'
  },
  {
    account: 'park9876',
    password: 'ppp9999',
    username: '박찬호'
  },
  {
    account: 'hong7766',
    password: 'hhh1234',
    username: '홍길동'
  },
  ]
};

// 객체에서 배열 꺼내기
let users = userInfo.userList;

while (true) {
  // 계정명 입력하기
  let inputAccount = prompt(`아이디 입력`);

  let foundUser = null;// 가입된 특정 유저의 정보

  // 일치하는 회원 찾기 
  for (let user of users) {
    if (inputAccount === user.account) {
      foundUser = user;
      break;
    }
  }
  if (foundUser === null) {
    alert(`가입된 유저가 아님`);
    continue;
  }

  //패스워드 검사
  let inputPassword = prompt(`비밀번호 입력`);

  if (inputPassword === foundUser.password) {
    alert(`${foundUser.username}님 로그인 성공`);
    break;
  } else {
    alert(`로그인 실패`);
    continue;
  }
}
