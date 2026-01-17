// Challenge One:
let myTasks = ["  Buy Groceries  ", "EMPTY", " Fix Bike ", "Exercise", "RETIRE EARLY"];

myTasks.pop();
myTasks.filter(e => e !== "EMPTY").map(e => console.log(e.trim()));

// Challenge Two:
let guestAges = [19, 22, 18, 25, 30, 21];
let guestNames = ["Alice", "Bob", "Charlie", "Steve", "Dave", "Eve"];


guestNames.includes("Steve");
let canEnter = guestNames.filter((name, index) => {
    return guestAges[index] > 21;
})

console.log(canEnter.join(", "));

// Challenge Three:
let menuPrices = [10, 8, 20, 12];

menuPrices.unshift(15);
console.log(menuPrices.map(e => e * 1.2).slice(0, 3));

// Challenge Three:
let cart = [19.99, -5.00, 25.00, 4.50, -2.00, 15.00, 100.00];
let grandTotal = cart.filter(e => {
    return e > 0;
})
    .map(e => e * 1.13)
    .reduce((acc, cur) => {
    return acc + cur;
}, 0);
console.log(grandTotal.toFixed(2));

// Challenge Four:
let movies = [
    { title: "Inception", rating: 8.8, rentPrice: 4.99 },
    { title: "The Room", rating: 3.7, rentPrice: 0.99 },
    { title: "Interstellar", rating: 8.6, rentPrice: 3.99 },
    { title: "Catwoman", rating: 3.4, rentPrice: 1.99 },
    { title: "The Dark Knight", rating: 9.0, rentPrice: 5.99 }
];
let a = movies.filter(e => {
    return e.rating > 8;
})
    .map(e => e.rentPrice * 0.8)
    .reduce((acc, cur) => {
        return acc + cur;
    }, 0);
console.log(a.toFixed(2));









// Challenge Five:
let inventory = [
    { name: "Milk", price: 4.00, qty: 10, expired: true },
    { name: "Eggs", price: 3.50, qty: 40, expired: false },
    { name: "Bread", price: 2.50, qty: 20, expired: false }
];
let b = inventory.filter(e => {
    return e.expired === false;
}).map(e => {
    return e.price * e.qty
}).reduce((acc, cur) => {
    return acc + cur;
}, 0)
console.log(b.toFixed(2))

let guests = [
    { name: "tony", confirmed: true },
    { name: "steve", confirmed: false },
    { name: "natasha", confirmed: true }
];
// Desired output: "- TONY, - NATASHA" (or similar string format)
let c = guests.filter(e => {
    return e.confirmed !== false;
}).map(e => {
    return "- " + e.name.toUpperCase();
});
console.log(c);

let tags = ["JavaScript", "programming", "JS", "javaScript", "Web", "programming"];
let d = tags.filter((e) => {
    let a = e.toLowerCase()
    if (a.indexOf("javascript") !== -1 || a.indexOf("js") !== -1 || a.indexOf("programming") !== -1) {
        return null;
    }
     return a.length > 4;
}).map(e => {
    return e.trim()
})
console.log(d);



let staff = [
    { name: "Alice", rating: 5 },
    { name: "Bob", rating: 3 },
    { name: "Charlie", rating: 4 },
    { name: "Dave", rating: 3 }
];
let passed = 0;
let e = staff.filter(e => {
   return e.rating >= 4;
})
.reduce((acc) => {
    return acc += 500;
}, 0)
console.log(e.toFixed(2));




let prices = [100, 100, 100, 100];
// Logic: Index 0 ($100), Index 1 ($50), Index 2 ($100), Index 3 ($50)...
let f = prices.map((e, i) => {
    if (i % 2 !== 0){
        e = e / 2
    }
    return e
})
console.log(f);
