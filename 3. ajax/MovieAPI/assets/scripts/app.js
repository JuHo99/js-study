const URL = 'http://localhost:5000/todos';

const $todoList = document.querySelector('.todo-list');



// step1. db.json에 있는 todos를 화면에 렌더링하기

const fetchTodos = (url, method = 'GET', payload = null) => {
  const requestInit = {
    method: method,
    headers: { 'Content-Type': 'application/json' }
  };
  if (payload) requestInit.body = JSON.stringify(payload);

  return fetch(url, requestInit);
};

const renderRestTodo = todoList => {
  // 총 할 일 개수
  const totalTodos = todoList.length;
  // 완료된 할 일의 개수
  const restTodos = todoList.filter(todo => todo.done).length;

  // 렌더링 처리
  const $rest = document.querySelector('.rest-todo');
  if (totalTodos > 0) {
    $rest.textContent = `( ${restTodos} / ${totalTodos} )`;
  }
};



// 화면에 todos를 렌더링하는 함수
const renderTodos = (todoList) => {

  // 할 일 완료 갯수 렌더링
  renderRestTodo(todoList);

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
const insertTodo = async function (payload) {
  const res = await fetchTodos(URL, 'POST', payload)
  if (res.status === 200 || res.status === 201) {
    console.log('등록 성공');
  } else {
    console.log('등록 실패');
  }
}


const addTodoMouseHandler = e => {
  // 1. 클릭 확인
  // console.log('클릭');
  // 2.클릭시 인풋 텍스트 읽기
  const $textInput = document.getElementById('todo-text');
  console.log($textInput);
  const inputText = $textInput.value;
  // 3. 데이터를 보내서 서버에 저장해야함 ( fetchTodos )
  // payload를 API스펙에 맞게 만들어서 보내야함
  const payload = {
    text: inputText,
    done: false
    // id는 자동생성
  }

  // inputText를 입력하지 않았을 때 
  if (inputText.trim() === '') {
    // alert('텍스트를 입력하세요');
    $textInput.style.background = 'red';
    // $textInput.value = '공백을 입력하지 마세요';
    $textInput.setAttribute('placeholder', '공백은 허용되지 않습니다')
    return;
  }

  insertTodo(payload);


};

// 생성 엔터 이벤트
const addTodoKeyHandler = e => {

  if (e.key !== 'Enter') return
  const $textInput = document.getElementById('todo-text');
  console.log($textInput);
  const inputText = $textInput.value;
  const payload = {
    text: inputText,
    done: false
  }

  // inputText를 입력하지 않았을 때 
  if (inputText.trim() === '') {
    // alert('텍스트를 입력하세요');
    e.preventDefault();
    $textInput.style.background = 'red';
    // $textInput.value = '공백을 입력하지 마세요';
    $textInput.setAttribute('placeholder', '공백은 허용되지 않습니다')
    return;
  }

  insertTodo(payload);
};

const removeTodo = async (id) => {
  const res = await fetchTodos(`${URL}/${id}`, 'DELETE')
  if (res.status === 200) {
    console.log('삭제 성공');
  } else {
    console.log('삭제 실패');
  }
}

// 삭제버튼 클릭 이벤트
const deleteTodoHandler = e => {
  if (!e.target.matches('.remove span')) return;
  if (!confirm('삭제 하시겠습니까')) return;
  // 클릭한 할 일을 지우기 위해 id값을 가져와야 함
  // console.log( (1)e.target (2).closest('.todo-list-item')(3).dataset.id);
  const id = e.target.closest('.todo-list-item').dataset.id;
  // console.log(id);
  removeTodo(id);
}


// 체크박스 체크 이벤트
const checkTodoHandler = e => {
  // console.log('체크박스',e.target);
  // 1. 서버의 수정요청을 보내서 done 값을 반대값으로 수정
  console.log(e.target.checked); //checked는 현재 상태를 표시
  const id = e.target.closest('.todo-list-item').dataset.id;

  fetchTodos(`${URL}/${id}`, 'PATCH', { done: e.target.checked });
};



// ===================== 내가 만든 코드==========================
/*
// 수정 버튼 첫 클릭 이벤트
const changeTextTodoHandler = e => {
  // 1. 수정 버튼이 눌렸는 지 체크
  if (!e.target.matches('.modify span')) return;
  // console.log('수정버튼');
  const checkboxText = e.target.closest('.todo-list-item').querySelector('.checkbox .text');
  // console.log(checkboxText);

  const modify = (checkboxText) => {
    // 수정할 span 요소 선택
    const spanElement = checkboxText;
    // span 요소 내용 가져오기
    const currentText = spanElement.textContent;

    // input 요소 생성 및 설정
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.classList.add('modify-input');
    inputElement.value = currentText;

    // span 요소 대체
    spanElement.parentNode.replaceChild(inputElement, spanElement);
    
    inputElement.focus();
  };
  
  e.target.classList.replace("lnr-undo", "lnr-checkmark-circle")

  modify(checkboxText);

}


modifyTextTodoHandler = e => {
  if (!e.target.matches('span.lnr-checkmark-circle')) return;
  inputText = e.target.closest('.todo-list-item').querySelector('.checkbox .modify-input');
  console.log(inputText.value);
  const id = e.target.closest('.todo-list-item').dataset.id;
  const originText = fetch(`${URL}/${id}`).then(res =>res.json()).then(body => body.text).then(text => text)
  // console.log(originText);
  if (inputText === originText){
    fetchTodos(`${URL}/${id}`, 'PATCH', { text :inputText.value  ,done: false });
  }
}
 */

// 수정 이벤트
const enterModifyMode = ($undo) => {
  // 아이콘 변경 
  $undo.classList.replace("lnr-undo", "lnr-checkmark-circle")

  // $undo 근처에 있는 span.text를 가져와야함
  const $textSpan = $undo.closest('.todo-list-item').querySelector('.checkbox .text');

  // span을 input으로 바꿔줘야함
  //  -- input을 생성
  const $modInput = document.createElement('input');
  $modInput.classList.add('modify-input');
  $modInput.setAttribute('type', 'text');
  $modInput.value = $textSpan.textContent;
  //  -- span을 생성한 input으로 교체
  const $label = $textSpan.parentNode;
  $label.replaceChild($modInput, $textSpan);

};

const modifyTodo = ($checkMark) => {
  const $li = $checkMark.closest('.todo-list-item');
  const id = $li.dataset.id;
  const newText = $li.querySelector('.modify-input').value;

  fetchTodos(`${URL}/${id}`, 'PATCH', {
    text: newText
  })

}



const modifyTodoHandler = e => {
  if (e.target.matches('.modify span.lnr-undo')) {
    enterModifyMode(e.target); // 수정 모드
  } else if (e.target.matches('.modify span.lnr-checkmark-circle')) {
    modifyTodo(e.target); // 서버에 수정 요청
  } else {
    return;
  }
};




// step2. 할 일 추가 기능 만들기
const $addBtn = document.getElementById('add');
$addBtn.addEventListener('click', addTodoMouseHandler)
const $addText = document.getElementById('todo-text');
$addText.addEventListener('keydown', addTodoKeyHandler)


// step3. 할 일 삭제 기능 만들기
$todoList.addEventListener('click', deleteTodoHandler);

// step4. 할 일 완료 체크 처리
$todoList.addEventListener('change', checkTodoHandler);
// change로 설정하면 상태가 바뀔 때만 이벤트가 발생한다

// step5. 할 일 수정 기능 만들기

$todoList.addEventListener('click', modifyTodoHandler);

/*
// ========================= 내 코드

$todoList.addEventListener('click', changeTextTodoHandler);
// span을 input으로 바꿔주는 핸들러 
$todoList.addEventListener('click', modifyTextTodoHandler);
*/







// =========== 앱 실행 =========== //

const init = () => {
  fetchTodos(URL)
    .then(res => res.json())
    .then(todos => {
      renderTodos(todos);
    });
};

init();