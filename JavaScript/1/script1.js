//Task 1
function isPrime() {
  var num = document.getElementById("num").value;
  //if(typeof(Number("num")) == 	"number"){
  if(!isNaN(num)){
    console.log("It is a number.");
    var output = document.getElementById('result');
    output.innerHTML = "It is a number.";
  }
  else{
    console.log("Not a number.");
    var output = document.getElementById('result');
    output.innerHTML= "Not a number.";
  }
}

//Task 2
var loginName = prompt("Enter a name:");
if (loginName == 'Admin'){
    var passName = prompt("Enter the password:");
    if(passName == 'TheMaster'){
      alert("Welcome");
    }
    else if (passName.trim() == '') {
      alert("Canceled");
    }
    else{
      alert("Wrong password");
    }
}
else if (loginName.trim() == '') {
  alert("Canceled");
}
else{
  alert("I don’t know you");
}

//Task 3
var user = {};
user.name = 'William';
user.surname = 'John';
console.log(user);
user.name = 'Dylan';
console.log(user);
delete user.name;
console.log(user);
