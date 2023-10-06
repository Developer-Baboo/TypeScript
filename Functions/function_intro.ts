/* function greet(name: string, id: number) {
    console.log(`Your name is ${name} and your id is : ${id}`);
}

greet("Baboo Kumar Heerani", 21); */

// Using Arrow functions

/* const greet = (name: string, id: number) => console.log(`Your name ${name}  and your id is ${id}`);
greet("Baboo Kumar Herani", 21); */


//Return Type
/* const greet = (name: string, id: number): void => {
    console.log(`Your name ${name}  and your id is ${id}`);
}
    
greet("Baboo Kumar Herani", 21);
 */


/* const greet = (name: string, id: number): string =>  `Your name ${name} and your id is ${id}`; 
const greetingMessage: string = greet("Baboo Kumar Herani", 21);
console.log(greetingMessage);
 */


//Check PalinDrome
/* const Ispalindrome = (palin: string):boolean => {
    let Mypalin = palin.split("").reverse().join("");
    return Mypalin ===palin;
}

console.log(Ispalindrome("123212")); */


/* 
Home Work
1: Create function called calculate average that takes an array of numbers as a 
parameter and returns the average of those numbers.




Write a function that called findMaxValue that takes an array of numbers as a parameter and returns the maximum values in the array

2. 

*/

/* function CalculateAverage(numbers: number[]): number {
    if (numbers.length === 0) {
        return 0;
    }
    // Calculate the sum of the numbers using the reduce method
    const sum: number = numbers.reduce((acc, num) => acc + num, 0);

    // Calculate the average and assign it to the variable 'average'
    let average: number = sum / numbers.length;

    // Return the calculated average
    return average;
}

const numbersArray: number[] = [1, 2, 3, 4];
const averageValue: number = CalculateAverage(numbersArray);
console.log(`The Average of numbers is: ${averageValue}`); */



// Function that takes two numbers as parameters and returns their sum
function addNumbers(a: number, b: number): number {
    return a + b;
}

const result: number = addNumbers(5, 10);
console.log("Sum:", result); // Output: Sum: 15



// Function expression that squares a number
const square = function(num: number): number {
    return num * num;
}

const squaredValue: number = square(4);
console.log("Squared Value:", squaredValue); // Output: Squared Value: 16



// Function with optional and default parameters
function greet(name: string, age?: number, greeting: string = "Hello"): void {
    if (age) {
        console.log(`${greeting}, ${name}! You are ${age} years old.`);
    } else {
        console.log(`${greeting}, ${name}!`);
    }
}

greet("Alice"); // Output: Hello, Alice!
greet("Bob", 30); // Output: Hello, Bob! You are 30 years old.
greet("Charlie", undefined, "Hi"); // Output: Hi, Charlie!













