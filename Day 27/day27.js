
// Write a function that returns true if k^k == n for input (n, k).

function kToK(n, k) {
	return Math.pow(k, k) == n ? true : false;
}

console.log(kToK(3124, 5));

