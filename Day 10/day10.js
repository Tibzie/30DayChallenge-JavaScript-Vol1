
// Create a function to remove all null values from an array.
// Bonus cookie points:
// - remove all undefined values from the array
// - remove all NaN values from the array

function removeNull(arr) {
	return arr.filter((myArr) => {
        return myArr !== null && typeof(myArr) === 'string' || typeof(myArr) === 'number' && !isNaN(myArr) && myArr !== undefined
    });
}
console.log(removeNull(['spray', 'limit', null, 1, NaN, undefined, 'elite', 'exuberant', 'destruction', 'present']));
