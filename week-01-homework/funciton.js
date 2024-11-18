// [함수 연습 문제]

// 문제 1: 두 숫자를 더하는 함수를 작성하고 결과를 출력하세요.
function add (a,b){
    return a+b;
    
}
console.log(add);

// 문제 2: 이름을 매개변수로 받아서 "안녕하세요, [이름]님!"을 출력하는 함수를 작성하세요.
function greet(name) {
    console.log(`안녕하세요, ${name}님!`);
}

greet("홍길동");

// 문제 3: 세 개의 숫자 중 가장 큰 수를 반환하는 함수를 작성하세요.
function findMax(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

const maxNumber = findMax(10, 20, 15);
console.log(maxNumber); // 20


// 문제 4: 숫자를 매개변수로 받아 짝수인지 홀수인지 반환하는 함수를 작성하세요.
function zzakhole(num){
    if(num % 2 === 0){
        console.log("짝수입니다");
    }
    else{
        console.log("홀수입니다");
    }
}

// 문제 5: 배열을 매개변수로 받아 모든 요소를 출력하는 함수를 작성하세요.
function Array(arr){
    arr.forEach(element => {
        console.log(element);
        
    });
}
