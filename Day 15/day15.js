// You've got chickens (2 legs), cows (4 legs) and pigs (4 legs) on your farm.
// Return the total number of legs on your farm.


function animals(chickens, cows, pigs) {
    chickenLegs = 2;
    cowLegs = 4;
    pigLegs = 4;
    return chickenLegs*chickens + cowLegs*cows + pigLegs*pigs;
}

console.log(animals(5, 2, 8));