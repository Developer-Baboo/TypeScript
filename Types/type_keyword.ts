/* 
In TypeScript, the type keyword is used to define custom types by combining existing types or creating new ones. In your example, you used the type keyword to define three types: Person, Employee, and EmployeePerson. Let's break down these types and provide additional examples for better understanding:
*/

// 1: Basic Types
// You can use the type keyword to define basic types like strings, numbers, booleans, etc.
type ID = number;
type Name = string;
type IsValid = boolean;

let userId: ID = 1;
let userName: Name = "Alice";
let isValidUser: IsValid = true;


// 2: Union Types:  Union types allow a variable to have multiple types.
type Status = "active" | "inactive" | "pending";
let userStatus: Status = "active";

// 3. Intersection types are formed by combining multiple types. You used this in your original example.

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


// Functions Types: You can use the type keyword to define function types.
type Calculator = (a: number, b: number) => number;

const add: Calculator = (a, b) => a + b;
const multiply: Calculator = (a, b) => a * b;



// Map Types: Mapped types allow you to create new types based on existing ones.
type ReadonlyPerson = {
    readonly [K in keyof Person]: Person[K];
};

const readOnlyPerson: ReadonlyPerson = {
    name: "Alice",
    age: 25
};

// Attempting to modify readonly properties will result in a TypeScript error.
// readOnlyPerson.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.



