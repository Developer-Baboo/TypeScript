/* 
Scenario: Creating a Library Management System
1. Create a class called `LibraryItem` that represents an item in the library. Include properties like `title`, `author`, `ID`, and `available` status.
2. Implement two subclasses `Book` and `Magazine` that inherit from `LibraryItem`. Add additional properties and methods that are specific to each type.
3. Develop a `Library` class that manages a collection of `LibraryItem` objects. Include methods to add items, remove items, and display available items.
4. Implement a `LibraryMember` class that represents a member of the library. Include properties like `name`, `memberID`, and `checkedOutItems` array.
5. Create methods for the `LibraryMember` class to check out and return items. Ensure that the number of checked-out items is within the limits.
6. Test the system by creating instances of the `Library`, `LibraryItem`, and `LibraryMember` classes, and perform various operations like adding items to the library, checking out items, and displaying the available items.
 */


// Define a class  with properties: title, author, ID, and availability status.
class LibraryItem {
    constructor(public title: string, public author: string, public ID: number, public available: boolean) {}
}

// Extend LibraryItem Class with properties
class Book extends LibraryItem {
    constructor(title: string, author: string, ID: number, public genre: string) {
        super(title, author, ID, true);
    }
}
// Extend LibraryItem with additional properties
class Magazine extends LibraryItem {
    constructor(title: string, author: string, ID: number, public issueNumber: number) {
        super(title, author, ID, true);
    }
}

// Define a Library class to manage a collection of LibraryItem objects.
class Library {
    private items: LibraryItem[] = [];

    // Method to add an item to the library.
    addItem(item: LibraryItem): void {
        this.items.push(item);
        console.log(`Added item: ${item.title}`);
    }

    // Method to remove an item from the library based on its ID.
    removeItem(itemID: number): void {
        this.items = this.items.filter(item => item.ID !== itemID);
    }

    // Method to display available items in the library.
    displayAvailableItems(): void {
        const availableItems = this.items.filter(item => item.available);
        console.log("Available Items:");
        availableItems.forEach(item => {
            console.log(`Title: ${item.title}, Author: ${item.author}, ID: ${item.ID}`);
        });
    }
}

// Define a class representing a library member with a name, memberID, and a list of checked out items.
class LibraryMember {
    private checkedOutItems: LibraryItem[] = [];

    constructor(public name: string, public memberID: number) {}

    // Method to checkout an item from the library
    checkoutItem(item: LibraryItem): void {
        if (item.available) {
            this.checkedOutItems.push(item);
            item.available = false;
            console.log(`${this.name} checked out ${item.title}`);
        } else {
            console.log(`Sorry, ${item.title} is not available for checkout.`);
        }
    }
    // Method to return a checked out item to the library.
    returnItem(item: LibraryItem): void {
        const index = this.checkedOutItems.indexOf(item);
        if (index !== -1) {
            this.checkedOutItems.splice(index, 1);
            item.available = true;
            console.log(`${this.name} returned ${item.title}`);
        } else {
            console.log(`Invalid item to return: ${item.title}`);
        }
    }
}

// Example Usage
const book1 = new Book("Hamlet", "Shakespeare", 1, "Fiction");
const magazine1 = new Magazine("Rich Dad and Poor Dad", "Robert", 2, 123);

const library = new Library();
library.addItem(book1);
library.addItem(magazine1);

const member = new LibraryMember("Baboo Kumar", 101);
member.checkoutItem(book1);
library.displayAvailableItems();

member.checkoutItem(magazine1); // Not available, should display a message

member.returnItem(book1);
library.displayAvailableItems();