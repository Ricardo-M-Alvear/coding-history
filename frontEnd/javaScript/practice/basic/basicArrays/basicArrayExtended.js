// .find() | Returns the actual item (the object or value).
// .findIndex | Returns the position (index) of that item.
// let users = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" },
//     { id: 3, name: "Charlie" }
// ];
//
// // Find the user with ID 2
// let user = users.find(u => u.id === 2);
// console.log(user.name); // "Bob"

// let index = users.findIndex(u => u.name === "Charlie");
// console.log(index); // 2

// Checking the whole array: .every() and .some()
// Returns true or false
// .every(): Do all elements match the test condition?
// .some(): Does at least one element match the test condition?
// let examScores = [80, 95, 40, 70];
// let allPassed = examScores.every(score => score > 50); // false (because of 40)
// let someonePassed = examScores.some(score => score > 50); // true

// Ordering data: .sort()
// To sort a to z (Ascending): (a, b) => a - b
// To sort z to a (Descending): (b, a) => b - a
// let prices = [100, 5, 50, 20];

// Sort low to high
// prices.sort((a, b) => a - b);
// [5, 20, 50, 100]

// Flattening Arrays: .flat()
// .flat() unzips nested arrays into one single array.
// let nested = [1, 2, [3, 4], [5, [6]]];
// console.log(nested.flat()); // [1, 2, 3, 4, 5, [6]]
// console.log(nested.flat(2)); // [1, 2, 3, 4, 5, 6] (flat to depth of 2)

let gamblers = [
    { name: "Jim", balance: 200 },
    { name: "Al", balance: 10000 },
    { name: "Steve", balance: 5500 },
    { name: "Becky", balance: 1200 }
];
let a = gamblers.filter(name => name.name && name.balance >= 5000);
let b = a.sort((a, b) => b.balance - a.balance).map(e => `VIP ${e.name}`);
console.log(...b);

let groceryCart = [
    { item: "Apple", price: 1.00, organic: true },
    { item: "Truffles", price: 90.00, organic: true },
    { item: "Cereal", price: 5.00, organic: false },
    { item: "Milk", price: 4.00, organic: true }
];
let t = groceryCart.filter(e => e.price < 100 && e.organic).reduce((a, b) => a + b.price, 0);
console.log(t);

let rawTags = [
    { tag: "JAVASCRIPT", likes: 10 },
    { tag: "coding", likes: 0 },
    { tag: "javascript", likes: 5 },
    { tag: "WebDev", likes: 20 }
];
let c = rawTags.filter(e => e.likes > 0).map(e => e.tag.toLowerCase());
let j = [...new Set(c)]
console.log(...j);

let employees = [
    { name: "Sarah", role: "Junior", skills: ["Java", "CSS"] },
    { name: "Mike", role: "Senior", skills: ["Python", "HTML"] },
    { name: "Will", role: "Senior", skills: ["Java", "React"] },
    { name: "Chris", role: "Senior", skills: ["Java", "Node"] }
];
let d = employees.find(e => e.skills.includes("Java") && e.role === "Senior");
console.log(d.name);

let students = [
    { name: "Ken", score: 70 },
    { name: "Barbie", score: 95 },
    { name: "Allan", score: 85 },
    { name: "Skipper", score: 60 }
];
let e = students.filter(e => e.score >= 80);
let f = e.reduce((acc, cur) => {
    return acc += cur.score;
}, 0)
let h = (f / e.length).toFixed(2);
console.log(h)







