// secureApp.ts
import { Authenticated, Log } from "./decorators";

class SecureApp {
    @Authenticated
    @Log
    sensitiveData(): string {
        return "Sensitive data accessed successfully.";
    }
}

export default SecureApp;
