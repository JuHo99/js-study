
let pets = [`멍멍이`,`야옹이`,`쩝쩝이`];

console.log(pets);

pets.push(`징징이`);
pets.push(`어흥이`,`거북이`,`콩콩이`);

console.log(pets);

let r1 = pets.pop();
pets.pop();
let r3 = pets.pop();
console.log(pets);
console.log(`r1 : ${r1}`);
console.log(`r3 : ${r3}`);


pets.unshift(`비둘기`);
console.log(pets);
