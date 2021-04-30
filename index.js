function skipIndex(ar, ind) {
  let myArr = JSON.parse(JSON.stringify(ar));
  myArr.splice(ind, 1);
  return myArr;
}

function multiplyArray(arr) {
  let rs = [];
  for (let i = 0; i < arr.length; i++) {
    let mul = 1;
    let newArr = skipIndex(arr, i);
    newArr.forEach(item => {
      mul = mul * item;
    });
    rs.push(mul);
  }
  return rs;
}

console.log(multiplyArray([3,2,5,4]));