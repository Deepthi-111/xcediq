//Declare variables for the following and assign appropriate values:

let name="Deepthi challa";
var age=20;
let village="Budathanapalli";
let isStudent=true;
let emptvalue=null;
let undfvalue;

const pi=3.14159;
let greeting="Hello, world!";
let isSunny=false;
let favoriteNumber=7;

//Print the data type of each variable you created in the previous section using the `typeof` operator.

console.log(typeof name);
console.log(typeof age);
console.log(typeof village);
console.log(typeof isStudent);
console.log(typeof emptvalue);
console.log(typeof undfvalue);
console.log(typeof pi);
console.log(typeof greeting);
console.log(typeof isSunny);
console.log(typeof favoriteNumber);

//Create a variable `mixedValue` and assign it a value of your choice that includes multiple data types (e.g., a string, a number, and a boolean).
let mixedValue="Hello,every one  "+favoriteNumber+"'it my birthday"+"and is it sunny? I think so"+isSunny;

//Print the data type of `mixedValue`.
console.log(typeof mixedValue);

//Operators:

// Perform the following arithmetic operations using variables:
let a=150;
let b=120;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

//Use comparison operators to compare the values of variables:
console.log(a==b);
console.log(a!=b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

//Use logical operators to combine conditions:
console.log(a<b&& a>b);
console.log(a>b || a<b);
console.log(!(a>b));

//Use the ternary operator to conditionally assign a value to a variable.
let minimum=(a<b)?a:b;

//Additional Tasks:
//Create a variable `temperature` and assign it a temperature value in Fahrenheit.
var temperture=100;

//Convert the temperature to Celsius using the formula: Celsius = (Fahrenheit - 32) * 5/9.
let celsius=(temperture-32)*5/9;

//Print the converted temperature.
console.log(celsius);

//Create a variable `age` and assign it a value.
let age=35;

//Determine whether the person is a minor, an adult, or a senior citizen based on the age.
let type;
if(age<18) {
    type="minor";
    } else if(age>=18 && age<=64) {
        type="adult";
    } else {
            type="senior";
            }

// Print the appropriate message.
console.log(`The person is an ${type}`);