var myName = "Neha";
let age = 10;
const email = "neha.thakur.swaroop@gmail.com";
var active = true;
let membership;
const date_created = null;

console.log(nameA);
var nameA = "Neha";
add(5, 10);
function add(a, b) {
	console.log(a + b);
}
const subtract = function (a, b) {
	console.log(a - b);
};
subtract(15, 8);

const multiply = (a, b) => {
	console.log(a * b);
};
multiply(5, 4);

console.log("begin running");
function addi(a, b) {
	console.log(a + b);
	return a + b;
}
console.log(addi(8, 7));
console.log("done");

console.log(divide(10, 2));
function divide(a, b) {
	return a / b;
}
console.log(fish);
var fish = "goldfish";
console.log(fish);

//console.log(car);
let car = "subaru";
console.log(car);

//power(2, 8);
//const power = (a, b) => {
//return a * b;
//};
//sub(10, 5);
//var sub = (a, b) => {
//return a - b;
//};
/*var add3;
add3(10, 5, 6);
var add3 = function (a, b, c) {
	return a + b + c;
};*/

add3(10, 5, 6, 7);
let add3 = function (a, b, c, d) {
	return a + b + c + d;
};
