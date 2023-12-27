// Advanced Objects Notes

/* NOTES:
** - The `this` keyword references the calling object, giving access to the calling object's properties and methods.
** - IMPORTANT: Avoid using `this` in arrow functions. `this` in bound differently in those situations.
** - We cannot set privacy levels of properties or methods in JavaScript
** - Getter and Setter Funtions
**   - properties cannot having the same name as a getter/setter function
*/

console.log('ADVANCED OBJECTS NOTES -----------------------');

const weirdCalculator = {
    valueA: 0,
    valueB: 0,
    _privateValue: 100,

    add() {
        return this.valueA + this.valueB;
    },

    logValueA() {
        console.log(this.valueA);
    },

    logValueA_arrow: () => {
        console.log(this.valueA);
    },

    // getters and setters
    get privateValue() {
        return this._privateValue;
    },

    set privateValue(value) {
        if (typeof value === 'number') {
            this._privateValue = value;
        } else {
            console.log(`'${value}' is not a valid value for privateValue.`);
        }
    }
}

weirdCalculator.valueA = 45;
weirdCalculator.valueB = 17;

// using getters and setters
console.log(`sum = ${weirdCalculator.add()}`);
weirdCalculator.logValueA(); // 45
weirdCalculator.logValueA_arrow(); // undefined

console.log(`private value = ${weirdCalculator.privateValue}`);

weirdCalculator.privateValue = 'happy birthday!';
console.log(`private value = ${weirdCalculator.privateValue}`); // 100

weirdCalculator.privateValue = -493;
console.log(`private value = ${weirdCalculator.privateValue}`); // -493

weirdCalculator._privateValue = false;
console.log(`private value = ${weirdCalculator.privateValue}`); // false
