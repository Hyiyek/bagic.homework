const objArray = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ]
  
  // myFilter 를 구현하여 arr.filter 와 동일한 값이 나오도록 하기.
  function myFilter(arr, callback) {
    let add = [];
    for(let i = 0; i< arr.length; i++){  // return같은경우는 반환하는거기때문에 add.push 코드이후로 return 하면 요소를바로반환한다
        if(callback(arr[i])){
            add.push(arr[i]);  
        }     
    } 
    return add;  
}   
       
// callback = abc.price >= 200 ;



  const result4 = objArray.filter(function(abc){
    return abc.price >=200;  // abc라는 매개변수 이름 프라이스가 200이상인것만 출력된다 banana grape 
  })

  const result5 = myFilter(objArray,function(abc){
    return abc.price >=200; 
  });

  console.log(result4);
  console.log(result5);
  console.log(JSON.stringify(result4) === JSON.stringify(result5));




  const objArray4 = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ]
  
  // myMap를 구현하여 arr.map과 동일한 값이 나오도록 하기.
  function myMap(arr, callback) {
    let Baul = [];
    for(let i = 0; i< arr.length; i++){  // return같은경우는 반환하는거기때문에 add.push 코드이후로 return 하면 요소를바로반환한다
        if(callback(arr[i])){
            add.push(arr[i]);  
        }     
    } 
    return Baul;  
     
}   
       
// callback = abc.price >= 200 ;



  const result = objArray4.map(function(fruit){
    return fruit.price >=100;
  })

  const result2 = myMap(objArray,function(fruit){
    return fruit.price >=100;
  });
  