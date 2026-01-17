class Inventory{
    constructor(){
        this.items = [];
        this.name = document.getElementById("p-name");
        this.quantity = document.getElementById("p-qty");
        this.show = document.getElementById('display');
        this.button = document.getElementById('add-item-btn');
        this.button.addEventListener("click", () => {
            this.addItem();
            this.render();
        })
    }
    addItem(){
        const nameValue = this.name.value.trim();
        const qtyValue = parseInt(this.quantity.value);
        const existingItem = this.items.find(x => x.name.toLowerCase() === nameValue.toLowerCase());
        if (existingItem){
            existingItem.quantity += qtyValue;
        }
        this.items.push({name: nameValue, quantity: qtyValue});

        this.name.value = "";
        this.quantity.value = "";
    }
    render(){
        this.show.innerHTML = "";
        this.items.forEach(item => {
            const div = document.createElement("div");
            div.className = "inventory-item";
            div.innerHTML = `<strong>${item.name}</strong>: ${item.quantity} units.`;
            this.show.append(div)
        })
    }
}
const a = new Inventory();



class UserGenerator{
    constructor(){
        this.name = document.getElementById("name");
        this.email = document.getElementById("email");
        this.pictureURL = document.getElementById("pictureURL");
        this.button = document.getElementById("makeNewUserButton");
        this.button.addEventListener("click", () => {
            this.getUser();
        });
    }

    displayUser(data){
        this.name.innerHTML = data.name.first;
        this.email.innerHTML = data.email;
        this.pictureURL.src = data.picture.large;
    }

    async getUser() {
        this.name.value = "";
        this.email.value = "";
        this.pictureURL.value = "";
        try {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            const user = data.results[0]; // The API sends an array called 'results'

            this.displayUser(user);
        } catch (error) {
            console.error("Oops, something went wrong", error);
        }
    }

}
const b = new UserGenerator();


class City{
    constructor(){
        this.cityName = document.getElementById("cityName");
        this.findCityButton = document.getElementById("findCityButton");
        this.cityWeatherCondition = document.getElementById("cityWeatherCondition");
        this.cityTemperature = document.getElementById("cityTemperature");
        this.errorMessage = document.getElementById("errorMessage");
        this.findCityButton.addEventListener("click", () => {
            this.getWeather(this.cityName.value);
        });
    }

    show(data){
        this.cityWeatherCondition.innerText = data.condition;
        this.cityTemperature.innerText = data.temp;
    }

    async getWeather(cityName){
        let cleanCityName = cityName.trim().toLowerCase();
        this.errorMessage.innerText = "";
        try{
            const response = await fetch(`https://wttr.in/${cleanCityName}?format=j1`);
            const data = await response.json();
            const weatherData = {
                condition: data.current_condition[0].weatherDesc[0].value,
                temp: data.current_condition[0].temp_C
            }
            this.show(weatherData);
        }catch(error){
            this.errorMessage.textContent = `Sorry, something went wrong. Error details: ${error}`;
        }
    }
}
const city = new City();



class Dashboard{
    constructor(){
        this.greeting = document.getElementById("greeting");
        this.goalText = document.getElementById("goal-text");
        this.nameInput = document.getElementById("name-input");
        this.goalInput = document.getElementById("goal-input");
        this.saveButton = document.getElementById("save-btn");
        this.clearButton = document.getElementById("clear-btn");
        const a = JSON.parse(localStorage.getItem("user"));
        if (a) this.greeting.innerText = `Sorry, ${a.name} already exists!`;
        this.saveButton.addEventListener("click", () => this.save(this.nameInput, this.goalInput))
        this.clearButton.addEventListener("click", () => this.clear())
    }
    save(name, goal){
        try{
            const saveData = {name: name.value, goal: goal.value};
            this.greeting.innerHTML = `Welcome ${saveData.name}!`;
            this.goalText.innerHTML = `Your goal is ${saveData.goal}!`;
            return localStorage.setItem("user", JSON.stringify(saveData));
        }catch(error){
            this.goalText.innerText = `Sorry, something went wrong. Error details: ${error}`;
        }
    }
    clear(){
        try{
            localStorage.removeItem("user");
        }catch(error){
            this.goalText.innerText = `Sorry, something went wrong. Error details: ${error}`;
        }
    }
}
const saveData = new Dashboard();

