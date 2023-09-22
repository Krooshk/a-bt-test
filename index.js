const data = require('./data.json');

// "dogs": integer, "cats": integer, "avgage": integer

const task11Result = (animals) => {
	const result = {};
	let sumAge = 0;
	for (let animal of animals) {
		if (animal.type === "dog") {
			result.dogs = result.dogs ? result.dogs + 1 : 1;
		}
		if (animal.type === "cat") {
			result.cat = result.cat ? result.cat + 1 : 1;
		}
		sumAge += animal.age;
	}
	result.avgage = Math.floor(sumAge / animals.length);
	return result;
};

// console.log(task11Result(data));

const task12Result = (animals) => {
	let result = 0;
	result = animals.reduce((accum, curr) => {
		if (curr.type === "cat" && curr.breed) {
			return accum + 1;
		}
		return accum;
	}, 0)
	return result;
};

// console.log(task12Result(data));

const task13Result = (animals) => {
	let result = [];
	result = animals.filter(el => (el.type === "cat" && el.breed) || (el.type === "dog" && !el.breed));
	// your code here
	return result;
};

// console.log(task13Result(data));

const task14Result = (animals) => {
	const result = [];
	const POSITIONS = {
		cat: [],
		dog: [],
	}
	const VALUES = {
		cat: [],
		dog: [],
	}
	animals.forEach((el, index) => {
		if (el.type === "dog") {
			POSITIONS.dog.push(index)
			VALUES.dog.push(el)
		} else {
			POSITIONS.cat.push(index)
			VALUES.cat.push(el)
		}
	})

	VALUES.dog.sort((a, b) => a.age - b.age)
	VALUES.cat.sort((a, b) => b.age - a.age)

	POSITIONS.cat.forEach((elemIn, index) => {
		result[elemIn] = VALUES.cat[index];
	})

	POSITIONS.dog.forEach((elemIn, index) => {
		result[elemIn] = VALUES.dog[index];
	})

	return result;
};
console.log(task14Result(data));
// task14Result(data);

const myPowFunc = (number, n) => {
	const result = number;
	// your code here
	return result;
};

// console.log(myPowFunc(3, 4));

const myFlatFunc = (inputArray) => {
	const result = inputArray;
	// your code here
	return result;
};

// console.log(myFlatFunc([1, 3, 5, [1, [4, 5], 'asdf', [76, [56, [66, 59]]]]]));
// result 1, 3, 5, 1, 4, 5, 'asdf', 76, 56, 66, 59