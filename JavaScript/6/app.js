let $eventDateAndTime = document.getElementById('eventDateAndTime');
let $timerDisplay = document.getElementById('timer');
let $inputEvent = document.querySelector('#allEvents ul');
let eventItem;


//const date = dateTimeNow.getFullYear()+'-'+(dateTimeNow.getMonth()+1)+'-'+dateTimeNow.getDate();
//var time = dateTimeNow.getHours() + ":" + dateTimeNow.getMinutes() + ":" + dateTimeNow.getSeconds();
// console.log(date);
// console.log(time);

export const updateClock = ($eventTitle = 'Your Event') => {
  let $inputEventItem = document.querySelector('#allEvents ul li');

  var cancelBtn = document.createElement("button");
  var cancel = document.createTextNode("\u00D7");
  cancelBtn.className = "cancel";
  cancelBtn.appendChild(cancel);
  cancelBtn.classList.add("cancelbutton");

  // create the list item by the input value
  let listItem = document.createElement("li");
  let dateElement = document.createElement("span");

  let time1 = new Date($eventDateAndTime.value).getTime();

  const timeinterval = setInterval(function () {
  const dateTimeNow = new Date();
  const time = dateTimeNow.getTime();
  // if(time1<time){
  //   alert("Please enter a valid time for the event.")
  // }
  const timeDiff = time1 - time;
  let seconds,minutes,hours,days;
  [seconds, minutes, hours, days ] = [Math.floor( (timeDiff/1000) % 60 )
  ,Math.floor( (timeDiff/1000/60) % 60)
  ,Math.floor( (timeDiff/(1000*60*60)) % 24)
  ,Math.floor( timeDiff/(1000*60*60*24) )];

    if (seconds === 0 && minutes === 0 && hours === 0 && days === 0){
      alert(`Event: ${$eventTitle} starts now! Go ahead.`)
    }
    else if (seconds < 0) {
      $inputEventItem.innerHTML = `Event: ${$eventTitle} has been started.`;
    }
    else {
      // eventItem = document.createTextNode(`The event: ${$eventTitle} is in ${days} days,
      // ${hours} hours, ${minutes} minutes, and ${seconds} seconds`);
      // console.log(eventItem);
    dateElement .innerHTML = `Event: ${$eventTitle} is in ${days} days,
    ${hours} h, ${minutes} m, and ${seconds} s.`;
    }
}
  ,1000);
  listItem.append(dateElement,cancelBtn );
  $inputEvent.append(listItem)

  var cancelbtns = document.getElementsByClassName("cancel");
  cancelation(cancelbtns);
}

function cancelation(cancelbtns) {
  for (var i = 0; i < cancelbtns.length; i++) {
    cancelbtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';

  });
}
}
