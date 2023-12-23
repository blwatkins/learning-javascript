// Arrow Function Notes

/* NOTES:
** - Introduced in ES6
** - 'Fat Arrow' Notation -- () =>
** - Remove the need to type out the `function` keyword when you write a function expression
*/

// regular arrow function syntax
const askAge = (name) => {
    console.log(`Hello, ${name}! How old are you?`);
};

askAge('Joe');

// concise arrow notation

// functions with a single parameter do not need it enclosed in parentheses
const logDouble = value => {
    console.log(value * 2);
};

logDouble(45.23);

// single-line functions do not need curly braces
// whatever the line evaluates will be what is returned. this is known as an implicit return.

const getTripple = value => value * 3;

console.log(`14 * 3 = ${getTripple(14)}`);
