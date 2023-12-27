// Objects Notes

/* NOTES:
** - Objects are mutable
** - You can mutate (reassign and add key-value pairs) objects declared with const
** - Objects are passed by "reference" (functions with object parameters can permanently mutate the object).
** - Reassigning an object in a function will not affect the object passed to the function (similar behavior to Java).
*/

console.log('OBJECTS NOTES --------------------------------');

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
        key: 'value',

        // array of objects
        'array of objects': [
            {
                key: 'object 0 value',

                printValue() {
                    console.log('print value from object 0');
                }
            }, 
            {
                key: 'object 1 value'
            }
        ]
    },

    secondObject: {
        cat: {
            sound: 'meow'
        },
        dog: {
            sound: 'bark'
        },
        cow: {
            sound: 'moo'
        },
        sheep: {
            sound: 'baaa'
        }
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

// chaining operators
myObject.innerObject['array of objects'][0].printValue();

// altering an object
const someObject = {
    mood: 'happy',
    age: 17,
    occupation: 'dancing queen'
};

console.log(someObject);
console.log(`mood = ${someObject.mood}`);
console.log(`age = ${someObject.age}`);
console.log(`favoriteSong = ${someObject.favoriteSong}`);

const changeMood = object => {
    console.log('Changing mood...');
    object.mood = 'tired';
    object.age = 23;
    object.favoriteSong = 'I Miss You';
}

changeMood(someObject);

console.log(someObject);
console.log(`mood = ${someObject.mood}`);
console.log(`age = ${someObject.age}`);
console.log(`favoriteSong = ${someObject.favoriteSong}`);

// for in syntax for iterating over object keys
for (let animal in myObject.secondObject) {
    console.log(`key = ${animal}`);
    console.log(`The ${animal} says ${myObject.secondObject[animal].sound}`);
}
