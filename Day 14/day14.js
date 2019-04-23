// Here, you must generate your own function to satisfy the relationship between the inputs and outputs.

function mysteryFunc(arr, num) {
  return arr.map((myArray) => {
      return myArray % num
  });
}

console.log(mysteryFunc([5, 7, 8, 2, 1], 2));