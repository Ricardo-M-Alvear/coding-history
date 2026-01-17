// // class Pet{
// //     constructor(name, needs){
// //         this.name = name;
// //         this.needs = needs;
// //     }
// //     feed(){
// //         return {...this.needs, hunger: this.needs.hunger - 10};
// //     }
// //     checkStatus(){
// //         const {hunger, sleep} = this.needs;
// //         let a = this.needs.skills?.rick;
// //         return "GOOD: " , a || "NO";
// //     }
// // }
// // const pet1 = new Pet("Ricardo", {hunger: 100, sleep: 4});
// // console.log(pet1.name, pet1.needs);
// // console.log(pet1.feed());
// // console.log(pet1.checkStatus());
//
//
//
//
//
//
//
//
//
//
// class Product{
//     constructor(name, category, details) {
//         this.name = name;
//         this.category = category;
//         this.details = details;
//     }
//     formatCurrency(local, countryCurrency){
//         return new Intl.NumberFormat(local, {
//             style: 'currency',
//             currency: countryCurrency,
//         }).format(this.details.price);
//     }
//     summary(){
//         const {name} = this;
//         const {price, stock} = this.details;
//         return `Item: ${name} | Price: ${price} | Stock: ${stock}`;
//     }
//     applyDiscount(percent){
//         const {price} = this.details;
//         this.details = {...this.details, price: price - (price * (percent / 100))};
//     }
// }
// const laptop = new Product("MacBook", "Tech", { price: 1000, stock: 5 });
// laptop.applyDiscount(10);
// const showPrice = laptop.formatCurrency("en-US", "USD");
// console.log(laptop.summary());
// console.log(showPrice);
//
// class DigitalProduct extends Product{
//     constructor(name, category, details, downloadLink) {
//         super(name, category, details);
//         this.downloadLink = downloadLink;
//     }
//     summary(){
//         const {name, category, details} = this;
//         const {price, stock} = this.details;
//         return `${name} ${category} | Price: ${details.price} Stock ${details.stock} and ${this.downloadLink}`;
//     }
// }
// const digitalProduct = new DigitalProduct("MacBook", "Tech", {price: 1000, stock: 5 },"a");
// console.log(digitalProduct.summary());



class SpaceCraft{
    fuelLevel = 5;
    constructor(name, fuelLevel, cargo){
        this.name = name;
        this.fuelLevel = fuelLevel;
        this.cargo = cargo;
    }
    refuel(amount){
        if (isNaN(amount)) return "Sorry, the given input is not a number."
        return this.fuelLevel += amount;
    }
    getStatus(){
        const {name, fuelLevel} = this;
        return `${name} and ${fuelLevel}`
    }
}

class BattleShip extends SpaceCraft{
    constructor(name, fuelLevel, cargo, shields) {
        super(name, fuelLevel, cargo);
        this.shields = shields;
    }
    fireWeapons(){
        return this.targetingComputer?.lockOn();
    }
}
const fleet = [new SpaceCraft("Ricardo", 50, {weight: 500, type: "Mineral"}), new BattleShip("Ricardo", 50, {weight: 500, type: "Mineral"}, true)];

let a = new SpaceCraft("Ricky", 100, {weight: 100, type: "Metal"});
console.log(a.refuel(5));
console.log(a.getStatus());

console.log(JSON.stringify(fleet, null, 2));







