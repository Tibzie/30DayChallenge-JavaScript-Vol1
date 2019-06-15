// Write a function that validates whether two strings are identical.
// Make this validator case insensitive.

function match(s1, s2) {
	return s1.toLowerCase().localeCompare(s2.toLowerCase()) ? false : true;
}

console.log(match("motive", "Motive"));
