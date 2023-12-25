// Objects Notes

/* NOTES:
** - Objects are mutable
** - You can mutate (reassign and add key-value pairs) objects declared with const
*/

// object literal
let emptyObject = {};

let myObject = {
    'Special Character Key!': 'string value',
    regularKey: 'my string value from regular key',
    myArray: ['this', 'is', 'my', 'array'],
    intValue: 108,
    floatValue: 45.295,

    // function with functon syntax
    firstFunction: function() {
        console.log('first function!');
    },

    // function with arrow syntax
    secondFunction: () => {
        console.log('this is the second function!');
    },

    // inline function
    thirdFunction() {
        console.log('third function! third function!')
    },

    // nested object
    innerObject: {
        key: 'value'
    }
};

// accessing values with dot notation
const anArray = myObject.myArray;
console.log(anArray);

// accessing values with bracket notation
const specialValue = myObject['Special Character Key!'];
console.log(specialValue);

// accessing values with bracket notation with variables
let keyName = 'regularKey';
const keyValue = myObject[keyName];
console.log(keyValue);

// removing a key-value pair
console.log(`before deletion = ${myObject.floatValue}`);
delete myObject.floatValue;
console.log(`after deletion = ${myObject.floatValue}`);

// changing a value
console.log(`before change = ${myObject.intValue}`);
myObject.intValue = 500;
console.log(`after change = ${myObject.intValue}`);

// adding a key-value pair
console.log(`before add = ${myObject.boolValue}`);
myObject.boolValue = false;
console.log(`after add = ${myObject.boolValue}`);

// using the object methods
myObject.firstFunction();
myObject.secondFunction();
myObject.thirdFunction();
