const objArray = [
    { name: 'apple', price: 100 }, // 0 
    { name: 'banana', price: 200 }, // 1    0 1 2  3
    { name: 'grape', price: 300 },  // 2
  ]
  
  // myForEach 를 구현하여 arr.forEach 와 동일한 값이 나오도록 하기.
  function myForEach(arr, callback) {
    for(let i = 0; i< arr.length; i++){
        callback(arr[i]);
    }
}

  
  /**
  { name: 'apple', price: 100 }
  { name: 'banana', price: 200 }
  { name: 'grape', price: 300 }
   */



  objArray.forEach(function (obj) {
    console.log(obj);
  });
  
  myForEach(objArray, function (obj) {
    console.log(obj);
  });

  const objArray2 = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ]
  
  // find를 이용하여 name 이 grape 인 객체를 찾기
  
  const found = objArray2.find(function(item){
    return item.name === "grape";
  });
  console.log(found);
    





  const objArray3 = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ]
  
  // findIndex를 이용하여 name 이 apple 인 객체의 index 찾기
  const found2 = objArray3.findIndex(function(item){
    return item.name === "apple";
  });
  console.log(found);