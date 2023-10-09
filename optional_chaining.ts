// Optional Chaining allows you to access properties of an object deeply nested within a chain of properties, without explicitly checking if each level is `null` or `undefined`. If any level in the chain is `null` or `undefined`, the entire expression results in `undefined`.

//  Example 1: Accessing Nested Properties Safely
interface User {
    profile?: {
        address?: {
            city?: string;
        };
    };
}

let user: User = {};
let city = user?.profile?.address?.city;
console.log(city); // Output: undefined


// In this example, `city` is `undefined` because `profile` and `address` are not defined in the `user` object.

//  Example 2: Invoking Optional Methods
class Calculator {
    add(a: number, b: number) {
        return a + b;
    }
}

let calc: Calculator | null = null;
let result = calc?.add(5, 10);
console.log(result); // Output: undefined


// Here, `result` is `undefined` because `calc` is `null`, so the `add` method is not invoked.

//  Example 3: Optional Chaining with Arrays : 
let data: number[] | null = null;
let firstElement = data?.[0];
console.log(firstElement); // Output: undefined


// In this case, `firstElement` is `undefined` because the `data` array is `null`, so accessing the first element with `[0]` returns `undefined`.

// Both Nullish Coalescing and Optional Chaining are powerful features that enhance the safety and readability of your TypeScript code, especially when working with potentially nullable or undefined data.