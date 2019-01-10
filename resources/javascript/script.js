var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteButtons = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");

for(var i = 0; i < deleteButtons.length; i++) {
	deleteButtons[i].addEventListener("click", removeParent, false);
}

function removeParent(event) {
	event.target.removeEventListener("click", removeParent, false);
	event.target.parentNode.remove();
}

function getEventTarget(e) {
	e = e || window.event;
	return e.target || e.srcElement;
}

ul.onclick = function(event) {
	var target = getEventTarget(event);
	target.classList.toggle("done");
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if(inputLength() > 0) {
		createListElement();
	}
}

function addListAfterEnterKey(event) {
	if(inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}	

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterEnterKey);

// Event listener syntax : 

// button.addEventListener("click", addListAfterClick);
// input.addEventListener("keypress", addListAfterKeypress);
// You didn't see the function being called like this as you may have expected: 

// button.addEventListener("click", addListAfterClick());
// input.addEventListener("keypress", addListAfterKeypress(event));


// This is something called a callback function. When that line of javascript runs, 
// we don't want the addLisAfterClick function to run because we are just adding the event 
// listener now to wait for click or keypress. We want to let it know though that we want 
// this action to happen when a click happens. So the function now automatically gets run 
// (gets added the ()) every time the click happens. So we are passing a reference to the 
// function without running it.