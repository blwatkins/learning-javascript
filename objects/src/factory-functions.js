// Factory Function Notes

console.log('FACTORY FUNCTION NOTES -----------------------');

const createUser = (name, age, favoriteColor) => {
    return {
        name: name,
        age: age,
        favoriteColor: favoriteColor
    }
}

const sarah = createUser('Sarah', 25, 'blue');
const john = createUser('John', 43, 'green');
const greg = createUser('Greg', 32, 'blue');

console.log('Users:');
console.log(sarah);
console.log(john);
console.log(greg);

// property value shorthand
const createDog = (name, age, breed) => {
    return {
        name,
        age,
        breed,

        speak: () => console.log('Bark!')
    }
}

const spot = createDog('Spot', 2, 'Dalmation');
const buscuit = createDog ('Buscuit', 1, 'Golden Lab');

console.log('Dogs:');
console.log(spot);
console.log(buscuit);
spot.speak();

// destructured assignment
// create a variable with the name of an object's key
let { name, breed } = buscuit;
console.log(`${name}'s breed is ${breed}.`);
