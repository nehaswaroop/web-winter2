class Building {
	#hasWalls;
	#numOfWalls;
	#roofShape;
	constructor(hasWalls, numOfWalls, roofShape) {
		this.#hasWalls = hasWalls;
		this.#numOfWalls = numOfWalls;
		this.#roofShape = roofShape;
	}

	getWalls() {
		return this.#hasWalls;
	}
	getNumWalls() {
		return this.#numOfWalls;
	}
	shape() {
		return this.#roofShape;
	}

	openDoor() {
		console.log("Opening the building Door");
	}
	closeDoor() {
		console.log("Closing the building door");
	}
}

class Gym extends Building {
	#gymName;
	#hasPool;
	constructor(gymName, hasPool, hasWalls, numOfWalls, roofShape) {
		super(hasWalls, numOfWalls, roofShape);
		this.#gymName = gymName;
		this.#hasPool = hasPool;
	}
	getName() {
		return this.#gymName;
	}
	checkPool() {
		return this.#hasPool;
	}
	openGym() {
		console.log("The gym is open");
	}
	closeGym() {
		console.log("The gym is closed");
	}
}

class Bank extends Building {
	#numOfVault;
	#numOfStaff;
	#name;
	constructor(numOfVault, numOfStaff, name, hasWalls, numOfWalls, roofShape) {
		super("yes", 4, "Spanish");
		this.#numOfVault = numOfVault;
		this.#numOfStaff = numOfStaff;
		this.#name = name;
	}
	getNumVault() {
		return this.#numOfVault;
	}
	getNumStaff() {
		return this.#numOfStaff;
	}
	getName() {
		return this.#name;
	}

	openBank() {
		console.log("The bank is open");
	}
	closeBank() {
		console.log("The bank is closed");
	}
}
const buildingObj = new Building("yes", 4, "Spanish");
console.log(buildingObj.getNumWalls());

const gymObj = new Gym("Fitness24", true);
const bankObj = new Bank("100", 20, "City Bank");

const arr = [100, 200];
const arrB = [1, 2, [44, 55]];
const z = [...arr, ...arrB];
z[2] = 10000;
console.log(z);
console.log(arrB);
