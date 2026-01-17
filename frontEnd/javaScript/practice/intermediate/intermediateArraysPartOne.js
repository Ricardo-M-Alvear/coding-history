let products = [
    { name: "Pens", inStock: true, qtyNeeded: 0 },
    { name: "Paper", inStock: false, qtyNeeded: 10 },
    { name: "Staples", inStock: false, qtyNeeded: 500 },
    { name: "Erasers", inStock: true, qtyNeeded: 0 }
];
let a = products.filter(e => {
    return e.inStock === false
}).map(e =>  `BUY: ${e.name} (${e.qtyNeeded} units)`)
console.log(a);

let listA = ["Jay", "Beyoncé", "Jay"];
let listB = ["Drake", "Rihanna"];
let listC = ["Beyoncé", "SZA", "J"];
let b = [...new Set([...listA, ...listB, ...listC])].toSorted().every(e => e.length > 2);
console.log(b);

let movies = [
    { title: "Epic", length: 180, rating: 8 },
    { title: "Shorty", length: 60, rating: 6 },
    { title: "Classic", length: 120, rating: 9 },
    { title: "Indie", length: 90, rating: 7.5 }
];
let c = movies.filter(e => e.rating < 7).toSorted((a,b) => a.length - b.length)
let g = c.reduce((acc, cur) => acc + cur.length);
console.log(g <= 300 ? "Can watch all" : "Too long");

let rawTags = [" JavaScript  ", "  coding", "WebDev "];

let d = rawTags.map(tag => `#${tag.trim().toLowerCase()}`).join(" #");
console.log(d);

let ledger = [500, -20, 1500, -100, 45];
let e = ledger.reduce((acc, cur) => {
    return acc + cur;
});
console.log(e);
let f = ledger.some(e => {
    let result = e > 1000
    if (result){
        console.log(e);
        return result;
    }
})
let t = ledger.find(e => e < 0)
console.log(f);
console.log(t)




