
const URL = "http://localhost:5000/todos";
const $addForm = document.querySelector(".todo-insert");
const $workToUl = document.querySelector('.todo-list');

fetch(URL)
.then(res => res.json())
.then(workToList => {
    workToList.forEach(({id,done,text}) => {
        const $workToLi = document.createElement('li');
        $workToLi.classList.add('todo-list-item')
        $workToLi.dataset.Id = id;
        $workToLi.innerHTML = `
        <label class="checkbox">
            <input type="checkbox">
            <span class="text">${text}</span>
        </label>
        <div class="modify"><span class="lnr lnr-undo"></span></div>
        <div class="remove"><span class="lnr lnr-cross-circle"></span></div> 
    `;
        $workToUl.appendChild($workToLi);
    });
  });


  $addForm.addEventListener("add", (e) => {
    e.preventDefault();
    const payload = {
      text: document.getElementById("todo-text").value,
      done: false,
    };
    fetch(URL,{
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(payload)
    })
    .then(res => {
      if(res.status===200 || res.status ===201){
        alert('등록성공');
      }else{
        alert('등록실패');
      }
    });
  });

