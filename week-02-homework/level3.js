const objArray = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ]
  
  // myFind 를 구현하여 arr.find 와 동일한 값이 나오도록 하기.
  function myFind(arr, callback) {
    for(let i = 0; i<arr.length; i++){
            if(callback(arr[i])){
                return arr[i];
            }
                
        }     
    }
    
  const result3 = objArray.find(function (obj) {
    return obj.name === 'banana';
  });
  
  const result4 = myFind(objArray, function (obj) {
    return obj.name === 'banana';
  });
//   console.log(result3 === result4); // true

  const objArray2 = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ]
  
  // myFindIndex 를 구현하여 arr.findIndex 와 동일한 값이 나오도록 하기.
  function myFindIndex(arr, callback) {
    for(let i = 0; i<arr.length; i++){
        if(callback(arr[i])){
            return i;
             
        }
    }
    
  }
  
  const result1 = objArray.findIndex(function (obj) {
    return obj.name === 'banana'; // 1
  });
  
  const result2 = myFindIndex(objArray, function (obj) {
    return obj.name === 'banana'; // name 바나나 price 200
  });
  console.log(result1 === result2); // true


  const objArray4 = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ]
  // filter 를 이용하여 price가 200 이상인 객체 filter
const found4 = objArray4.filter(function(item){
    return item.price >=200;
});
console.log(found4);

const objArray5 = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ]
  // map을 이용하여 price값만 모아둔 배열 만들기
const found5 = objArray5.map(function(item2){
    return item2.price;
});
console.log(found5);