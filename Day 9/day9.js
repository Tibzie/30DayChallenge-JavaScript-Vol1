// Have the function LetterCapitalize(str) take the str parameter being passed
// and capitalize the first letter of each word. Words will be separated by only one space. 


function LetterCapitalize(str) { 
    str = str.toLowerCase()
        .split(" ")
        .map((myStr) => myStr.charAt(0).toUpperCase() + myStr.substring(1))
        .join(" ");
    return str; 
           
  }
     
  // keep this function call here 
  console.log(LetterCapitalize("hello world"));                            
  