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









