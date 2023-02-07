/*function printLanguagesOlderThan(age) {
	const languages = [
		{ name: "JavaScript", release: "1995" },
		{ name: "Java", release: "1995" },
		{ name: "C#", release: "2001" },
		{ name: "C", release: "1972" },
		{ name: "Dart", release: "2011" },
	];
	const today = new Date();
	const year = today.getFullYear();

	languages.forEach((e) => {
		if (year - ~~e.release > age) console.log(e.name);
	});
}
printLanguagesOlderThan(23);*/

// const languages = [
// 	{ name: "JavaScript", release: "1995" },
// 	{ name: "Java", release: "1995" },
// 	{ name: "C#", release: "2001" },
// 	{ name: "C", release: "1972" },
// 	{ name: "Dart", release: "2011" },
// ];
// function findOldLangs(age, langs) {
// 	const oldLangs = langs.filter((lang) => new Date().getFullYear() - +lang.release >= age);
// 	for (const lang of oldLangs) {
// 		console.log(lang.name);
// 	}
// }
// findOldLangs(23, languages);

class Animal {
	type;
	eyes;
	#age;
	constructor(type, eyes, age) {
		this.type = type;
		this.eyes = eyes;
		this.#age = age;
	}

	greet() {
		console.log(`Hi I am a(n) ${this.type}`);
	}

	getAge() {
		return this.#age;
	}

	setAge(newAge) {
		if (newAge === 0) return;
		this.#age = newAge;
	}

	resetAge() {
		this.#age = 1;
	}
}

class Dog extends Animal {
	#name;
	#color;
	#breed;

	constructor(type, name, color, breed, eyes, age) {
		super("Dog", eyes, age);
		this.type = type;
		this.#name = name;
		this.#color = color;
		this.#breed = breed;
	}

	greet() {
		console.log(`Woof! I am a ${this.type}`);
	}
	getName() {
		return `My name is ${this.#name}`;
	}
	setName(newName) {
		this.#name = newName;
	}
	getColor() {
		return `My color is ${this.#color}`;
	}
	getBreed() {
		return `My breed is ${this.#breed}`;
	}
}

const spot = new Dog("Dog", "Spot", "Golden", "Golden Retriever");
spot.greet();
console.log(spot.getName());
console.log(spot.getColor());
console.log(spot.getBreed());
