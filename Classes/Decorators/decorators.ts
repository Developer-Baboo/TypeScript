// decorators.ts
export function Authenticated(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        // Check if the user is authenticated (you can implement your authentication logic here)
        const isAuthenticated = true; // Replace with your authentication logic
        if (isAuthenticated) {
            return originalMethod.apply(this, args);
        } else {
            throw new Error("User is not authenticated");
        }
    };
    return descriptor;
}

export function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Executing method ${propertyKey}`);
        return originalMethod.apply(this, args);
    };
    return descriptor;
}