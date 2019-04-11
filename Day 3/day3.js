// Create a function that removes the first and last characters from a string.
// If the string is 2 or fewer characters long, return the string itself.


function removeFirstLast(str) {
    return str.length>2 ? str.split("").slice(1, -1).join("") : str;
}

console.log(removeFirstLast("goat"));