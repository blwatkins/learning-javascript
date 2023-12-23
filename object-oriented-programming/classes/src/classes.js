// Classes Notes

class Circle {
    constructor(x, y) {
        // underscore before instance variable name indicates a "private" variable
        this._x = x;
        this._y = y;
    }

    // getters
    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    // methods
    logPosition() {
        console.log(`(${this._x}, ${this._y})`);
    }

    // static method
    static getPI() {
        return Math.PI;
    }
}

const myCircle = new Circle(50, 75);
console.log(`myCircle: (${myCircle.x}, ${myCircle.y})`);
myCircle.logPosition();

// calling a static method
console.log(Circle.getPI());
