var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Define a class representing a generic library item with properties: title, author, ID, and availability status.
var LibraryItem = /** @class */ (function () {
    function LibraryItem(title, author, ID, available) {
        this.title = title;
        this.author = author;
        this.ID = ID;
        this.available = available;
    }
    return LibraryItem;
}());
// Extend LibraryItem to create a Book class with an additional genre property.
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(title, author, ID, genre) {
        var _this = _super.call(this, title, author, ID, true) || this;
        _this.genre = genre;
        return _this;
    }
    return Book;
}(LibraryItem));
// Extend LibraryItem to create a Magazine class with an additional issueNumber property.
var Magazine = /** @class */ (function (_super) {
    __extends(Magazine, _super);
    function Magazine(title, author, ID, issueNumber) {
        var _this = _super.call(this, title, author, ID, true) || this;
        _this.issueNumber = issueNumber;
        return _this;
    }
    return Magazine;
}(LibraryItem));
// Define a Library class to manage a collection of LibraryItem objects.
var Library = /** @class */ (function () {
    function Library() {
        this.items = [];
    }
    // Method to add an item to the library.
    Library.prototype.addItem = function (item) {
        this.items.push(item);
        console.log("Added item: ".concat(item.title));
    };
    // Method to remove an item from the library based on its ID.
    Library.prototype.removeItem = function (itemID) {
        this.items = this.items.filter(function (item) { return item.ID !== itemID; });
    };
    // Method to display available items in the library.
    Library.prototype.displayAvailableItems = function () {
        var availableItems = this.items.filter(function (item) { return item.available; });
        console.log("Available Items:");
        availableItems.forEach(function (item) {
            console.log("Title: ".concat(item.title, ", Author: ").concat(item.author, ", ID: ").concat(item.ID));
        });
    };
    return Library;
}());
// Define a class representing a library member with a name, memberID, and a list of checked out items.
var LibraryMember = /** @class */ (function () {
    function LibraryMember(name, memberID) {
        this.name = name;
        this.memberID = memberID;
        this.checkedOutItems = [];
    }
    // Method to checkout an item from the library
    LibraryMember.prototype.checkoutItem = function (item) {
        if (item.available) {
            this.checkedOutItems.push(item);
            item.available = false;
            console.log("".concat(this.name, " checked out ").concat(item.title));
        }
        else {
            console.log("Sorry, ".concat(item.title, " is not available for checkout."));
        }
    };
    // Method to return a checked out item to the library.
    LibraryMember.prototype.returnItem = function (item) {
        var index = this.checkedOutItems.indexOf(item);
        if (index !== -1) {
            this.checkedOutItems.splice(index, 1);
            item.available = true;
            console.log("".concat(this.name, " returned ").concat(item.title));
        }
        else {
            console.log("Invalid item to return: ".concat(item.title));
        }
    };
    return LibraryMember;
}());
// Example Usage
var book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 1, "Fiction");
var magazine1 = new Magazine("National Geographic", "Various", 2, 123);
var library = new Library();
library.addItem(book1);
library.addItem(magazine1);
var member = new LibraryMember("John Doe", 101);
member.checkoutItem(book1);
library.displayAvailableItems();
member.checkoutItem(magazine1); // Not available, should display a message
member.returnItem(book1);
library.displayAvailableItems();
