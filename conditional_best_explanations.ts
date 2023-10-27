Certainly! Conditional types in TypeScript allow you to create types that depend on other types. They use conditional expressions to determine the resulting type. Here are five examples with comments explaining each one:

### 1. **Basic Conditional Type:**

```typescript
// Conditional type: If T is a string, the result is 'Text', otherwise 'Number'
type TextOrNumber<T> = T extends string ? 'Text' : 'Number';

const text: TextOrNumber<string> = 'Text'; // Valid
const number: TextOrNumber<number> = 'Number'; // Valid
```

### 2. **Filtering Types:**

```typescript
type FilterNumbers<T> = T extends number ? T : never;

const numberArray: FilterNumbers<number | string | boolean>[] = [1, 2, 3];
// numberArray can only contain numbers
```

### 3. **Mapped Types with Condition:**

```typescript
type OptionalProps<T> = {
  [K in keyof T]?: T[K];
};

const optionalPerson: OptionalProps<Person> = {
  name: 'Alice',
  age: 30,
  // hobbies: 'Reading' // Error: 'hobbies' is optional due to the conditional type
};
```

### 4. **Extracting Specific Type Properties:**

```typescript
type ExtractProps<T> = {
  [K in keyof T]: T[K] extends Function ? never : T[K];
};

type CleanedPerson = ExtractProps<Person>;
// CleanedPerson type will not have functions in its properties
```

### 5. **Mapping Over Union Types:**

```typescript
type Flatten<T> = T extends Array<infer U> ? U : T;

const flattened: Flatten<number[]> = 42; // Valid
const notFlattened: Flatten<number> = 42; // Valid
// flattened can be a number because it was inferred from the number[]
// notFlattened remains a number because it's not an array
```

In these examples:

- Example 1 demonstrates a basic conditional type that differentiates between strings and numbers.
- Example 2 filters out non-number types from a union type.
- Example 3 maps over properties of a type, making them optional.
- Example 4 extracts non-function properties from a type.
- Example 5 shows mapping over union types and extracting the element type if it's an array.


I have understood above example below lines of code confuse me explain in depth with comments
type Flatten<T> = T extends Array<infer U> ? U : T;
[K in keyof T]?: T[K];
type FilterNumbers<T> = T extends number ? T : never;




Certainly! Let me explain those lines of code in-depth with comments:

### 1. **`type Flatten<T> = T extends Array<infer U> ? U : T;`**

This line defines a **conditional type** called `Flatten`. It checks whether the given type `T` is an array. If `T` is an array, it extracts the type of its elements (denoted by `infer U`) and assigns it to `U`. If `T` is not an array, it simply assigns `T` to the resulting type.

```typescript
type Flatten<T> = T extends Array<infer U> ? U : T;

const num: Flatten<number[]> = 42; 
// `Flatten<number[]>` extracts the element type of the array, which is `number`, so `num` is `number`.
const str: Flatten<string> = 'hello'; 
// `Flatten<string>` is not an array, so the type remains `string`, so `str` is `string`.
```

In this example, `Flatten<number[]>` results in `number` because it flattens the array type.

### 2. **`[K in keyof T]?: T[K];`**

This line creates an **optional mapped type**. It takes a type `T` and creates a new type where all properties of `T` become optional. The `?` after the property key makes them optional.

```typescript
type OptionalProps<T> = {
  [K in keyof T]?: T[K];
};

const optionalPerson: OptionalProps<Person> = {
  name: 'Alice',
  age: 30,
  // hobbies: 'Reading' // Error: 'hobbies' is optional due to the conditional type
};
```

In this example, `OptionalProps<Person>` creates a type where all properties of `Person` become optional. This means you can create an object without specifying all properties, and the properties are allowed to be absent.

### 3. **`type FilterNumbers<T> = T extends number ? T : never;`**

This line defines a **conditional type** called `FilterNumbers`. It checks whether the given type `T` is a `number`. If `T` is a `number`, it retains `T`. If `T` is not a `number`, it becomes `never`, indicating an impossible type.

```typescript
type FilterNumbers<T> = T extends number ? T : never;

const num: FilterNumbers<number> = 42;
// `FilterNumbers<number>` results in `number`, so `num` can be assigned a number.
const invalid: FilterNumbers<string> = 42;
// `FilterNumbers<string>` results in `never` because `string` is not `number`, so this assignment will cause an error.
```

In this example, `FilterNumbers<number>` results in `number`, and `FilterNumbers<string>` results in `never`. Conditional types like this can be used to filter out specific types from a union.