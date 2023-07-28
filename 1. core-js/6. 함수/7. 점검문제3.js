/*
1. 키(cm)와 몸무게(kg)을 인수로 전달받아 
2. bmi지수를 계산하여 반환함과 동시에 
3. bmi가 25.0이상이면 "당신은 과체중입니다." 
 18.5이하면 "당신은 저체중입니다." 
 나머지는 "당신은 정상체중입니다."를 출력하는 
 CalcBMI라는 함수를 정의하고 호출하세요. 
# bmi 계산식 : 몸무게(kg) / (키(m) * 키(m)) 
# 출력 예시: 
"키 -> 178.4cm, 체중-> 78.2kg의 체질량지수는: 24.57입니다"
*/
function calcBMI(h,w) { 
    let bmi = w/(h/100*h/100); // bmi 구하는 공식
    if(bmi >25.0){
        console.log(`당신은 과체중입니다`);
        return bmi;
    }else if(bmi <18.5){
        console.log(`당신은 저체중입니다`);
        return bmi;
    }else{
        console.log(`당신은 정상체중입니다`);
        return bmi;
    }
}

// h와 w를 받아서 calcBMI함수를 호출해 BMI값을 저장해서 리턴해준다
let h = 178.4,
  w = 78.2;
let myBmi = calcBMI(h, w); // 저장된 h,w 변수의 값을 calcBMI 함수에 넣어줌

console.log(`키 -> ${h}cm, 체중 -> ${w}kg의 체질량지수는 ${myBmi.toFixed(2)}입니다.`);
//소수점 아래의 숫자를 정리해주는 .toFixed(2)를 사용해 소수점 2번째 자리까지만 나오게 표시


