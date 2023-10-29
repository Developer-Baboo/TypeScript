"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
var SecureApp_1 = require("./SecureApp");
var app = new SecureApp_1.default();
try {
    app.sensitiveData(); // This should log method execution if authenticated
}
catch (error) {
    console.error(error.message);
}
