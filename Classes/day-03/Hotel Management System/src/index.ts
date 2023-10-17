// Define a class representing a generic library item with properties: title, author, ID, and availability status.
class LibraryItem {
    constructor(public title: string, public author: string, public ID: number, public available: boolean) {}
}

// Extend LibraryItem to create a Book class with an additional genre property.
class Book extends LibraryItem {
    constructor(title: string, author: string, ID: number, public genre: string) {
        super(title, author, ID, true);
    }
}
// Extend LibraryItem to create a Magazine class with an additional issueNumber property.
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
const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 1, "Fiction");
const magazine1 = new Magazine("National Geographic", "Various", 2, 123);

const library = new Library();
library.addItem(book1);
library.addItem(magazine1);

const member = new LibraryMember("John Doe", 101);
member.checkoutItem(book1);
library.displayAvailableItems();

member.checkoutItem(magazine1); // Not available, should display a message

member.returnItem(book1);
library.displayAvailableItems();