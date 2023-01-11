console.log("ADDITION");
function add(a, b) {
	return a + b;
}
console.log(add(10, 20));
console.log("DIVISION");
function divide(a, b) {
	return a / b;
}
console.log(divide(20, 5));
console.log("CONVERT");
function convert(a) {
	return ((a - 32) * 5) / 9;
}
console.log(convert(356));
console.log("Number divisible by 55");
function divdeBy55(a) {
	if (a % 55 == 0) {
		return true;
	} else {
		return false;
	}
}
console.log(divdeBy55(60));
console.log("Length of a string");
function checkLength(a) {
	return a.length;
}
console.log(checkLength("This is a String"));
console.log("CONCAT");
function concatFunction(a, b) {
	return a.concat(b);
}
console.log(concatFunction("cat", " dog"));
