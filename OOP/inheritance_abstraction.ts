// Certainly! Here are five medium-level exercises with solutions, explained and commented, focusing on inheritance and abstractions in TypeScript:

/* ### Exercise 1: Animal Hierarchy

Create a base class `Animal` with properties for name and sound. Implement derived classes `Dog`, `Cat`, and `Bird`. Each derived class should make a unique sound.

**Solution:**

typescript */
class Animal {
    constructor(protected name: string, protected sound: string) {}

    makeSound(): void {
        console.log(`${this.name} says ${this.sound}`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name, "Woof");
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name, "Meow");
    }
}

class Bird extends Animal {
    constructor(name: string) {
        super(name, "Tweet");
    }
}

// Example usage
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");
const bird = new Bird("Chirpy");

dog.makeSound(); // Output: Buddy says Woof
cat.makeSound(); // Output: Whiskers says Meow
bird.makeSound(); // Output: Chirpy says Tweet


/* ### Exercise 2: Shape Hierarchy

Create an abstract class `Shape` with an abstract method `calculateArea()`. Implement derived classes `Circle` and `Rectangle` with their specific implementations of `calculateArea()`.

**Solution:**

typescript */
abstract class Shape {
    abstract calculateArea(): number;
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

// Example usage
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

console.log(`Circle Area: ${circle.calculateArea()}`); // Output: Circle Area: 78.54
console.log(`Rectangle Area: ${rectangle.calculateArea()}`); // Output: Rectangle Area: 24


/* ### Exercise 3: Employee Hierarchy

Create an abstract class `Employee` with properties for name and salary. Implement derived classes `Manager` and `Developer` with their specific implementations.

**Solution:**

typescript */
abstract class Employee {
    constructor(protected name: string, protected salary: number) {}

    abstract getDetails(): string;
}

class Manager extends Employee {
    constructor(name: string, salary: number, private department: string) {
        super(name, salary);
    }

    getDetails(): string {
        return `Manager: ${this.name}, Salary: ${this.salary}, Department: ${this.department}`;
    }
}

class Developer extends Employee {
    constructor(name: string, salary: number, private programmingLanguage: string) {
        super(name, salary);
    }

    getDetails(): string {
        return `Developer: ${this.name}, Salary: ${this.salary}, Language: ${this.programmingLanguage}`;
    }
}

// Example usage
const manager = new Manager("John", 60000, "Sales");
const developer = new Developer("Alice", 50000, "JavaScript");

console.log(manager.getDetails()); // Output: Manager: John, Salary: 60000, Department: Sales
console.log(developer.getDetails()); // Output: Developer: Alice, Salary: 50000, Language: JavaScript


/* ### Exercise 4: Bank Account Abstraction

Create an abstract class `BankAccount` with methods `deposit()` and `withdraw()`. Implement a derived class `SavingsAccount` with interest calculation.

**Solution:**

typescript */
abstract class BankAccount {
    constructor(protected balance: number) {}

    abstract deposit(amount: number): void;

    abstract withdraw(amount: number): void;

    getBalance(): number {
        return this.balance;
    }
}

class SavingsAccount extends BankAccount {
    private interestRate: number = 0.05; // 5%

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient Funds");
        }
    }

    applyInterest(): void {
        this.balance += this.balance * this.interestRate;
    }
}

// Example usage
const savingsAccount = new SavingsAccount(1000);
savingsAccount.deposit(500);
savingsAccount.applyInterest();
console.log(`Balance after interest: ${savingsAccount.getBalance()}`); // Output: Balance after interest: 1575


/* ### Exercise 5: Vehicle Abstraction

Create an abstract class `Vehicle` with properties for brand and wheels. Implement derived classes `Car` and `Bike` with their specific implementations.

**Solution:**

typescript */
abstract class Vehicle {
    constructor(protected brand: string, protected wheels: number) {}

    abstract displayInfo(): void;
}

class Car extends Vehicle {
    constructor(brand: string) {
        super(brand, 4);
    }

    displayInfo(): void {
        console.log(`Car: ${this.brand}, Wheels: ${this.wheels}`);
    }
}

class Bike extends Vehicle {
    constructor(brand: string) {
        super(brand, 2);
    }

    displayInfo(): void {
        console.log(`Bike: ${this.brand}, Wheels: ${this.wheels}`);
    }
}

// Example usage
const car = new Car("Toyota");
const bike = new Bike("Honda");

car.displayInfo(); // Output: Car: Toyota, Wheels: 4
bike.displayInfo(); // Output: Bike: Honda, Wheels: 2


/* These exercises demonstrate the concepts of inheritance and abstractions in TypeScript, providing practical examples and solutions. Each exercise defines an abstract class and implements derived classes to showcase the use of abstract methods and class inheritance. */