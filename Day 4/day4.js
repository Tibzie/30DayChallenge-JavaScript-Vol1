// Write two functions:
// - A function to convert the integer value of a string.
// - A function to transform a string into an integer.

function toInt(str) {
    let toNum = Number(str);
    // let checkNum = Number.isInteger(toNum);
    let checkNum = typeof(toNum);
    return `${toNum}, it's a ${checkNum}`;
}

console.log(toInt("3"));

function toStr(str) {
    let toStr = str.toString();
    let checkStr = typeof(toStr);
    return `${toStr} and it's a ${checkStr}`;
}

console.log(toStr(3));

