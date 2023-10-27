// Original type with required properties
type Car = {
  brand: string;
  model: string;
  year: number;
};

// Using Partial utility to make all properties optional
type PartialCar = Partial<Car>;

const partialCar: PartialCar = {};
// partialCar can have properties brand?: string, model?: string, and year?: number












In TypeScript, `Exclude`, `Record`, `Readonly`, `Required`, and `Partial` are not keywords but utility types provided by TypeScript. They are built-in utility types used to perform common transformations on types. Here's what each of them does:

1. **`Exclude<T, U>`:**
   - `Exclude<T, U>` constructs a type by excluding from `T` all properties that are assignable to `U`.
   - Example: `Exclude<NumberOrString, string>` creates a type that includes only numbers (excluding strings).

2. **`Record<K, T>`:**
   - `Record<K, T>` creates an object type with keys of type `K` and values of type `T`.
   - Example: `Record<Fruit, number>` creates an object where keys are fruit names and values are numbers representing prices.

3. **`Readonly<T>`:**
   - `Readonly<T>` constructs a type with all properties of `T` set to `readonly`.
   - Example: `Readonly<Person>` creates a type where all properties of `Person` are read-only.

4. **`Required<T>`:**
   - `Required<T>` constructs a type with all properties of `T` set to required.
   - Example: `Required<PartialPerson>` creates a type where all properties of `PartialPerson` are required.

5. **`Partial<T>`:**
   - `Partial<T>` constructs a type with all properties of `T` set to optional.
   - Example: `Partial<Person>` creates a type where all properties of `Person` are optional.

These utility types are part of TypeScript's standard library and are not specific to any particular project or package. They allow developers to compose new types based on existing ones, making it easier to work with complex type structures and transformations.