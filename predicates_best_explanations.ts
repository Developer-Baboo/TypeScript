Certainly! Type predicates in TypeScript are functions that return a boolean. When TypeScript understands that a certain condition is true within a block of code, it narrows the type inside that block. Here are five examples of type predicates in TypeScript, each explained with comments:

### 1. **Basic Type Predicate:**

```typescript
// Type predicate function for checking if a value is a number
function isNumber(value: any): value is number {
  return typeof value === 'number';
}

if (isNumber(input)) {
  // Inside this block, TypeScript knows 'input' is a number
  console.log(input.toFixed(2)); // Valid: 'input' is treated as a number here
} else {
  console.log('Not a number');
}
```

In this example, `isNumber` is a type predicate that checks if the `value` parameter is a number. Inside the `if` block, TypeScript understands that `input` is a `number`.

### 2. **Type Predicate with Custom Type:**

```typescript
// Custom type
type Car = {
  brand: string;
  year: number;
};

// Type predicate function for checking if an object is a Car
function isCar(object: any): object is Car {
  return 'brand' in object && 'year' in object;
}

if (isCar(vehicle)) {
  // Inside this block, TypeScript knows 'vehicle' is a Car
  console.log(vehicle.brand);
} else {
  console.log('Not a car');
}
```

In this example, `isCar` is a type predicate that checks if an object has the `brand` and `year` properties. Inside the `if` block, TypeScript understands that `vehicle` is a `Car`.

### 3. **Type Predicate with Union Type:**

```typescript
// Type predicate function for checking if a value is a string or number
function isStringOrNumber(value: any): value is string | number {
  return typeof value === 'string' || typeof value === 'number';
}

if (isStringOrNumber(input)) {
  // Inside this block, TypeScript knows 'input' is a string or a number
  console.log(input.length); // Valid: TypeScript understands 'length' property for strings
}
```

In this example, `isStringOrNumber` is a type predicate that checks if a value is a `string` or `number`. Inside the `if` block, TypeScript understands that `input` can be either a `string` or a `number`.

### 4. **Type Predicate with Array:**

```typescript
// Type predicate function for checking if an object is an array
function isArray(value: any): value is any[] {
  return Array.isArray(value);
}

if (isArray(items)) {
  // Inside this block, TypeScript knows 'items' is an array
  console.log(items.length); // Valid: TypeScript understands 'length' property for arrays
}
```

In this example, `isArray` is a type predicate that checks if a value is an array. Inside the `if` block, TypeScript understands that `items` is an array.

### 5. **Type Predicate with Generic Type:**

```typescript
// Generic type
type Box<T> = {
  value: T;
};

// Type predicate function for checking if an object is a Box containing a number
function isNumberBox(box: any): box is Box<number> {
  return typeof box === 'object' && 'value' in box && typeof box.value === 'number';
}

if (isNumberBox(numberBox)) {
  // Inside this block, TypeScript knows 'numberBox' is a Box containing a number
  console.log(numberBox.value); // Valid: TypeScript understands 'value' is a number
}
```

In this example, `isNumberBox` is a type predicate that checks if an object is a `Box` containing a `number`. Inside the `if` block, TypeScript understands that `numberBox` is a `Box` containing a `number`.

These examples demonstrate how type predicates can be used to narrow down the type of a variable based on certain conditions, providing more precise type information within specific code blocks.