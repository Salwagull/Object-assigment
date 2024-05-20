//Part 1: Employee Data
//Challenge:
//1. Design a type alias named Employee to represent an employee object with properties like 
//name (string), department (string), and role (string).
//2. Include an optional nested object named contact to hold phone and email information (if 
//provided).
//3. Employ a union type for the role property to restrict it to "Manager", "Engineer", or 
//"Intern".
//4. Make the skills property an optional array of strings for listing an employee's skills (if 
//any
var employee = {
    bio: {
        name: "Arham",
        department: "managing",
        role: "manager",
    },
    contact: {
        phone: 3142059171,
        role: "manager",
    },
};
console.log(employee.bio);
console.log(employee.contact);
var car = {
    engine: {
        horsepower: 155,
    },
    getHorsepower: function () {
        return this.engine.horsepower;
    },
};
console.log(car.getHorsepower());
var T_shirt = {
    name: "polo",
    price: 2000,
    color: "blue",
    inventory: {
        stock: 100,
        colorOptions: ["white", "blue", "black", "red"]
    },
    changeColor: function (newColor) {
        return newColor;
    }
};
var myShirt = {
    name: "adidas",
    price: 1500,
    color: "red",
    inventory: {
        stock: 200,
        colorOptions: ["purple", "green", "grey", "red"]
    },
    changeColor: function (newColor) {
        if (newColor = "red") {
            myShirt.price = myShirt.price + (myShirt.price * 10 / 100);
        }
        else if (newColor = "blue") {
            myShirt.price = myShirt.price + (myShirt.price * 5 / 100);
        }
        return newColor;
    }
};
myShirt.changeColor("red");
console.log("the price of red shirt: ".concat(myShirt.price));
myShirt.changeColor("blue");
console.log("the price of blue shirt: ".concat(myShirt.price));
