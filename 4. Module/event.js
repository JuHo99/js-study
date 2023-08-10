// getDOM에서 가져온 것
import { $p as $para } from "./getDOM.JS";

// event에서 만든 것
const $p = document.querySelector('p');

export const clickHandler = e =>{
    $para.textContent = '하이';
}

export default class {
    constructor(name,age){
        this.name = name;
        this.age =age;
    }
    instanceof(){
        alert(`${this.name} : 저는 ${this.age}살 입니다`)
    }
}




