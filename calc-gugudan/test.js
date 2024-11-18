// 필요한 모듈을 불러옵니다.
import readlineSync from 'readline-sync';

// 프로그램 시작
function main() {
    console.log("1. 사칙연산계산기");
    console.log("2. 구구단출력기");

    const choice = readlineSync.question("원하는 번호를입력해주세요:");
    if(choice === "1"){
      calculator();
    }
    else if(choice === "2"){
      printMultiplicationTable();
    }
  // 입력에 따라 해당 기능을 실행합니다.
}

// 사칙연산 계산기 함수
function calculator() {
  const add = readlineSync.question("+,-,*,/,%");
  const a = readlineSync.question("첫번째숫자를입력해주세요:");
  const b = readlineSync.question("두번째숫자를입력해주세요:");
  let result = 0;
  switch(add){
    case "+":
      result = Number(a)+Number(b);
      break;
    case "-":
      result = Number(a)-Number(b);
      break;
    case "*":
      result = Number(a)*Number(b);
      break;
    case "/":
      result = Number(a)/Number(b);
      break;
    case "%": 
      result = Number(a)%Number(b);
      default:
        console.log("숫자가아닙니다");
  }
  console.log("합계:"+result);
}


// 구구단 출력 함수
function printMultiplicationTable() {
  for(let i = 1; i<=9; i++){
    for(let j =1;j<=9; j++){
      console.log(i+"x"+ j +"="+(i*j));
    }
  }
}

// 프로그램 실행
main();
