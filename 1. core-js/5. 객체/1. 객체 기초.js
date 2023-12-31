let myPet = {
  name: "뽀삐",
  age: 3,
  favorite: [`산책`, `간식`],
  kind: `진돗개`,
  injection: true
};
let yourPet = {
  name: "콩순이",
  kind: `블랙러시안`,
  age: 4,
  favorite: [`낮잠`, `털뭉치`],
  injection: true
};

console.log(typeof myPet);
console.log(typeof  yourPet.age);
console.log(typeof  yourPet.favorite);


// 객체에 저장된 데이터 (프로퍼티) 참조

console.log(myPet.kind);
console.log(yourPet.kind);
console.log(myPet.name);
console.log(yourPet.favorite);

myPet.favorite.push(`꼬리흔들기`);

console.log(myPet);

//키값쌍 : 프로퍼티
//  프로퍼티 참조 2

console.log(`====================`);

console.log(myPet[`injection`]);

let myPetName = `name`;
console.log(myPet[myPetName]);

