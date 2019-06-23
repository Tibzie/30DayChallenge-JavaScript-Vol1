// check whether an object is empty or not

function isEmpty(obj) {
	return Object.keys(obj) == "" ? true : false;
}

console.log(isEmpty({a: 1}));
