import * as importedFrom from './app.js'

let $doneBtn = document.getElementById('insert');
let $inputEvent = document.querySelector('#allEvents ul');
let $clear = document.querySelector('.clear i');


$doneBtn.addEventListener("click",function (e) {
  // console.log(seconds,minutes,hours,days);
  // create the cancel button
  let $eventTitle = document.getElementById('eventTitle').value;
  // console.log($eventTitle);
  importedFrom.updateClock($eventTitle);

})

// Add the restart function
$clear.addEventListener("click",function (e){
  $inputEvent.innerHTML = '';
})
