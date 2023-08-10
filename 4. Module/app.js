/* eslint-disable linebreak-style */

// eslint-disable-next-line quotes
import { $btn} from "./getDOM.JS";
import ABC, {clickHandler as ch} from './event.JS';
// eslint-disable-next-line linebreak-style

// eslint-disable-next-line padded-blocks
const init = ()=>{
  // eslint-disable-next-line no-trailing-spaces
    
  // eslint-disable-next-line indent
    $btn.style.background = 'aqua';
  $btn.addEventListener('click', ch);

  const dog = new ABC('초코', 3);
  dog.info();
};

init();
