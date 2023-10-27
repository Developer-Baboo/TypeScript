Certainly, I understand that the use of decorators might seem a bit confusing at first. Let's break down the example with comments to make it clearer:

```typescript
// Define a method decorator
function methodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("Method decorator called."); // Log a message when the decorator is applied
    console.log("Target:", target); // Log the target object (the class prototype in this case)
    console.log("Property Key:", propertyKey); // Log the name of the decorated property or method ("exampleMethod" in this case)
    console.log("Descriptor:", descriptor); // Log the property descriptor object (contains the method's details)
}

class ExampleClass {
    // Apply the method decorator to the exampleMethod
    @methodDecorator
    exampleMethod() {
        console.log("Example method called."); // The implementation of the method
    }
}

// Create an instance of the ExampleClass
const exampleInstance = new ExampleClass();

// Call the decorated method
exampleInstance.exampleMethod();
```

Explanation:

1. **Decorator Definition**: `methodDecorator` is a function that acts as a decorator. It takes three parameters: `target` (the class prototype), `propertyKey` (the name of the decorated method), and `descriptor` (an object that contains the method's details).

2. **Decorating `exampleMethod`**: `@methodDecorator` is placed before the `exampleMethod` inside the `ExampleClass`. This line applies the `methodDecorator` to the `exampleMethod`. When the class is defined, the decorator function (`methodDecorator`) is automatically called with information about the method and its class.

3. **Method Invocation**: `exampleInstance.exampleMethod();` invokes the decorated `exampleMethod`. When this line is executed, it triggers the decorator, which logs messages to the console based on the information it receives.

When you run this code, you will see the following output:

```
Method decorator called.
Target: [object Object] // The class prototype (instance of ExampleClass)
Property Key: exampleMethod // The name of the decorated method
Descriptor: { value: [Function], writable: true, enumerable: false, configurable: true } // Method details
Example method called. // Output of the decorated method
```

The decorator is called when the class is defined, not when you create an instance of the class or call the method. It allows you to modify or log information about the methods or properties of a class at design time.