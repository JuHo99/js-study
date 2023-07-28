const NOT_FOUND = -1;
let foods=  [`짬뽕`, `초밥`,`김치찌개`,`족발`];

//배열에서 특정 요소가 어디 인덱스에 있는지 찾아서 확인
function myIndexOf(array , searchElement){
    for(let i =0 ; i<array.length ; i++){
        if (searchElement === array[i]) {
            return i;
        }
        return NOT_FOUND;
    }
}

//배열에서 특정요소의 존재여부 확인 
function myINcludes(array,searchElement) {
    return myIndexOf(array,searchElement)!== NOT_FOUND
}


let index = myIndexOf(foods,`짬뽕`);
console.log(`찾은 인덱스 : ${index}`);
let isPresent = myINcludes(foods,`짬뽕`);
console.log(`존재 여부 : ${isPresent}`);
