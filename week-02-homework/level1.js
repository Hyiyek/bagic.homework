const objArray = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ]
  

  objArray.forEach(element => {
    console.log(element.name);
  });
  // forEach를 이용하여 objArray의 name을 모두 출력
  // apple
  // banana
  // grape



  // myIndexOf를 구현하여 arr.indexOf와 동일한 값이 나오도록 하기.
const arr2 = [1, 2, 3, 4, 5];
function myIndexOf(arr, value) {
    for(let i = 0; i<arr.length; i++){
        if(arr[i]=== value){
            return i;
        }
    }
}

const index1 = arr2.indexOf(3); // 2 
const index2 = myIndexOf(arr2, 3); // 2
console.log(index2);

console.log(index1 === index2); // true




// myIncludes를 구현하여 arr.myIncludes와 동일한 값이 나오도록 하기.
const arr3 = [1, 2, 3, 4, 5];
function myIncludes(arr, value) {
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === value){
            return true;     
        }
    }
}
// console.log(includes2);
const includes1 = arr3.includes(3); // true
const includes2 = myIncludes(arr3, 3); // true
console.log(includes2); // true
console.log(includes1 === includes2); // true