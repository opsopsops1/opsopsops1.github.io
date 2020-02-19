var myHeading = document.querySelector('h1');	// get a heading
myHeading.textContent = 'Hello world!';			// change a heading

/*
document.querySelector('html').onclick = function() {
	alert('Ouch! Stop poking me!');
}
*/

var myImage = document.querySelector('img');
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/01.png') {
		myImage.setAttribute ('src','images/02.jpg');
	} else {
		myImage.setAttribute ('src','images/01.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Hello, ' + myName;
}

/*
if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Hello, ' + storedName;
}
*/

myButton.onclick = function() {
	setUserName();
}