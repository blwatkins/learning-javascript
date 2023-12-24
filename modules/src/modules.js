// Module Notes

// Import Single Function
import { sayHello } from "./export";

// Import Single Function with Rename
import { sayGoodbye as bye } from "./export";

// Import from a Default Export with a Rename
import TheCircleClass from "./default-export";

sayHello('Bob');
bye('Sally');

const circle = new TheCircleClass(50, 60);
circle.logPosition();
console.log(`PI = ${TheCircleClass.getPI()}`);
