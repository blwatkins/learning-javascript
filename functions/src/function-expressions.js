// Function Expression Notes

/* NOTES:
** - function expressions are not hoisted
*/

console.log('FUNCTION EXPRESSION NOTES --------------------');

const getArea = function(width, height) {
    return width * height;
}

console.log(`The area is ${getArea(10, 23.4)} square feet`);
