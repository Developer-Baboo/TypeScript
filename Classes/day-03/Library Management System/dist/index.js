"use strict";
class LibraryItem {
    title;
    author;
    ID;
    available;
    constructor(title, author, ID, available) {
        this.title = title;
        this.author = author;
        this.ID = ID;
        this.available = available;
    }
}
class Book extends LibraryItem {
    genre;
    constructor(title, author, ID, genre) {
        super(title, author, ID, true);
        this.genre = genre;
    }
}
class Magazine extends LibraryItem {
    issueNumber;
    constructor(title, author, ID, issueNumber) {
        super(title, author, ID, true);
        this.issueNumber = issueNumber;
    }
};
class Library {
    items = [];
    addItem(item) {
        this.items.push(item);
        console.log(`Added item: ${item.title}`);
    }
    removeItem(itemID) {
        this.items = this.items.filter(item => item.ID !== itemID);
    }
    displayAvailableItems() {
        const availableItems = this.items.filter(item => item.available);
        console.log("Available Items:");
        availableItems.forEach(item => {
            console.log(`Title: ${item.title}, Author: ${item.author}, ID: ${item.ID}`);
        });
    }
}
class LibraryMember {
    name;
    memberID;
    checkedOutItems = [];
    constructor(name, memberID) {
        this.name = name;
        this.memberID = memberID;
    }
    checkoutItem(item) {
        if (item.available) {
            this.checkedOutItems.push(item);
            item.available = false;
            console.log(`${this.name} checked out ${item.title}`);
        }
        else {
            console.log(`Sorry, ${item.title} is not available for checkout.`);
        }
    }
    returnItem(item) {
        const index = this.checkedOutItems.indexOf(item);
        if (index !== -1) {
            this.checkedOutItems.splice(index, 1);
            item.available = true;
            console.log(`${this.name} returned ${item.title}`);
        }
        else {
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
