// var myName = "Neha";
// let age = 10;
// const email = "neha.thakur.swaroop@gmail.com";
// var active = true;
// let membership;
// const date_created = null;

// console.log(nameA);
// var nameA = "Neha";
// add(5, 10);
// function add(a, b) {
// 	console.log(a + b);
// }
// const subtract = function (a, b) {
// 	console.log(a - b);
// };
// subtract(15, 8);

// const multiply = (a, b) => {
// 	console.log(a * b);
// };
// multiply(5, 4);

// console.log("begin running");
// function addi(a, b) {
// 	console.log(a + b);
// 	return a + b;
// }
// console.log(addi(8, 7));
// console.log("done");

// console.log(divide(10, 2));
// function divide(a, b) {
// 	return a / b;
// }
// console.log(fish);
// var fish = "goldfish";
// console.log(fish);

// //console.log(car);
// let car = "subaru";
// console.log(car);

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

//add3(10, 5, 6, 7);
//let add3 = function (a, b, c, d) {
//return a + b + c + d;
//};

// const message = "    TASTE THE RAINBOW!  ";
// const whisper = message;
// console.log(whisper.toLowerCase().trim());

// const word = "skateboard";
// const facialHair = word.slice(5, 10);
// console.log(facialHair.replace("o", "e"));

//const array1 = [1, 2, 3, 4, 5, 6];
// function sumArray(array1) {
// 	let sum = 0;
// 	for (let i = 0; i < array1.length; i++) {
// 		sum = sum + array1[i];
// 	}
// 	return sum;
// }
// console.log(sumArray([1, 2, 3, 4, 5, 6]));

// function maxNum(array) {
// 	let maxValue = -1;
// 	for (let i = 0; i < array.length; i++) {
// 		maxValue = Math.max(maxValue, array[i]);
// 	}
// 	return maxValue;
// }
// console.log(maxNum([32, 47, 1, 3, 5, 50, 9, 10]));

// const user = {
// 	id: 1,
// 	name: "David",
// 	email: "dave@gmail.com",
// 	address: {
// 		mailing: "123 Main St",
// 		shipping: "789 Main St",
// 	},
// 	cart: ["banana", "milk", "napkins"],
// };
// //console.log(user.cart);
// user.cart.push("soup");
// //console.log(user.cart);
// user.address.general = user.address.mailing;
// //user.address.general = "123 Main St";
// console.log(user.address);

// // function revString(array) {
// // 	const revArr = [];
// // 	for (let i = array.length - 1; i >= 0; i--) {
// // 		revArr.push(array[i]);
// // 	}
// // 	return revArr;
// // }
// // console.log(revString(["h", "e", "l", "l", "o"]));

// // function evenNum(array) {
// // 	const array1 = [];
// // 	array.forEach((element) => {
// // 		if (element % 2 === 0) array1.push(element);
// // 	});
// // 	return array1;
// // }
// // console.log(evenNum([1, 2, 3, 4, 5, 6, 7]));
// function generateFib(num) {
// 	if (num <= 1) {
// 		return num;
// 	} else {
// 		return generateFib(num - 1) + generateFib(num - 2);
// 	}
// }
// console.log(generateFib(3));

function filterFib(n) {
	let array = [0, 1];
	for (let i = 2; i < n + 1; i++) {
		array.push(array[i - 2] + array[i - 1]);
	}
	return array;
}
console.log(filterFib(10));
