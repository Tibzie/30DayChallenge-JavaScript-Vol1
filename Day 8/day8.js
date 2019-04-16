// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.


function FirstReverse(str) { 

    str = str.split("").reverse().join(""); 
    return str; 
           
}
     
// keep this function call here 
console.log(FirstReverse("Hello"));    