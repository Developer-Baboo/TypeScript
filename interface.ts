// Interface defining the structure of a person object
interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

// Function that accepts an object of type Person
function displayPersonInfo(person: Person): void {
    console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);
}

const person: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
};

displayPersonInfo(person); // Output: Name: John Doe, Age: 25




// Interface with readonly property
interface Circle {
    readonly radius: number;
}

// Function that calculates the area of a circle
function calculateCircleArea(circle: Circle): number {
    return Math.PI * circle.radius ** 2;
}

const myCircle: Circle = {
    radius: 5
};

console.log("Circle Area:", calculateCircleArea(myCircle)); // Output: Circle Area: 78.54

// Attempting to modify a readonly property results in a compilation error
// myCircle.radius = 10; // Error: Cannot assign to 'radius' because it is a read-only property.





// Interface with function signature
interface Calculator {
    (a: number, b: number): number;
}

// Function that adds two numbers
const add: Calculator = function(a: number, b: number): number {
    return a + b;
}

console.log("Sum:", add(10, 20)); // Output: Sum: 30