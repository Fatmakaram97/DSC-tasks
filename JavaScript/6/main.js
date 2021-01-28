// import all things from app script file
import * as importedFrom from './app.js'

// Get the elements using DOM from the HTML file
let $doneBtn = document.getElementById('insert');
let $inputEvent = document.querySelector('#allEvents ul');
let $clear = document.querySelector('.clear i');

// make function for the start button when it clicks
$doneBtn.addEventListener("click",function (e) {
  // Get the title name using DOM from the HTML file
  let $eventTitle = document.getElementById('eventTitle').value;
  // console.log($eventTitle);
  // call the function from the app script
  importedFrom.updateClock($eventTitle);
})

// Add the restart function
$clear.addEventListener("click",function (e){
  // clear the list
  $inputEvent.innerHTML = '';
})
