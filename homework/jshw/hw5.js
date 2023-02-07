function Animal(color, eyes) {
	this.color = color;
	this.eyes = eyes;
	this.legs = 4;
	this.eat = function () {
		return true;
	};
	this.sleep = function () {
		return true;
	};
}

const lion = new Animal("Gold", "Brown");
const tiger = new Animal("Orange", "Hazel");
const deer = new Animal("Brown", "Brown");

console.log(lion);

class Bird {
	type;
	#name;
	color;
	eyes;

	constructor(type, name, color, eyes) {
		this.type = type;
		this.#name = name;
		this.color = color;
		this.eyes = eyes;
	}

	getName() {
		return this.#name;
	}

	setName(newName) {
		this.#name = newName;
	}
}

const sparrow = new Bird("Bird", "Sparrow", "Brown", 2);
console.log(sparrow.getName());
