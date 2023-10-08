// 1- Create a TypeScript variable with an explicit type annotation for a string, and assign it a value.
let str: string = "Hello";
console.log(str);

// 2- Declare a number variable and a boolean variable with type annotations, and then assign them values.
let num1: number;
let bol2: boolean;
num1: 2;
bol2: true;

// 3- Define an array of strings using type annotation.

let myArray1: string[] = []; //empty array of strings
let myArray: string[] = ["apple", "banana", "orange", "grape"];


// 4- Create an object with properties "name" (string), "age" (number), and "isStudent" (boolean), and annotate its type explicitly.

// Define the object type explicitly using an interface or type alias
interface Person {
    name: string;
    age: number;
    isStudent: boolean;
}

// Create an object of type Person
let person: Person = {
    name: "John Doe",
    age: 25,
    isStudent: true
};
///////////////////////////////////////////////////////////////////////// Type Inference: /////////////////////////////////

// 5- Declare a variable without an explicit type annotation and initialize it with a string value.

let myVariable = "Hello, World!";

// 6- Create an array of numbers without specifying the type explicitly.
let numbers = [1, 2, 3, 4, 5];
// 7- Define a function that takes two parameters (a string[] and a number[]), calculates their length,
// and returns the sum of their lengths. Observe the inferred type of the function.

function calculateTotalLength(strings: string[], numbers: number[]): number {
    const totalLength: number = strings.length + numbers.length;
    return totalLength;
}

// Example usage
const strings: string[] = ["apple", "banana", "cherry"];
const numbers: number[] = [1, 2, 3, 4, 5];

const totalLength: number = calculateTotalLength(strings, numbers);
console.log("Total length:", totalLength);

//////////////////////////////////////////////////////////////////////// Functions and Interfaces in TypeScript:

// 8- Define an interface called Person with properties "name" (string) and "age" (number). Then, create an object that conforms to this interface.
// Define the Person interface
interface Person {
    name: string;
    age: number;
}

// Create an object conforming to the Person interface
let personObject: Person = {
    name: "John Doe",
    age: 30
};

// 9- Write a function that accepts a Person object and prints out their name and age.

// Define the Person interface
interface Person {
    name: string;
    age: number;
}

// Function that accepts a Person object and prints their name and age
function printPersonInfo(person: Person): void {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
}

// Example usage
let personObject: Person = {
    name: "John Doe",
    age: 30
};

// Call the function with the person object
printPersonInfo(personObject);

// 10- Create an array of Person objects and use a loop to print the name and age of each person.
// Define the Person interface
interface Person {
    name: string;
    age: number;
}

// Array of Person objects
let people: Person[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

// Loop through the array and print name and age of each person
for (let person of people) {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
}

// 11- Define an interface Shape with a method area() that returns a number. Create two classes, Circle and Rectangle,
//  both implementing the Shape interface. Write functions to calculate and display the area of a circle and a rectangle.
// Define the Shape interface
interface Shape {
    area(): number;
}

// Circle class implementing the Shape interface
class Circle implements Shape {
    constructor(private radius: number) {}

    // Implementation of the area method for Circle
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// Rectangle class implementing the Shape interface
class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}

    // Implementation of the area method for Rectangle
    area(): number {
        return this.width * this.height;
    }
}

// Function to calculate and display the area of a shape
function displayArea(shape: Shape): void {
    console.log(`Area: ${shape.area()}`);
}

// Example usage
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

console.log("Circle Area:");
displayArea(circle); // Output: Area: 78.53981633974483

console.log("Rectangle Area:");
displayArea(rectangle); // Output: Area: 24