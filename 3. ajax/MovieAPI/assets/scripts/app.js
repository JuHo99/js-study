const URL = 'http://localhost:5000/todos';

const $todoList = document.querySelector('.todo-list');



// step1. db.json에 있는 todos를 화면에 렌더링하기

const fetchTodos = (url, method='GET', payload=null) => {
  const requestInit = {
    method: method,
    headers: { 'Content-Type': 'application/json' }
  };
  if (payload) requestInit.body = JSON.stringify(payload);

  return fetch(url, requestInit);
};

// 화면에 todos를 렌더링하는 함수
const renderTodos = (todoList) => {
  // li태그의 템플릿을 가져옴
  const $liTemplate = document.getElementById('single-todo');

  todoList.forEach(({ id, text, done }) => {
    const $newLi = document.importNode($liTemplate.content, true);
    $newLi.querySelector('li').dataset.id = id; // data-id 속성 부여
    $newLi.querySelector('.text').textContent = text;

    // 체크박스 가져오기
    const $checkbox = $newLi.querySelector('.checkbox input[type=checkbox]'); 
    //class가 checkbox의 자식인 input중 타입이 checkbox인 것을 $checkbox에 넣기
    $checkbox.checked = done;
    // checked의 

    done && $checkbox.parentNode.classList.add('checked');

    $todoList.appendChild($newLi);
  });
};



// =========== 이벤트 관련 함수 =========== //

// 생성 버튼 클릭 이벤트
const addTondoHandler = e =>{
  // 1. 클릭 확인
  // console.log('클릭');
  // 2.클릭시 인풋 텍스트 읽기
  const $textInput = document.getElementById('todo-text');
  console.log($textInput);
  const inputText = $textInput.value;
  // 3. 데이터를 보내서 서버에 저장해야함 ( fetchTodos )
  // payload를 API스펙에 맞게 만들어서 보내야함
  const payload = {
    text : inputText,
    done: false
    // id는 자동생성
  }
  fetchTodos(URL,'POST',payload)
  .then(res =>{
    if (res.status ===200 || res.status ===201) {
      console.log('등록 성공');
    }else{
      console.log('등록 실패');
    }
  })
};

// 삭제버튼 클릭 이벤트
const deleteTodoHandler = e => {
  if (!e.target.matches('.remove span')) return;
  // 클릭한 할 일을 지우기 위해 id값을 가져와야 함
  // console.log( (1)e.target (2).closest('.todo-list-item')(3).dataset.id);
  const id = e.target.closest('.todo-list-item').dataset.id;
  // console.log(id);
  fetchTodos(`${URL}/${id}`,'DELETE')
  .then(res =>{
    if (res.status ===200) {
      console.log('삭제 성공');
    }else{
      console.log('삭제 실패');
    }
  })

}





// step2. 할 일 추가 기능 만들기

const $addBtn = document.getElementById('add');
$addBtn.addEventListener('click',addTondoHandler)


// step3. 할 일 삭제 기능 만들기

$todoList.addEventListener('click',deleteTodoHandler);



// =========== 앱 실행 =========== //

const init = () => {
  fetchTodos(URL)
    .then(res => res.json())
    .then(todos => {
      renderTodos(todos);
    });
};

init();