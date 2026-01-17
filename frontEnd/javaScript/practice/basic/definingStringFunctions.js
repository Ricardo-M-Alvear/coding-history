// Challenge 1: The "Data Cleaner"
// Methods used: trim(), toLowerCase(), replace()
// You receive user input from a form that is messy. Write a function that takes the string " jS-is-AwEsOmE " and transforms it into "javascript is awesome".
// Hint: You'll need to remove spaces, replace the dashes with spaces, and change "jS" to "javascript".
let textOne = " jS-is-AwEsOmE ";
console.log(textOne.replace("jS", "javascript").replaceAll("-", " ").toLowerCase().trim());

// Challenge 2: The "URL Masker"
// Methods used: startsWith(), slice(), padEnd()
// You need to verify if a link is secure and then hide part of it for privacy.
// Check if the string https://secret-data.com/password123 starts with "https".
// If it does, extract just the domain (secret-data.com).
// Return a new string that is exactly 20 characters long, padded with * at the end.
let textTwo = "https://secret-data.com/password123";
if (textTwo.startsWith("https")){
    console.log(textTwo.slice(8, 23).padEnd(20, "*"));
}

// Challenge 3: The "Initials Extractor"
// Methods used: split(), toUpperCase(), slice() (or index access)
// Write a function that takes a full name, like "alan turing", and returns the initials in uppercase with a dot between them: "A.T.".
// Hint: Split the name into an array of two words first.
let textThree = "alan turing";
let parts = textThree.toUpperCase().split(" ");
let initials = parts[0][0] + "." + parts[1][0];
console.log(initials);

// Challenge 4: The "Forbidden Word Filter"
// Methods used: includes(), replaceAll()
// You are building a chat filter. Create a function that takes a sentence and a "forbidden word."
// Check if the sentence includes the forbidden word.
// If it does, replace all instances of that word with "REDACTED".
// If not, return "Message is clean."
// Test Case:
// Input: "I hate apples, apples are the worst!", Forbidden: "apples"
// Output: "I hate REDACTED, REDACTED are the worst!"

let filter = function(sentence, forbiddenWord){
    if (sentence.includes(forbiddenWord)){
        return sentence.replaceAll(forbiddenWord, "REDACTED");
    }else{
        return "Message is clean.";
    }
};
console.log(filter("I hate apples, apples are the worst!", "apples"));

// Bonus Challenge: The Username Generator
// Let's combine these skills. Build a function that takes a full name and a birth year to create a "clean" username.
// Rules:
//     Trim any accidental spaces.
//     Take the first 3 letters of the first name.
//     Add the entire last name.
//     Add the last 2 digits of the birth year.
//     Everything must be lowercase.
//     Example:
// Input: " Grace Hopper ", 1906
// Output: grahopper06

const usernameGenerator = (name, birthYear) => {
    let stringYear = birthYear.toString();
    let cleanYear = stringYear.slice(-2)

    let parts = name.trim().toLowerCase().split(" ");
    let firstName = parts[0].slice(0,3);
    let lastName = parts[1].slice(0);

    return firstName + lastName + cleanYear;
}
console.log(usernameGenerator(" Grace Hopper ", 1906));