// Function Definition Challenges

// Challenge 1: The Simple Greeter
// Goal: Create a function that takes a name and a time of day as inputs and returns a personalized greeting.
// Function Name: createGreeting
// Parameters: name (string), timeOfDay (string, e.g., "morning," "afternoon")
// Action: It should combine the inputs to form a complete greeting.
// Output: Return a single string.
function createGreeting(name, timeOfDay){
    return `Good ${timeOfDay}, ${name}!`;
}
console.log(createGreeting("Ricardo", "morning"));

// Challenge 2: The Tip Calculator
// Goal: Write a function that calculates the tip amount for a meal, given a specific percentage.
// Function Name: calculateTip
// Parameters: billAmount (number), tipPercentage (number, e.g., for 15%, pass 0.15)
// Action: It should multiply the bill amount by the percentage to find the tip amount.
// Output: Return the calculated tip amount (a number).
const calculateTip = function(billAmount, tipPercentage) {
    return billAmount * tipPercentage;
};
console.log(calculateTip(50.00, 0.20));

// Challenge 3: The Unit Converter
// Goal: Define a function to convert a temperature from Celsius to Fahrenheit.
// Function Name: celsiusToFahrenheit
// Parameter: celsiusTemp (number)
// Action: Use the conversion formula: F = C * (9 / 5) + 32
// Output: Return the temperature in Fahrenheit (a number).
const celsiusToFahrenheit = (celsius) => {
    return celsius * (9 / 5) + 32;
};
console.log(celsiusToFahrenheit(25));

// Challenge 4: The Discount Checker
// Goal: Create a function that determines the price of an item after applying a discount, but only if the original price is above a certain threshold.
// Function Name: applyDiscount
// Parameters: originalPrice (number), discountRate (number, e.g., 0.10 for 10%)
// Action: If originalPrice is greater than or equal to 100, calculate and return the discounted price (originalPrice * (1 - discountRate)).
// Otherwise (if the price is less than 100), return the originalPrice unchanged.
// Output: Return the final price (a number).

const applyDiscount = (originalPrice, discountRate) => {
    if (originalPrice >= 100){
        return originalPrice * (1 - discountRate);
    }else{
        return originalPrice;
    }
};
console.log(applyDiscount(120, 0.10));
console.log(applyDiscount(80, 0.10));

// Challenge 5: The Personalized Greeting with Defaults
// Goal: Write a function that creates a greeting, using default values for optional inputs.
// Function Name: createPersonalizedGreeting
// Parameters: name (string), language (string, with a default value of "English")
// Action: Return a greeting based on the language.
// If the language is "Spanish", the greeting should be "¡Hola, [name]!"
// For any other language (including the default "English"), the greeting should be "Hello, [name]!"
// Output: Return the greeting string.

const createPersonalizedGreeting = function(name, language = "English"){
   const cleanName = name.trim();
   const lang = language.toLowerCase().trim();
    if (lang === "spanish"){
        return `¡Hola, ${cleanName}!`;
    } else {
       return `Hello ${cleanName}!`;
    }
};
console.log(createPersonalizedGreeting("Anna", "Spanish"));
console.log(createPersonalizedGreeting("Tom"));
console.log(createPersonalizedGreeting("Tom", "French"));

// Challenge 6: The Basic Validator
// Goal: Create a function that checks if a password meets a minimum length requirement.
// Function Name: isValidPassword
// Parameter: password (string)
// Action:
// Check if the length of the password is 8 or more characters.
// Hint: Remember strings have a .length property.
// Output: Return a boolean value (true or false).

const isValidPassword = (password) => {
    return password.length > 8;
};
console.log(isValidPassword("mySecret123"));
console.log(isValidPassword("short"));

