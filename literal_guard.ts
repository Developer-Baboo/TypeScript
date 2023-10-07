// Certainly! Let's discuss literal types and type guards in TypeScript, along with examples and comments for clarity.

//  Literal Types:

/* Literal types allow you to specify exact values that a variable can have. This can be a specific string, number, boolean, or even a custom literal type. Here are a few examples: */

//  Example 1: String Literal Types


// String literal type
type Direction = "left" | "right" | "up" | "down";
let direction: Direction = "right"; // Valid
direction = "top"; // Error: Type '"top"' is not assignable to type 'Direction'.


//  Example 2: Numeric Literal Types


// Numeric literal type
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
let diceResult: DiceRoll = 3; // Valid
diceResult = 8; // Error: Type '8' is not assignable to type 'DiceRoll'.


//  Example 3: Boolean Literal Types


// Boolean literal type
type Status = true | false;
let isActive: Status = true; // Valid
isActive = "yes"; // Error: Type '"yes"' is not assignable to type 'Status'.


//  Example 4: Custom Literal Types


// Custom literal type
type DaysOfWeek = "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";
let today: DaysOfWeek = "Wednesday"; // Valid
today = "Funday"; // Error: Type '"Funday"' is not assignable to type 'DaysOfWeek'.


// ### Type Guards:

// Type guards are a way to narrow down the type of a variable within a specific block of code. They are particularly useful when dealing with union types. Here are a few examples:

//  Example 1: Typeof Type Guard


// typeof type guard
function printMessage(message: string | number) {
    if (typeof message === "string") {
        console.log(message.toUpperCase());
    } else {
        console.log(message.toFixed(2));
    }
}


//  Example 2: instanceof Type Guard
// instanceof type guard
class Car {
    drive() {
        console.log("Driving a car.");
    }
}

class Bike {
    ride() {
        console.log("Riding a bike.");
    }
}

function move(vehicle: Car | Bike) {
    if (vehicle instanceof Car) {
        vehicle.drive();
    } else {
        vehicle.ride();
    }
}


//  Example 3: Custom Type Guard

// Custom type guard
interface Bird {
    fly(): void;
}

interface Fish {
    swim(): void;
}

function isFish(pet: Bird | Fish): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function move(pet: Bird | Fish) {
    if (isFish(pet)) {
        pet.swim();
    } else {
        pet.fly();
    }
}


//  Example 4: Discriminated Unions
// Discriminated unions and type guard
interface Square {
    kind: "square";
    size: number;
}

interface Circle {
    kind: "circle";
    radius: number;
}

type Shape = Square | Circle;

function calculateArea(shape: Shape): number {
    switch (shape.kind) {
        case "square":
            return shape.size * shape.size;
        case "circle":
            return Math.PI * shape.radius * shape.radius;
        default:
            return 0;
    }
}


/* In these examples, literal types provide specific and limited sets of allowed values, while type guards allow you to perform type-specific operations based on runtime checks, making your code more predictable and safe. Discriminated unions, combined with type guards, enhance the expressiveness and safety of your typescript code. */