// In TypeScript, union and intersection types allow you to combine different types in various ways. Here's a breakdown of union and intersection types with examples:

// Union Types:

// Union types allow a variable to have multiple types. You can use the `|` symbol to create a union type. Here are three examples:

//  Example 1: Union of Primitive Types
// typescript
// Union of number and string
let ageOrName: number | string;
ageOrName = 25; // Valid
ageOrName = "John"; // Valid
ageOrName = true; // Error: Type 'boolean' is not assignable to type 'number | string'.

//  Example 2: Union with Custom Types
// typescript
// Union of custom types
type Square = { kind: "square"; size: number };
type Circle = { kind: "circle"; radius: number };
type Shape = Square | Circle;

function calculateArea(shape: Shape): number {
    if (shape.kind === "square") {
        return shape.size * shape.size;
    } else {
        return Math.PI * shape.radius * shape.radius;
    }
}

//  Example 3: Union with Literal Types
// typescript
// Union with literal types
type Status = "success" | "error" | "pending";

function processStatus(status: Status): void {
    console.log(`Processing status: ${status}`);
}

processStatus("success"); // Valid
processStatus("warning"); // Error: Argument of type '"warning"' is not assignable to parameter of type 'Status'.

// Intersection Types:

// Intersection types allow you to combine multiple types into one. You can use the `&` symbol to create an intersection type. Here are four examples:

//  Example 1: Intersection of Object Types
// typescript
// Intersection of object types
type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: number;
    jobTitle: string;
};

type EmployeePerson = Person & Employee;
let employeePerson: EmployeePerson = {
    name: "John",
    age: 30,
    employeeId: 123,
    jobTitle: "Developer"
};

//  Example 2: Intersection with Function Types
// typescript
// Intersection of function types
type GreetFunction = (name: string) => void;
type LogFunction = (message: string) => void;

type GreetAndLogFunction = GreetFunction & LogFunction;

const greetAndLog: GreetAndLogFunction = (name: string) => {
    console.log(`Hello, ${name}`);
    console.log("Log: Greeting message logged.");
};

//  Example 3: Intersection with Classes
// typescript
// Intersection of classes
class Person {
    constructor(public name: string) {}
}

class Logger {
    log(message: string) {
        console.log(message);
    }
}

type PersonWithLogger = Person & Logger;
const personWithLogger: PersonWithLogger = new Person("Alice");
personWithLogger.log("Hello, Logger!"); // Logs: Hello, Logger!

//  Example 4: Intersection with Literal Types

// Intersection with literal types
type Status = "success" | "error";
type Response = {
    status: Status;
    data: string;
};

type LoggingResponse = Response & { timestamp: number };

const response: LoggingResponse = {
    status: "success",
    data: "Data received.",
    timestamp: Date.now()
};