function calculateArea(length, width) {
    const area = length * width;
    return area;
}

const length = 15;
const width = 12;
const area = calculateArea(length, width);
console.log("The area of the rectangle is: " + area); 

/*2. Write a function `factorial` that takes a number as input and calculates its factorial using a recursive approach. Return the result.*/

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
const num = 10;
const result = factorial(num);
console.log("The factorial of " + num + " is: " + result); 

/*3. Define a function `greet` that takes a name as input and returns a greeting message.*/

function greet(name){
    return `Hello ${name}, have a great day `
}
const str = "Deepthi";
const greeting = greet(str);
console.log(greeting);

//function declarations vs Expressions

/*1. Create a function declaration `sayHello` that logs "Hello, world!" to the console. */
function sayHello() {
    console.log("Hello, world!");
}

sayHello();

/* 2. Write a function expression `greetUser` that takes a name as input and logs a personalized greeting message. */

const greetUser = function(name) {
    console.log("Hello, " + name + "! how are you");
};

greetUser("Deepthi");

//Anonymous function

/*1. Create an anonymous function that takes two numbers as input and returns their sum. */
const sum = function(x, y) {
    return x + y;
};

const resul = sum(19, 2);
console.log(resul);

/*2. Use an anonymous function as a callback for the `setTimeout` function to log a message after a delay. */

setTimeout(function() {
    console.log("This message is logged after a 3-second delay.");
}, 300);

//Arrow functions
/*1. Write an arrow function `double` that takes a number as input and returns its double. */
const double = number => number * 2;

const resul = double(7);
console.log(resul); 

/*2. Create an arrow function `greet` that takes a name as input and returns a greeting message. */

const greet = name => `Hello, ${name}! Welcome!`;

const message = greet("Alex");
console.log(message);

//Coding Exercise

/*1. Write a function `isPrime` that determines if a given number is prime. */

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(56)); 
console.log(isPrime(13)); 

/*2. Create a function `reverseString` that reverses the characters of a given string. */

function reverseString(str) {

    return str.split('').reverse().join('');
}

const original = "Database";
const reversed = reverseString(original);
console.log(reversed); 

/*3. Implement a function `fibonacci` that calculates the nth Fibonacci number. */
function fibonacci(n) {
    if (n <= 0)
         return 0;
    if (n === 1) 
        return 1;

    let a = 0, b = 1, c;

    for (let i = 2; i <= n; i++) {
        c = a + b; 
        a = b; 
        b = c; 
    }

    return b;
}


console.log(fibonacci(7)); 

//Functions calling other functions
/*1. Write a function calculateTotalPrice that calculates the total price of a shopping cart by calling a calculateItemPrice function for each item. */

function calculateItemPrice(item) {
    return item.price * item.quantity;
}

function calculateTotalPrice(cart) {
    let total = 0;
    for (const item of cart) {
        total += calculateItemPrice(item);
    }
    return total;
}
const shoppingCart = [
    { price: 15, quantity: 3 },
    { price: 10, quantity: 5 },
    { price: 50, quantity: 2}
];

const totalPrice = calculateTotalPrice(shoppingCart);
console.log("Total Price:", totalPrice); // Output: Total Price: 31

/*2. Create a function `formatPhoneNumber` that formats a phone number using helper functions for area code, prefix, and suffix. */

function getAreaCode(phoneNumber) {
    return phoneNumber.slice(0, 3);
}

function getPrefix(phoneNumber) {
    return phoneNumber.slice(3, 6);
}

function getSuffix(phoneNumber) {
    return phoneNumber.slice(5);
}

function formatPhoneNumber(phoneNumber) {
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
        return 'Invalid phone number';
    }

    const areaCode = getAreaCode(phoneNumber);
    const prefix = getPrefix(phoneNumber);
    const suffix = getSuffix(phoneNumber);

    return `(${areaCode}) ${prefix}-${suffix}`;
}

const rawPhoneNumber = '2345678901';
const formattedNumber = formatPhoneNumber(rawPhoneNumber);
console.log(formattedNumber);

//Arrays
/*1. Create an array `fruits` containing the names of different fruits. */

const fruits = [
    "Dargon fruit",
    "Cherry",
    "guva",
    "grapes"
    "Mango",
    "Orange"
];
console.log(fruits);

/*2. Access and print the third element of the array. */

const thirdElement = fruits[3];
console.log(thirdElement);

/*3. Add the element "banana" to the end of the array using the `push` method. */

fruits.push("banana");
console.log(fruits);

/*4. Remove the first element from the array using the `shift` method. */

const removedElement = fruits.shift();
console.log(fruits);
console.log("Removed element:", removedElement);

/*5. Iterate over the array using a `for` loop and print each element. */

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//Objects
/*1. Create an object `person` with properties for name, age, and city. */
const person = {
    name: "jessy",
    age: 32,
    city: "chiakago"
};
console.log(person);

/*2. Access and print the value of the "age" property using both dot and square bracket notation. */
console.log(person.age); 
console.log(person["age"]);

/*3. Add a new property "occupation" to the object and assign a value. */

person.occupation = "manger";
console.log(person);

/*4. Create an object `car` with properties for make, model, and year. */
/*5. Define a method `startEngine` on the `car` object that logs a message. */
const car = {
    make: "Suzuki",
    model: "Drize",
    year: 2008

    startEngine: function() {
        console.log("The engine of the " + this.make + " " + this.model + " is now running.");
    }
};

console.log(car);
car.startEngine();

//Iteration
/*1. Use a `for` loop to print numbers from 1 to 10. */

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
/*2. Use a `while` loop to calculate the factorial of a given number. */
function factorial(n) {
    if (n < 0) return 'No factorials for  negative numbers';
    let result = 1; 
    let i = 1; 
    while (i <= n) {
        result *= i; 
        i++; 
    }
    return result;
}

const num = 3;
const fact = factorial(num);
console.log(fact); 
//Scope of Variable Constant

/*1. Create nested functions and demonstrate how variables are accessed from different scopes. */

function outerFunction() {
    const outerVariable = 'I am from outer function';

    function innerFunction() {
        const innerVariable = 'I am fromn inner function';
        
        console.log(outerVariable);
        console.log(innerVariable);
    }
    innerFunction();
}
outerFunction();
