// Create a function that takes an array of numbers and return the first and last elements as a new array.

function firstLast(arr) {
	return [arr.shift(), arr.pop()]
}


console.log(firstLast([5, 10, 15, 20, 25]));
