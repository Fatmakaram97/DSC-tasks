// Get the elements using DOM from the HTML file
let $eventDateAndTime = document.getElementById('eventDateAndTime');
let $timerDisplay = document.getElementById('timer');
let $inputEvent = document.querySelector('#allEvents ul');
let dateElement,listItem,cancelBtn;
let $clear = document.querySelector('.clear i');

// Add the restart function
$clear.addEventListener("click",function (e){
  // clear the list
  $inputEvent.innerHTML = '';
})

//const date = dateTimeNow.getFullYear()+'-'+(dateTimeNow.getMonth()+1)+'-'+dateTimeNow.getDate();
//var time = dateTimeNow.getHours() + ":" + dateTimeNow.getMinutes() + ":" + dateTimeNow.getSeconds();
// console.log(date);
// console.log(time);

// export the function to be used when it is imported
export const updateClock = ($eventTitle = 'Your Event') => {
  // get time that insert by the user from the input
  let dateInput = new Date($eventDateAndTime.value)
  let time1 = new Date($eventDateAndTime.value).getTime();
  let dateTimeNow = new Date();
  // check if the time is old else create a new event
  if(dateInput<dateTimeNow){
    alert("Please enter a valid time for the event.")
  }

  else{
    let $inputEventItem = document.querySelector('#allEvents ul li');
    // create the cancel button for each list item
    cancelBtn = document.createElement("button");
    let cancel = document.createTextNode("\u00D7");
    cancelBtn.className = "cancel";
    cancelBtn.appendChild(cancel);
    // add the class for the ancel button
    cancelBtn.classList.add("cancelbutton");

    // create the list item by the input event
    listItem = document.createElement("li");
    // create the place in the list item to insert in it the count down for the event
    dateElement = document.createElement("span");


  // create the update count down timer that update it self after 1 sec
  const timeinterval = setInterval(function () {
      // get the time of the moment that function start at
    let timeNow = new Date();
    const time = timeNow.getTime();

    // get the difference between each two times and make the calculations
    // to get the remaining days, hours, minutes, and seconds
    const timeDiff = time1 - time;
    let seconds,minutes,hours,days;
    [seconds, minutes, hours, days ] = [Math.floor( (timeDiff/1000) % 60 )
    ,Math.floor( (timeDiff/1000/60) % 60)
    ,Math.floor( (timeDiff/(1000*60*60)) % 24)
    ,Math.floor( timeDiff/(1000*60*60*24) )];
    // create the conditions to check the remaining time
      if (seconds === 0 && minutes === 0 && hours === 0 && days === 0){
        alert(`Event: ${$eventTitle} starts now! Go ahead.`)
      }
      else if (seconds < 0) {
        dateElement.innerHTML = `Event: ${$eventTitle} has been started.`;
      }
      else {
      dateElement.innerHTML = `Event: ${$eventTitle} is in ${days} days,
      ${hours} h, ${minutes} m, and ${seconds} s.`;
      }
},1000);
  // append the data calculated and the cancel button and append all to the list
  listItem.append(dateElement,cancelBtn );
  $inputEvent.append(listItem)
}
  // get the cancel buttons array and call back the cancelation function
  let cancelbtns = document.getElementsByClassName("cancel");
  cancelation(cancelbtns);
}

// create function to cancel the selected list item
function cancelation(cancelbtns) {
  for (var i = 0; i < cancelbtns.length; i++) {
    cancelbtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}
}
