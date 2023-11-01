// main.ts
import SecureApp from "./secureApp";

// Create an instance of SecureApp
const secureApp = new SecureApp();

// Call the sensitiveData method (it will be logged and checked for authentication)
const output: string = secureApp.sensitiveData();

// Write the output to a file
const fs = require("fs");
fs.writeFileSync("output.txt", output);

// Output will also be printed in the console
console.log(output);
