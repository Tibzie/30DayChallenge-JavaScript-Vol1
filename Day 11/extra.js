// Create a function that takes an array and returns the difference between the smallest and biggest numbers.

function differenceMaxMin(arr) {
	return Math.max(...arr) - Math.min(...arr);
}

console.log(differenceMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));