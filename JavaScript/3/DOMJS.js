// Task 1
header=document.getElementsByClassName('header')[0];
header.innerHTML="<h1>Welcome from header</h1>";

// Add some styling
header.classList.add("headerCSS");

// Task 2
// work on the List
wholeList = document.querySelector('#container ul');
var ItemList = document.createElement("li");
ItemList.appendChild(document.createTextNode("four"));
wholeList.append(ItemList);

// Task 3
eachElement = document.querySelectorAll('#container ul li');
console.log(eachElement)
for(let i =0; i<eachElement.length; i++){
  eachElement[i].style.backgroundColor = "#00FF7F";
  eachElement[i].style.margin = "10px";
  eachElement[i].style.fontSize = "20px";
}
