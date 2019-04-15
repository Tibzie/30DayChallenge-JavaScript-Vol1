
// Create a function that adds a string ending to each member in an array.
// Example:
// addEnding(["clever", "meek", "hurried", "nice"], "ly") => ["cleverly", "meekly", "hurriedly", "nicely"]


// ES6- with "meh" twists
function addEnding(arr, ending) {
    return arr.map(myArray => {
        return myArray.concat(ending);
    })
}

// proper ES6+
// const addEnding = (arr,ending) => arr.map(myArray => {
//     return myArray.concat(ending);
// })
console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"));