// Aim: Create a function that takes a string as input, capitalizes a letter if its ASCII code is even, and returns its lower case version if its ASCII code is odd.

// Examples

// asciiCapitalize("to be or not to be!")    ➞    "To Be oR NoT To Be!"

// asciiCapitalize("THE LITTLE MERMAID")    ➞    "THe LiTTLe meRmaiD"

// asciiCapitalize("Oh what a beautiful morning.")    ➞    "oH wHaT a BeauTiFuL moRNiNg."

function asciiCapitalize(str) {
  let newStr = str
    .split("")
    .map((word, index) => {
      if (index % 2 === 0) {
        return word.toUpperCase();
      } else {
        return word.toLowerCase();
      }
    })
    .join("");
  return newStr;
}

console.log(asciiCapitalize("to be or not to be!"));
console.log(asciiCapitalize("THE LITTLE MERMAID"));
console.log(asciiCapitalize("Oh what a beautiful morning."));
