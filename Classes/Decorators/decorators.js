"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = exports.Authenticated = void 0;
// decorators.ts
function Authenticated(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // Check if the user is authenticated (you can implement your authentication logic here)
        var isAuthenticated = true; // Replace with your authentication logic
        if (isAuthenticated) {
            return originalMethod.apply(this, args);
        }
        else {
            throw new Error("User is not authenticated");
        }
    };
    return descriptor;
}
exports.Authenticated = Authenticated;
function Log(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Executing method ".concat(propertyKey));
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
exports.Log = Log;
