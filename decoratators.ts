/* function first() {
    console.log("first(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("first(): called");
    };
}
function second() {
    console.log("second(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("second(): called");
    };
}

class ExampleClass {
    count: number = 0;
    @first()
    @second()
    method() {
        this.count++;
        console.log('custom fn', this.count);
    }
}

let dec = new ExampleClass();

console.log('+++++++++++++++++++++++');
dec.method();
console.log('==============', dec.count); */



/* // Decorator function declaration
function logDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
    // Save a reference to the original method
    const originalMethod = descriptor.value;

    // Modify the descriptor value to log before and after the method call
    descriptor.value = function (...args: any[]) {
        console.log(`Calling method ${key} with arguments: ${JSON.stringify(args)}`);

        // Call the original method
        const result = originalMethod.apply(this, args);

        console.log(`Method ${key} returned: ${result}`);
        return result;
    };

    return descriptor;
}

// Class with a method decorated with logDecorator
class Example {
    // Applying the decorator to the method
    @logDecorator
    greet(message: string) {
        console.log(`Hello, ${message}!`);
        return `Hello, ${message}!`;
    }
}

// Creating an instance of the class
const exampleInstance = new Example();

// Calling the decorated method
exampleInstance.greet("World");
 */



// Decorators

// Class Decorators
// Method Decorators
// Property Decorators
// Parameter Decorators

// Decorator definition
function myDecorator() {
    // Inner function, which is the actual decorator
    function newMethod(constructor: any, propertyName: string, descriptor: PropertyDescriptor) {
        // Save a reference to the original method
        const oldMethod = descriptor.value;
        // Log a message before calling the original method
        console.log("This is a new Method");
        // Call the original method
        oldMethod();
    }
    // Return the decorator function
    return newMethod;
}

// Class definition
class ABC {
    // Property declaration
    name: string;

    // Constructor accepting a name parameter
    constructor(name: string) {
        this.name = name;
    }

    // Method to get a message
    getMessage() {
        return "Hello";
    }

    // Method decorated with 'myDecorator' decorator
    @myDecorator()
    logMessage() {
        console.log("Log Message");
    }
}

// Create an instance of the class ABC with name 'John'
const abc = new ABC("John");

// Get a reference to a button element with id 'btn'
const btn = document.getElementById('btn') as HTMLButtonElement;

// Add a click event listener to the button, calling abc.logMessage() when clicked
btn.addEventListener('click', abc.logMessage);