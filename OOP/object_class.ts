/* ### Exercise 1: Bank Account Class

Create a `BankAccount` class with properties for account number and balance. Implement methods for deposit, withdraw, and display balance.

**Solution:**

typescript */
class BankAccount {
    private accountNumber: string;
    private balance: number;

    constructor(accountNumber: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds!");
        }
    }

    displayBalance(): void {
        console.log(`Account Number: ${this.accountNumber}, Balance: ${this.balance}`);
    }
}

// Example usage
const account = new BankAccount("123456789", 1000);
account.deposit(500);
account.withdraw(200);
account.displayBalance(); // Output: Account Number: 123456789, Balance: 1300


/* ### Exercise 2: Book Class

Create a `Book` class with properties for title, author, and price. Implement a method to display book details.

**Solution:** */

// typescript
class Book {
    constructor(private title: string, private author: string, private price: number) {}

    displayDetails(): void {
        console.log(`Title: ${this.title}, Author: ${this.author}, Price: $${this.price}`);
    }
}

// Example usage
const book = new Book("The Alchemist", "Paulo Coelho", 15);
book.displayDetails(); // Output: Title: The Alchemist, Author: Paulo Coelho, Price: $15


/* ### Exercise 3: Student Class

Create a `Student` class with properties for name, age, and grades (an array of numbers). Implement a method to calculate the average grade.

**Solution:** */


class Student {
    constructor(private name: string, private age: number, private grades: number[]) {}

    calculateAverageGrade(): number {
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    }
}

// Example usage
const student = new Student("Alice", 18, [85, 90, 78, 92, 88]);
const averageGrade = student.calculateAverageGrade();
console.log(`Average Grade: ${averageGrade}`); // Output: Average Grade: 86.6


/* ### Exercise 4: ShoppingCart Class

Create a `ShoppingCart` class to manage shopping items. Implement methods to add items, remove items, and calculate total price.

**Solution:**

typescript */
class ShoppingCart {
    private items: { name: string, price: number }[] = [];

    addItem(name: string, price: number): void {
        this.items.push({ name, price });
    }

    removeItem(name: string): void {
        this.items = this.items.filter(item => item.name !== name);
    }

    calculateTotalPrice(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

// Example usage
const cart = new ShoppingCart();
cart.addItem("Laptop", 800);
cart.addItem("Headphones", 50);
cart.removeItem("Headphones");
const totalPrice = cart.calculateTotalPrice();
console.log(`Total Price: $${totalPrice}`); // Output: Total Price: $800


/* ### Exercise 5: Shape Hierarchy

Create a hierarchy of shape classes (e.g., `Circle`, `Rectangle`). Implement methods to calculate area for each shape.

**Solution:** */


class Shape {
    calculateArea(): number {
        return 0;
    }
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


// These exercises cover various aspects of classes and objects in TypeScript and should provide a good understanding of object-oriented concepts in the context of TypeScript programming.