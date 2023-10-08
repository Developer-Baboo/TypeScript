let pincode: number = 1234;
let maxAttempts: number = 3;
let balance: number = 20000;
const accountNumbers: number[] = [123456789, 987654321, 234567890, 876543210];

const isValidAccount = (accountNumber: number): boolean => {
    return accountNumbers.includes(accountNumber);
};

const withdraw = (amount: number): void => {
    const minWithdrawalAmount: number = 500;
    const maxWithdrawalAmount: number = 25000;
    if (amount >= minWithdrawalAmount && amount <= maxWithdrawalAmount && amount % 500 === 0) {
        if (balance >= amount) {
            balance -= amount;
            console.log(`Withdrawal successful. Remaining balance: ${balance}`);
        } else {
            console.log("Insufficient funds.");
        }
    } else {
        console.log("Invalid amount for withdrawal. Amount must be in multiples of 500, minimum 500, and maximum 25000.");
    }
};

const checkBalance = (): void => {
    console.log(`Your Available Balance is: ${balance}`);
};

const transfer = (amount: number, recipientAccountNumber: number): void => {
    if (balance >= amount) {
        const recipientIndex: number = accountNumbers.indexOf(recipientAccountNumber);
        if (recipientIndex !== -1) {
            balance -= amount;
            console.log(`Transfer successful. Remaining balance: ${balance}`);
        } else {
            console.log("Recipient account not found. Transfer failed.");
        }
    } else {
        console.log("Insufficient funds for transfer.");
    }
};

const changePin = (oldPin: number, newPin: number): void => {
    if (oldPin === pincode) {
        pincode = newPin;
        console.log("Pin changed successfully.");
    } else {
        console.log("Incorrect old pin. Pin change failed.");
    }
};

let attempts: number = 0;
let continueTransactions: boolean = true;

while (attempts < maxAttempts && continueTransactions) {
    let userPin: number = Number(prompt("Enter your 4-digit pin code:"));
    if (userPin === pincode) {
        while (continueTransactions) {
            console.log("1. Withdraw");
            console.log("2. Balance Check");
            console.log("3. Transfer");
            console.log("4. Change Pin");
            console.log("5. Exit");
            let choice: number = Number(prompt("Enter your choice:"));

            switch (choice) {
                case 1:
                    let withdrawAmount: number = Number(prompt("Enter amount to withdraw (multiples of 500, min 500, max 25000):"));
                    if (withdrawAmount >= 500 && withdrawAmount <= 25000 && withdrawAmount % 500 === 0) {
                        withdraw(withdrawAmount);
                    } else {
                        console.log("Invalid amount for withdrawal.");
                    }
                    break;
                case 2:
                    checkBalance();
                    break;
                case 3:
                    let recipientAccountNumber: number = Number(prompt("Enter recipient's 9-digit account number:"));
                    if (isValidAccount(recipientAccountNumber)) {
                        let transferAmount: number = Number(prompt("Enter amount to transfer:"));
                        transfer(transferAmount, recipientAccountNumber);
                    } else {
                        console.log("Recipient account not found. Transfer failed.");
                    }
                    break;
                case 4:
                    let oldPin: number = Number(prompt("Enter old pin:"));
                    let newPin: number = Number(prompt("Enter new pin:"));
                    changePin(oldPin, newPin);
                    break;
                case 5:
                    console.log("Exiting the application. Thank you!");
                    continueTransactions = false;
                    break;
                default:
                    console.log("Invalid choice. Please try again.");
            }
        }
        break;
    } else {
        attempts++;
        console.log(`Incorrect pin. ${maxAttempts - attempts} attempts left.`);
    }
}

if (attempts === maxAttempts) {
    console.log("Too many incorrect attempts. Exiting the application.");
}
