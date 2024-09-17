//using this keyword
//1) Regular Functions

function greet(){
    console.log(`Hi I am ${this.namee}`);
}
const person ={
    namee:'Deepthi challa',
    greet : greet,
}
person.greet();


//) Arrow Functions :
const sayHello = () =>{
    return `Hello This is ${this.firstName}`;
}
const person2 ={
    namee:`Deepthi`,
    greet : greet,
    hello: sayHello,
}
console.log(person2.hello())

//Using arguments keyword
function sum(){
    let s=0;
    for(let i=0;i<arguments.length;i++){
        s += arguments[i];
    }
    console.log(s);
}
sum(6,14,20,16,10);

//Primitives vs Objects:
const num = 1287;
const str = "Deepthi";
let bool = true;
const obj = {
    namee:"laptop",
    model:"Thinkpad",
    company:"Lenovo"
};
console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof obj);

/**primitives are simple and stored directly, while objects are complex and stored by reference, allowing for mutable behavior.*/

//Reference in Objects:
const obj1 = {
    name:"Phone",
    brand:"vivo",
    model:"vivo s25 pro"
};

const obj2 = obj1;

obj1.model="vivo s25 pro";
console.log(obj2.model);

/*objects are passed by reference, meaning variables store a reference to the same memory location. When an object is assigned to another variable or passed to a function, both refer to the same object. Changes made through one reference will affect the original object and any other references.*/

//Values in Primitives:
var num1 =5;
var num2 =5;

num1=95;

console.log(`The values of num1 and num2 after updating are ${num1} and ${num2} respectively.`);
console.log(num2);

//Coding Exercise:Primitives vs Objects with/without References:
function swapValues(obj1,obj2){
    if(typeof obj1==="object" && typeof obj2 === "object"){
    let temp = Object.assign({},obj1);
    Object.assign(obj1,obj2);
    Object.assign(obj2,temp);
    console.log("Values Swapped");
    console.log(obj1,obj2);
}else{
    let temp = obj1;
    obj1= obj2;
    obj2 = temp;
}

}

const pen1 = {
    namee:"pencil",
    model:"HB",
    company:"Domos"
};

const pen2 = {
    namee:"PEN",
    model:"ball pen",
    company:"Eloks"
};
swapValues(pen1,pen2);

//Coding Related to Restaurant:
let restaurantMenu = [
    { name: 'Chicken  lolypop Biryani', price: 250, ingredients: ['chicken', 'rice', 'spices', 'yogurt'] },
    { name: 'apolo fish', price: 200, ingredients: ['fish', 'cream','species'] },
    { name: 'Mushroom briyani', price: 130, ingredients: ['Mushroom', 'sauce', 'capsicum', 'spices'] }
];
function addDish(name, price, ingredients) {
    restaurantMenu.push({ name, price, ingredients });
    console.log(`${name} has been added to the menu.`);
}

function removeDish(name) {
    const index = restaurantMenu.findIndex(k => k.name === name);
    if (index !== -1) {
        restaurantMenu.splice(index, 1);
        console.log(`${name} has been removed from the menu.`);
    } else {
        console.log(`${name} not found in the menu.`);
    }
}

function updateDish(name, newPrice, newIngredients) {
    const dish = restaurantMenu.find(dish => dish.name === name);
    if (dish) {
        dish.price = newPrice;
        dish.ingredients = newIngredients;
        console.log(`${name} has been updated.`);
    } else {
        console.log(`${name} not found in the menu.`);
    }
}