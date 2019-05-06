// In semantic versioning a piece of software can be represented in a format like this example: 6.1.12.

// Write three separate functions, one to retrieve each element in the semantic versioning specification.

function retrieveMajor(semver) {
	return semver.split('.')[0]
}

function retrieveMinor(semver) {
	return semver.split('.')[1]
}

function retrievePatch(semver) {
	return semver.split('.')[2]
}

console.log(retrieveMajor("6.1.12"));

console.log(retrieveMinor("6.1.12"));

console.log(retrievePatch("6.1.12"));


