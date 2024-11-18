// [조건문 연습 문제]

// 문제 1: 숫자를 입력받아 짝수인지 홀수인지 출력하세요.
let a = 20;

if(a%2===0){
    console.log("짝수입니다");
}
else{
    console.log("홀수입니다")
}


// 문제 2: 점수를 입력받아 학점을 출력하세요.
// 90점 이상 A, 80점 이상 B, 70점 이상 C, 그 외 D
let score = 80;
if(score>=90){
    console.log("a");

}
else if(score>=80){
    console.log("b");
}
else if(score >= 70){
    console.log("c");

}
else{
    console.log("d");
}


// 문제 3: 나이를 입력받아 성인인지 미성년자인지 출력하세요.
let age = 25;

if(age>20){
    console.log("성인입니다");
}
else{
    console.log("미성년자입니다");
}

// 문제 4: switch문을 사용하여 요일을 출력하세요.
 function dday(day){
    switch (day) {
        case 1:
            console.log("일요일");
            break;
        case 2:
            console.log("월요일");
            break;
        case 3:
            console.log("화요일");
            break;
        case 4:
            console.log("수요일");
            break;
        case 5:
            console.log("목요일");
            break;
        case 6:
            console.log("금요일");
            break;
        case 7:
            console.log("토요일");
            break;
        default:
            console.log("잘못된 입력입니다. 1에서 7 사이의 숫자를 입력하세요.");
            break;
    }
 }
console.log(1);

// 문제 5: 두 숫자를 비교하여 큰 수를 출력하세요.
let c = 20;
let b = 30;
if(c < b ){
    console.log("더큰수는",+ b);
}



