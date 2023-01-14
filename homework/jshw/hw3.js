//Given an array month: [Jan, Feb, Mar] and a date array: [1, 2, …, 10 ]
//Write a function called “printCalendar” that loops through both arrays and print out a combination of month and date. Date only goes up to 10
//Ex: Jan 1, Jan 2 …, Mar 10
//Hint: Use 2 loops
function printCalendar() {
	const monthArray = ["Jan", "Feb", "Mar"];
	const dateArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	//console.log(monthArray);
	//console.log(dateArray);
	monthArray.forEach((month) => {
		dateArray.forEach((date) => {
			console.log(month, date);
		});
	});
}
printCalendar();
console.log("----------------------------------------------------------------");

//-----------------------------------------------------------------------------------------------------------
//Create a function called “cloneArray” that will take any array and return a copy of the array.
function cloneArray(array) {
	const copyArr = array.map((element) => {
		return element;
	});
	return copyArr;
}
console.log(cloneArray([1, 2, 3, 4, "Hi", 5, 6, 7]));
console.log("----------------------------------------------------------------");

//-------------------------------------------------------------------------------------------
/*Write a function that takes in an array arr and a number n
The function should be called getNthElement
The function should check if the array has an element in the nth position or not
If an element exist then it should return that element, otherwise it will return the string “element does not exist”
Ex: function getNthElement (arr, n) { … }*/
function getNthElement(arr, num) {
	//console.log(arr.length);
	if (num <= arr.length - 1) {
		return arr[num];
	} else {
		return "Element does not exist";
	}
}
console.log(getNthElement([1, 2, 3, 4, 5, 6], 5));
console.log(getNthElement([1, 2, 9], 0));
console.log(getNthElement([1, 2, 3, 4, 5, 6, 7, 8, 10], 10));
//------------------------------------------------------------------------------------
/*Write your own custom array.push and array.pop method called “customPush” and “customPop”
customPush will take in 2 parameter, an array and an item to push into the array
customPush will return the length of the array after adding in the item
Ex: customPush(arr, item) { ... }
customPop will take in an array and remove the last element and return the removed element*/
console.log("----------------------------------------------------------------");

function customPush(arr, item) {
	const pushedArray = [];
	arr.forEach((element) => {
		pushedArray.push(element);
	});
	console.log("Array before pushing an item", pushedArray);
	console.log("The length of array before pushing :", pushedArray.length);
	const afterItemPush = pushedArray;
	//console.log(arr2);
	afterItemPush.push(item);
	console.log("array after item:", item, " is pushed", afterItemPush);
	return `The length of array after pushing :${pushedArray.length}`;
}
console.log(customPush([1, 2, 3, 7, 5, 4, 7, " "], "hello"));

//------------------------------------------------------------------------------
function customPop(arr) {
	const pushedArray = [];
	arr.forEach((element) => {
		pushedArray.push(element);
	});
	//console.log(pushedArray[item]);
	const lastElement = pushedArray.length - 1;
	const popArray = pushedArray.pop(lastElement);
	//return lastElement;
	//const popArray = pushedArray;
	//popArray.pop(item);
	return `The removed element from the array is : ${popArray}`;
}
console.log(customPop([1, 2, 3, 4, 8, 9, 20]));
