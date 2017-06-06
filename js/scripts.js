var a = prompt('Enter first value');
var b = prompt('Enter second value');
var value = 0;

value = (a *a) + (2 *a *b) - (b * b);

if (value == 0) {
	console.log("Zero!");
	alert("Zero!");
} else if (value < 0) {
	alert("Mniej niż zerooo");
	console.log("Mniej niż zerooo");
} else {
	console.log("Więcej niż zeroooo");
	alert("Więcej niż zeroooo");
}

