// typeof Operator Notes

/* NOTES:
** - The `typeof` operator returns a string
*/

// Possible typeof Return Values Link
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#description

console.log('TYPEOF NOTES ---------------------------------');

let cat;
console.log(`cat = ${cat}; typeof cat = ${typeof cat}`);

cat = 'cat';
console.log(`cat = ${cat}; typeof cat = ${typeof cat}`);

cat = 45;
console.log(`cat = ${cat}; typeof cat = ${typeof cat}`);

cat = 34.930;
console.log(`cat = ${cat}; typeof cat = ${typeof cat}`);

cat = false;
console.log(`cat = ${cat}; typeof cat = ${typeof cat}`);

cat = {
    var: 'value'
}
console.log(`cat = ${cat}; typeof cat = ${typeof cat}`);

cat = () => Math.PI;
console.log(`cat = ${cat}; typeof cat = ${typeof cat}`);
