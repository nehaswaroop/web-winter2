// function qualifyDiscount(date) {
// 	switch (date) {
// 		case 1:
// 			return "Too Early!!";
// 			break;
// 		case 15:
// 			return "Here is your discount";
// 			break;
// 		case 30:
// 			return "Too late!!";
// 			break;
// 		default:
// 			return "Not a valid date";
// 	}
// }
// console.log(qualifyDiscount(2));

// function betweenNumbers(num1, num2) {
// 	let arr = [];
// 	while (num1 <= num2) {
// 		arr.push(num1++);
// 	}
// 	return arr;
// }
// console.log(betweenNumbers(3, 116));

// const myObject = {
// 	name: "jack",
// 	email: "jack@gmail.com",
// 	age: 30,
// };
// const arr = [];
// for (const property in myObject) {
// 	arr.push(`${property}`);
// }
// console.log(arr);

// function myObject(obj) {
// 	const arr = [];
// 	for (const property in obj) {
// 		arr.push(`${property}`);
// 	}
// 	return arr;
// }

// console.log(myObject({ name: "jack", email: "jack@gmail.com", age: 30 }));

// function maxAmtProfit(arr) {
// 	let maxValue, maxValueIndex, minValue, minValueIndex;
// 	maxValue = Math.max(...arr);
// 	maxValueIndex = arr.indexOf(maxValue);
// 	const array2 = arr.slice(0, maxValueIndex + 1);
// 	minValue = Math.min(...array2);
// 	minValueIndex = array2.indexOf(minValue);
// 	if (maxValue === array2[0]) {
// 		return "Not a good time to buy or sell";
// 	} else {
// 		const maxProfit = maxValue - minValue;
// 		return `You make maximum profit of:'$${maxProfit}' if you buy on day:${minValueIndex} with price:$${minValue}
//     and sell on day:${maxValueIndex} whose price is:$${maxValue}`;
// 	}
// }

// console.log(maxAmtProfit([315, 50, 314, 684, 100, 648, 132, 50, 98, 45]));

// function maximumProfit(array) {
// 	let maxProfit = -1,
// 		lowPrice = array[0];
// 	for (let i = 0; i < array.length; i++) {
// 		if (array[i] > lowPrice) {
// 			maxProfit = Math.max(maxProfit, array[i] - lowPrice);
// 		} else {
// 			lowPrice = array[i];
// 		}
// 	}
// 	return maxProfit;
// }
// console.log(maximumProfit([315, 50, 700, 684, 100, 648, 132, 50, 98, 45]));

// console.log(maximumProfit([315, 50, 200, 40, 140]));
