// Create a function that goes through the array, incrementing (+1)
// for each odd number and decrementing (-1) for each even number.

function transform(arr) {
	return arr.map(newArr => {
	  return newArr % 2 == 0 ? --newArr : ++newArr;
	})
}

console.log(transform([1, 2, 3, 4, 5]));
