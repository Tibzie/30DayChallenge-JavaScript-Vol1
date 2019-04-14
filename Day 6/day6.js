// Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay;
// otherwise return false.


function profitableGamble(prob, prize, pay) {
	return prob*prize > pay ? true : false;
}

console.log(profitableGamble(0.9, 3, 2));