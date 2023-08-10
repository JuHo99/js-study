import { $btn } from "./getDOM.JS";
import ABC, { clickHandler as ch } from "./event.JS";


const init = ()=>{
    $btn.style.background = 'aqua'
    $btn.addEventListener('click',ch);

    const dog = new ABC('초코',3);
    dog.init();
};

init();


