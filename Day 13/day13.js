//Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
// 1. Total number of slices.
// 2. Number of recipients.
// 3. How many slices each person gets.

function equalSlices(total, people, each) {
    return total >= people * each ? true : false;
}


console.log(equalSlices(24, 12, 2));