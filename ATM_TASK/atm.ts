let pincode = 1234;
let maxAttempts = 3;
let balance = 20000;
const accountNumbers: number[] = [123456789, 987654321, 234567890, 876543210];

function withdraw(amount: number): void {
    const minWithdrawalAmount = 500;
    const maxWithdrawalAmount = 25000;
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
}


function checkBalance(): void {
    console.log(`Your Available Balance is: ${balance}`);
}

// function transfer(amount: number, recipientAccountNumber: number): void {
//     // Logic for transferring amount
    
// }
function transfer(amount: number, recipientAccountNumber: number): void {
    if (balance >= amount) {
        const recipientIndex = accountNumbers.indexOf(recipientAccountNumber);
        if (recipientIndex !== -1) {
            balance -= amount;
            console.log(`Transfer successful. Remaining balance: ${balance}`);
        } else {
            console.log("Recipient account not found. Transfer failed.");
        }
    } else {
        console.log("Insufficient funds for transfer.");
    }
}

function changePin(oldPin: number, newPin: number): void {
    if (oldPin === pincode) {
        pincode = newPin;
        console.log("Pin changed successfully.");
    } else {
        console.log("Incorrect old pin. Pin change failed.");
    }
}

function askForAnotherTransaction(): boolean {
    let response = Number("Do you want to perform another transaction? (yes/no):");
    return response == 1;
}

let attempts = 0;
let continueTransactions = true;

while (attempts < maxAttempts && continueTransactions) {
    let userPin = Number(prompt("Enter your 4-digit pin code:"));
    if (userPin === pincode) {
        do {
            console.log("1. Withdraw");
            console.log("2. Balance Check");
            console.log("3. Transfer");
            console.log("4. Change Pin");
            console.log("5. Exit");
            let choice = Number(prompt("Enter your choice:"));

            switch (choice) {
                case 1:
                    let withdrawAmount = Number(prompt("Enter amount to withdraw (multiples of 500, min 500, max 25000):"));
                    if (withdrawAmount >= 500 && withdrawAmount <= 25000 && withdrawAmount % 500 === 0) {
                        withdraw(withdrawAmount);
                        continueTransactions = askForAnotherTransaction();
                    } else {
                        console.log("Invalid amount for withdrawal.");
                    }
                    break;
                case 2:
                    checkBalance();
                    continueTransactions = askForAnotherTransaction();
                    break;
                case 3:
                    let recipientAccountNumber = Number(prompt("Enter recipient's 13-digit account number:"));
                    let transferAmount = Number(prompt("Enter amount to transfer:"));
                    transfer(transferAmount, recipientAccountNumber);
                    continueTransactions = askForAnotherTransaction();
                    break;
                case 4:
                    let oldPin = Number(prompt("Enter old pin:"));
                    let newPin = Number(prompt("Enter new pin:"));
                    changePin(oldPin, newPin);
                    continueTransactions = askForAnotherTransaction();
                    break;
                case 5:
                    console.log("Exiting the application. Thank you!");
                    continueTransactions = false;
                    break;
                default:
                    console.log("Invalid choice. Please try again.");
            }
        } while (continueTransactions);
        break;
    } else {
        attempts++;
        console.log(`Incorrect pin. ${maxAttempts - attempts} attempts left.`);
    }
}

if (attempts === maxAttempts) {
    console.log("Too many incorrect attempts. Exiting the application.");
}