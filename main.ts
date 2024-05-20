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

type Employee = {
    bio:{
    name: string,
    department: string,
    role: string,
    },
    contact:{
        phone?: number,
        email?: string,
        role: "manager"| "engineer"| "intern",
    },
};
const employee :Employee = {
    bio:{
        name: "Arham",
        department: "managing",
        role: "manager", 
    },
    contact:{
        phone: 3142059171,
        role: "manager",
    },
};
console.log(employee.bio)
console.log(employee.contact)


//Part 2: Car Details
//Challenge:
//1. Design a type alias named Car to represent a car object.
//2. Include a nested object named engine within Car, containing a property named 
//horsepower (number).
//3. Define a function named getHorsepower directly within the Car type alias to retrieve the 
//engine's horsepower.  

type Car ={
    engine: {
        horsepower: number;
    };
        getHorsepower: ()=> number;
        };
    

    const car: Car ={
        engine:{
            horsepower: 155,
        },
            getHorsepower: function(){
                return this.engine.horsepower;
            },
        };
    console.log(car.getHorsepower())


    //Part 3: Colorful T-Shirts
//Challenge:
//1. Design a type alias named Product to represent a T-shirt object with properties like name
//(string), price (number), and color (string).
//2. Include a nested object named inventory within Product. This inventory object 
//should have two properties: 
//o stock (number): Represents the number of T-shirts available.
//o colorOptions (optional array of strings): Lists available colors (if any).
//3. Inside the inventory object, define a function named changeColor. This function 
//accepts a new color string as an argument. When called, it should: 
//o Update the color property of the Product object.
//o Adjust the price based on the new color (implement your own logic, e.g., 
//increase by 10% for red, decrease by 5% for blue)

type Product = {
name: string,
price: number,
color: string,
inventory:{
    stock: number, 
    colorOptions?:string[]
},
changeColor: (newColor:string)=>string
};
let T_shirt: Product = {
    name:"polo",
    price: 2000,
    color: "blue",
    inventory:{
        stock: 100,
        colorOptions:["white", "blue", "black", "red"]
    },
    changeColor:(newColor:string)=>{
        return newColor
    }
    }
    let myShirt: Product = {
        name:"adidas",
        price: 1500,
        color: "red",
        inventory:{
            stock: 200,
            colorOptions:["purple", "green", "grey", "red"]
        },
        changeColor:(newColor:string)=>{
            if(newColor = "red"){
                myShirt.price = myShirt.price+(myShirt.price *10/100)
            } else if(newColor = "blue"){
                myShirt.price = myShirt.price + (myShirt.price *5/100)
            }
            return newColor
        }
        }

        myShirt.changeColor("red")
        console.log(`the price of red shirt: ${myShirt.price}`);
        myShirt.changeColor("blue")
        console.log(`the price of blue shirt: ${myShirt.price}`);


