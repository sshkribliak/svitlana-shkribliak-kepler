// Write a function called 'startsWithLetter' that takes two arguments: an array of strings and a letter.  The function should use the find method to return the first string in the array that starts with the letter provided as the argument.  If there's no string in the array that starts with that letter, return undefined. The function should leave lowercase and uppercase letters alone.
// STRETCH GOAL: Throw an error "Letter must be a string of length 1" if the second argument is not a string, or if its length is more than 1.

// EXAMPLE ARRAY:
// let jokeStrings =
//   ["Do you want to hear a joke?",
//    "It's about a three-legged dog",
//    "The dog walks into a bar",
//    "The dog says, ",
//    "\"I'm looking for the man who shot my paw\"",
//    "Get it?"]

let jokeStrings = [
    "Do you want to hear a joke?",
    "It's about a three-legged dog",
    "The dog walks into a bar",
    "The dog says, ",
    '"I\'m looking for the man who shot my paw"',
    "Get it?",
  ];
  
  function startsWithLetter(strings, letter) {
    if (typeof letter !== "string" || letter.length > 1 || letter === '') {
        throw new Error ("Letter must be a string of length 1");
    } else {
      return strings.find((string) => string.charAt(0) === letter);
    }
  }
  console.log("Q20:", startsWithLetter(jokeStrings, "I"));
  console.log("Q20:", startsWithLetter(jokeStrings, "T"));
  console.log("Q20:", startsWithLetter(jokeStrings, "C"));

  try {
    console.log(startsWithLetter(jokeStrings, "AB")); // Should throw an error
  } catch (error) {
    console.error(error.message); // Output: "Letter must be a string of length 1"
  }

  try {
    console.log(startsWithLetter(jokeStrings, "")); // Should throw an error
  } catch (error) {
    console.error(error.message); // Output: "Letter must be a string of length 1"
  }