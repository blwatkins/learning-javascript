// Default Export Notes

class Circle {
    constructor(x, y) {
        // underscore before instance variable name indicates a "private" variable
        this._x = x;
        this._y = y;
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

export default Circle;
