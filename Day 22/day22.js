// Write two functions:

//     firstArg() should return the first parameter passed in.
//     lastArg() should return the last parameter passed in.
// Return undefined if the function takes no parameters.


function firstArg() {
	return arguments != "" ? [...arguments].shift() : undefined;
}

console.log(firstArg(1, 2, 3));


function lastArg() {
	return arguments != "" ? [...arguments].pop() : undefined;
}

console.log(lastArg(1, 2, 3));
