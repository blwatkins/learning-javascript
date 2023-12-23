// Function Notes

// hoising example
// NOTE: this is bad practice
sayThankYou('Julie');

// function definition
function sayHello() {
    console.log('Hello, World!');
}

// function call
sayHello();

// function definition with parameter
function sayThankYou(name) {
    console.log(`Thank you, ${name}!`);
}

// function call with argument
sayThankYou('Bob');

// function definition with a default parameter
// introduced in ES6
function giveGreeting(name = 'stranger') {
    console.log(`Hello, ${name}!`);
}

giveGreeting('Milton');
giveGreeting();

// returning values from functions
function getTriangleArea(base, height) {
    return (base * height) / 2.0;
}

console.log(`Triangle area=${getTriangleArea(6, 29.335)}`);
