// Get the elements using DOM
let $input = document.querySelector('#inputBox');
let $button = document.querySelector('#addButton');
let $list = document.querySelector('#toDoList');
let $inputList = document.querySelector('#toDoList ul');
let $completedList = document.querySelector('#completedList ul');
let $clear = document.querySelector('.clear i');

// Add the restart function
$clear.addEventListener("click",function (e){
  $inputList.innerHTML = '';
  $completedList.innerHTML = '';
})

// Add the add button function
$button.addEventListener("click", function (e) {
  if ($input.value == "") {
    WarnMsg();
  }
  else {
    AddElement();
  }
})

// The Add Element function
function AddElement() {
  // For each new element make with it 2 buttons one for done and one for cancel
  // create the done button
  var doneBtn = document.createElement("button");
  doneBtn.className = "done";
  var done = document.createTextNode("\u2713");
  doneBtn.appendChild(done);
  doneBtn.classList.add("donebutton");
  // create the cancel button
  var cancelBtn = document.createElement("button");
  var cancel = document.createTextNode("\u00D7");
  cancelBtn.className = "cancel";
  cancelBtn.appendChild(cancel);
  cancelBtn.classList.add("cancelbutton");

  // create the list item by the input value
  let listItem = document.createElement("li");
  var inputValue = $input.value;
  listItem.className = "task";
  var textItem = document.createTextNode(inputValue);

  listItem.append(textItem,doneBtn,cancelBtn);
  $inputList.append(listItem)
  $input.value = "";
  var cancelbtns = document.getElementsByClassName("cancel");
  var doneBtns = document.getElementsByClassName("done");
  cancelation(cancelbtns);
  AddToComplete(doneBtns);

  }

function WarnMsg() {
  alert('Please add any task to your to do list!');
}

function cancelation(cancelbtns) {
  for (var i = 0; i < cancelbtns.length; i++) {
    cancelbtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';

  });
}
}

function AddToComplete(doneBtns) {
  for (var i = 0; i < doneBtns.length; i++) {
    doneBtns[i].addEventListener("click", function() {
      $inputList.removeChild($inputList.childNodes[i]);
      let task = this.parentNode;
      task.removeChild(task.lastElementChild);
      task.removeChild(task.lastElementChild);

      let comItem = document.createElement("li");
      var comValue = task.innerText;
      var textItem2 = document.createTextNode(comValue);

      comItem.append(textItem2);
      $completedList.appendChild(comItem)
    })
  }
}
