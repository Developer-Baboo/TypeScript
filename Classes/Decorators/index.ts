// index.ts
import SecureApp from './SecureApp';

const app = new SecureApp();

try {
    app.sensitiveData(); // This should log method execution if authenticated
} catch (error) {
    console.error(error.message);
}
