
// 구구단 출력 

for (let line = 2; line <= 9; line++) {
  console.log(`======= ${line} 단 =======`);
  for (let level = 1; level <= 9; level++) {
    console.log(`${line} * ${level} = ${line * level}`);
  }
  console.log(`====================`);
}

console.log(`----------------------------`);

let cnt = 0;
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    for (let k = 0; k < 4; k++) {
      console.log(`(${i} , ${j} , ${k})`);
      cnt++;
    }
  }
}

console.log(`총 반복 횟수 ${cnt}`);