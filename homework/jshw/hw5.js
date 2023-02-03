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

function Bird(name, color, eyes) {
	this.name = name;
	this.color = color;
	this.eyes = eyes;
	this.legs = 2;
	this.eat = function () {
		return true;
	};
	this.sleep = function () {
		return true;
	};
}

const sparrow = new Bird("");
