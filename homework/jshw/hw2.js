function checkAge(age) {
	if (age >= 65) {
		return "Special Discount"; //console.log("Age is", age, "Special Discount");
	} else {
		return "Not Allowed";
	}
}

console.log(checkAge(60));

//---------------------------------------------------------------------------
function multiplyArray() {
	const originalArr = [5, 10, 15, 20, 15, 20, 30];
	const multiplyArr = [];
	originalArr.forEach((element) => {
		multiplyArr.push(element * 100);
		//element = element * 100;
		//console.log(element);
	});
	return multiplyArr;
}
console.log(multiplyArray());

/*const originalArr = [5, 10, 15, 20, 15, 20, 30];
const multiplyArr = [];
//console.log("Original Array", originalArr);
console.log("Multiplication array");
originalArr.forEach((element) => {
	multiplyArr.push(element * 100);
	//element = element * 100;
	//console.log(element);
});

console.log(multiplyArr);*/

//console.log("Original array after multiplication", originalArr);
//---------------------------------------------------------------------
/*const originalArr2 = [2, 3, 4, 5, 6, 7, 8];
const multiplyArr2 = [];
originalArr2.forEach((number) => {
	if (originalArr2.length > 5) {
		multiplyArr2.push(number * 100);
	}
});
console.log(multiplyArr2);
//console.log(originalArr2);*/

function checkLengthMultiply() {
	const originalArr2 = [2, 3, 4, 6, 7, 8, 7, 8];
	const multiplyArr2 = [];
	originalArr2.forEach((number) => {
		if (originalArr2.length > 5) {
			multiplyArr2.push(number * 100);
		}
	});
	return multiplyArr2;
}
console.log(checkLengthMultiply());
//------------------------------------------------------------------------------
function checkDuplicate() {
	const arrayInput = [154, 657, 564, 561, 154, 678, 100, 154];
	let num = arrayInput[0];
	let count = 0;
	//console.log(arrayInput.length);
	//console.log(num);
	for (let index = 0; index < arrayInput.length; index++) {
		if (arrayInput[index] === num) {
			count++;
		}
	}

	return count;
}

console.log("The number of times 154 has occured is", checkDuplicate());

//----------------------------------------------------------------------------

//const arr = [2, 3, 4, 5, 6, 7, 8];
//const modArr = [];

function checkEvenOdd() {
	const arr = [2, 3, 4, 5, 6, 7, 8];
	const modArr = [];
	arr.forEach((element) => {
		if (element % 2 === 0) {
			modArr.push(element * 100);
		} else {
			modArr.push(element);
		}
	});
	return modArr;
}
console.log(checkEvenOdd());

//------------------------------------------------------

function checkType(input) {
	let arrayCheck = [];
	const objCheck = {};
	//console.log(typeof arrayCheck);

	if (typeof input === typeof arrayCheck && typeof input === typeof objCheck) {
		console.log("The", input, "is an object");
	} else {
		console.log("The", input, "is something else");
	}
}

checkType({ name: "neha" });
checkType([1, 2, 3, "and"]);
checkType(2);
checkType("My name is Neha");
