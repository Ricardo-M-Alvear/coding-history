const book = {
    title: "Buddy",
    author: "Ricardo",
    yearPublished: "2025",
    isAvailable: true,
    genre: 'Gaming'
}
book.yearPublished = "2024";
console.log(book);

const calculator = {
    num1: 5,
    num2: 5,
    add: function(){return this.num1 + this.num2},
    multiply: function(){return this.num1 * this.num2}
}
console.log(calculator.add(5,5));
console.log(calculator.multiply(5,5));

const account = {
    owner: "Ricardo",
    balance: 100,
    deposit: function(num){return this.balance += num},
    withdraw: function(num){return this.balance > num ? this.balance - num : "Insufficient funds."},
}
console.log(account.deposit(500));
console.log(account.withdraw(200));

const library = [
    {title: "Buddy", isRead: true,},
    {title: "Ricky", isRead: false,},
    {title: "Ricardo", isRead: true,},
]
let a = library.map(e => {
    return e.isRead ? `Read ${e.title}` : `To read ${e.title}`;
})
console.log(a)

function createPlayer(name, level){
    return {
        name,
        level,
        levelUp: function() {return this.level += 1},
    }
}
const p1 = createPlayer("Ricardo", 5);
console.log(p1.name, p1.levelUp())

const jsonString = JSON.stringify(p1);
console.log(jsonString);
console.log(typeof(jsonString) === "string");
const restoredPlayer = JSON.parse(jsonString);
console.log(restoredPlayer)
