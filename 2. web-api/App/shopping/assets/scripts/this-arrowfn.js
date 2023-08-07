
const dog = {
    name: '뽀비',
    regularFn:function () {
        console.log('regularFn : ',this);//자기자신
    },
    arrowFn: () =>{
        console.log('arrowFn : ',this);//윈도우
    }
}


dog.regularFn();
dog.arrowFn();

console.log(`======================`);

const cat = {
    name : '나비',
    introduce : function () {
        console.log(`intro this : `,this);
        setTimeout(() => {
            console.log(`setTime this : `,this);
            console.log(`안녕 제 이름은 ${this.name}입니다`);
        },2000)
        
    }
}


cat.introduce();


$modal.addEventListener('click',function (e) {
    console.log(this); // $modal
    $ok.addEventListener('click',function (e) {
        console.log(this); // $ok
    });
    $cancel.addEventListener('click', (e) => {
        console.log(this);// $modal
    });
});