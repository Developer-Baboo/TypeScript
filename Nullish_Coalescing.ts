//  Nullish Coalescing (`??` operator):

// Nullish Coalescing is a logical operator that returns its right-hand operand when its left-hand operand is `null` or `undefined`, and otherwise returns the left-hand operand. It provides a way to handle default values for nullable or undefined variables.

//  Example 1: Using Nullish Coalescing with Nullable Variables

let username: string | null = null;
let displayName = username ?? "Guest";

console.log(displayName); // Output: Guest


// In this example, `displayName` is assigned the value "Guest" because `username` is `null`.

//  Example 2: Using Nullish Coalescing with Undefined Variables

let age: number | undefined;
let userAge = age ?? 18;

console.log(userAge); // Output: 18


// Here, `userAge` is assigned the value 18 because `age` is `undefined`.

//  Example 3: Avoiding Falsy Values

let count: number = 0;
let totalCount = count ?? 10;

console.log(totalCount); // Output: 0


// In this case, `totalCount` is 0, not 10, because `count` is a defined, falsy value (0).

