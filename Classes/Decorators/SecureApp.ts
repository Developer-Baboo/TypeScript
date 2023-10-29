// SecureApp.ts
import { Authenticated, Log } from './decorators';

export default class SecureApp {
    @Authenticated
    @Log
    sensitiveData() {
        console.log("Accessing sensitive data...");
    }
}
