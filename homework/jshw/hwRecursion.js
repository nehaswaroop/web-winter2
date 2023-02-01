function filterFib(n) {
	let array = [0, 1];
	for (let i = 2; i < n + 1; i++) {
		array.push(array[i - 2] + array[i - 1]);
	}
	return array;
}
console.log(filterFib(10));
