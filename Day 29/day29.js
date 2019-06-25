
/* Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

To illustrate:

largestSwap(27) ➞ false

largestSwap(43) ➞ true
If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27.
On the other hand, swapping 43 gives us 34, and 43 > 34. */


function largestSwap(num) {
    let num2 = num.toString().split('').reverse().join('');
    return num >= num2 ? true : false;
}

console.log(largestSwap(23));