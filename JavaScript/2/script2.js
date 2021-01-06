// Task 1
// First way
let arr = [2,4,6];

function sumOfArray(array){
  var sum = 0;
  for (let i = 0; i< array.length; i++){
    sum += array[i];
  }
  return sum
}
console.log("Sum of Array:" + sumOfArray(arr));
var sum1 = document.getElementById('sum1');
sum1.innerHTML = sumOfArray(arr);
// Second way
let symArr = arr.reduce(function(p,n){
  return p+n;
})
console.log("Sum:" + symArr);
var sum2 = document.getElementById('sum2');
sum2.innerHTML = symArr;


// Task 2
// Part 1
let myArr= [1,4,9,16,25];
let squareArr = myArr.map(Math.sqrt);
console.log("Square root of Array:" + squareArr)
var squareR = document.getElementById('sqRoot');
squareR.innerHTML = squareArr;

// Part 2
let removedOfArr = myArr.splice(2,2)
console.log("Array after remove:" + myArr);
var afterrevarr = document.getElementById('reArr');
afterrevarr.innerHTML = myArr;

// Part 3
let myArr2= [1,4,9,16,25];
let reversedArr = myArr2.reverse();
console.log("Reversed Array:" + reversedArr);
var revArr = document.getElementById('revArr');
revArr.innerHTML = reversedArr;
function compare(a,b){
  if (a>b){
  return 1;
}
  else if (b>a) {
    return -1;
  }
  else {
    return 0;
  }
}
let sortedArr = reversedArr.sort(compare);
console.log("Sorted Array: " + sortedArr);
var sortArr = document.getElementById('sortArr');
sortArr.innerHTML = sortedArr;
