// Task 1
const reqInfo = `I am Fatma Karam.
Fresh graduate from Faculty of Engineering, Cairo University.
I am 23 years old.`

console.log(reqInfo);

// Task 2
// write the old array
let gArr = [5,8,10,7];
// get the first and the last elements in the array
let {0 : first ,[gArr.length - 1] : last} = gArr;
// insert them into the new array
let nArr = [first,last];
// chech if the length is bigger than or equal 1 and log it
(nArr.length >= 1) ? console.log(nArr) : console.log("The length is less than one");


// Task 3
// get the html elements
let $calBtn = document.querySelector('#cal')
let $fNumber = document.querySelector('#fNum');
let $sNumber = document.querySelector('#sNum');
let $multResult = document.querySelector('#mulResult');
let $divResult = document.querySelector('#divResult');

// create the click button function
$calBtn.addEventListener("click", function (e) {
  // create the Multiplication and Division arrow functions
  const multiplicate = (fNum,sNum) =>{return fNum*sNum};
  const divide = (fNum,sNum) => {return fNum/sNum};

  // get the results from the inputs and display them in the html page
  $multResult.innerHTML = multiplicate(Number($fNumber.value),Number($sNumber.value));
  $divResult.innerHTML = divide(Number($fNumber.value),Number($sNumber.value));
})
