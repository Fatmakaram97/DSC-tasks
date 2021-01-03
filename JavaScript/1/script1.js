//Task 1
function isPrime() {
  var num = document.getElementById("num").value;
  let x = 1;
  for (var i = 2;i<num;i++){
    if(num%i==0 || num == 1){
      x = 0;
    }
  }
  if(x == 1 && num != 1){
    console.log("Prime number.");
    var output = document.getElementById('result');
    output.innerHTML = "Prime number.";
  }
  else{
    console.log("Not a prime number.");
    var output = document.getElementById('result');
    output.innerHTML= "Not a prime number.";
  }
}

//Task 2
var loginName = prompt("Enter a name:");
if (loginName == 'Admin'){
    var passName = prompt("Enter the password:");
    if(passName == 'TheMaster'){
      alert("Welcome");
    }
    else if (passName === '' || passName == null) {
      alert("Canceled");
    }
    else{
      alert("Wrong password");
    }
}
else if (loginName === '' || loginName == null) {
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
