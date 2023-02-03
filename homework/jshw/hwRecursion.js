// function fib(n) {
// 	let array = [0, 1];
// 	for (let i = 2; i <= n; i++) {
// 		array.push(array[i - 2] + array[i - 1]);
// 	}
// 	return array;
// }
// console.log(fib(8));

// function ifSquare(num) {
// 	const n = Math.sqrt(num);
// 	if (n * n === num) {
// 		return true;
// 	}
// }
// array.forEach((element) => {
// 	/*if (element === ifSquare(5 * element * element + 4) || ifSquare(5 * element * element - 4)) {
// 		array1.push(element);
// 	} else return null;*/
function fibGen(max, first, second, fibObj) {
	if (first < 0 || second < 0) {
		return;
	}

	let temp = second;
	first = first + second;
	second = temp + first;
	//console.log(first, second);
	if (second >= max || first >= max) return;

	fibObj[first] = 1;
	fibObj[second] = 1;
	fibGen(max, first, second, fibObj);
}

function filterFib(array) {
	const max = Math.max(...array);
	//console.log(max);
	let fibObj = { 0: 1, 1: 1 };
	fibGen(max, (first = 0), (second = 1), fibObj);
	const array1 = [];
	//console.log(fibObj);
	array.forEach((element) => {
		if (fibObj[element] === 1) {
			array1.push(element);
		}
	});
	return array1;
}
console.log(filterFib([1, 13, 4, 5, 34, 0, 23, 99, 55]));
