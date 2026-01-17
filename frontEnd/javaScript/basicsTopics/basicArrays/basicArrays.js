// Creating an Array: Most common way to make a array is using square brackets [].
// Datatypes such as strings, numbers, booleans, or other arrays could be stored in the original array.
// An empty array
let fruits = [];

// An array with data
let flavors = ["Vanilla", "Chocolate", "Strawberry"];

// Indexes: JavaScript uses zero-based indexing. This means the first item is at position 0, the section is at 1, and so on.
// To access an item, you use the variable name followed by the index in square brackets:
let types = ["Apple", "Banana", "Orange"];
console.log(types[0]);
console.log(types[1]);

// Basic Operations (CRUD)
// .push(item) | Adds a new element to the very end.
// .unshift(item) | Adds a new element to the beginning.
// Remove from end .pop() | Removes the last element
// Check length .length | Tells how many items are in the array
// Update arr[index] - newValue | Replaces the item at that specific index

let tasks = ["Wash car", "Buy milk"];
tasks.push("Clean room");
tasks[0] = "Wax car";
console.log(tasks.length);
console.log(tasks);

// Looping through Arrays | Modern method is using forEach or for of loop.
let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
    console.log("I like the color " + color);
}

colors.forEach(color => {
    console.log("Color: " + color);
});

// Transforming Arrays: .map() | Creates a new array by doing something to every single item in the old one.
let prices = [10,20,30];
let salePrices = prices.map(price => price * 2).join(", ");
console.log("Sales: " + salePrices);

// Joining and splitting | Turn arrays into strings and vice versa.
// .join() | Turns an array into a string.
// .split() | Turns a string into an array
let words = ["Hello", "World"];
let sentence = words.join(" ");
console.log(sentence);

let csv = "Red,Blue,Green";
let colorsSplit = csv.split(",")
console.log(colorsSplit);

// .filter() | Does not change the original array. Instead, it creates a filtered copy.
let ages = [12,19,33,15,40];
let adults = ages.filter(age => age >= 18);
console.log(adults);

// Filtering strings | filter base on text properties like the length of a word or if it contains a certain letter.
let names = ["Bo", "James", "Ty", "Alex"];
let longNames = names.filter(name => name.length > 3)
console.log(longNames);

