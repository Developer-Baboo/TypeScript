var pincode = 1234;
var maxAttempts = 3;
var balance = 20000;
var accountNumbers = [123456789, 987654321, 234567890, 876543210];
var isValidAccount = function (accountNumber) {
    return accountNumbers.includes(accountNumber);
};
var withdraw = function (amount) {
    var minWithdrawalAmount = 500;
    var maxWithdrawalAmount = 25000;
    if (amount >= minWithdrawalAmount && amount <= maxWithdrawalAmount && amount % 500 === 0) {
        if (balance >= amount) {
            balance -= amount;
            console.log("Withdrawal successful. Remaining balance: ".concat(balance));
        }
        
        else {
            console.log("Insufficient funds.");
        }
    }
    else {
        console.log("Invalid amount for withdrawal. Amount must be in multiples of 500, minimum 500, and maximum 25000.");
    }
};
var checkBalance = function () {
    console.log("Your Available Balance is: ".concat(balance));
};
var transfer = function (amount, recipientAccountNumber) {
    if (balance >= amount) {
        var recipientIndex = accountNumbers.indexOf(recipientAccountNumber);
        if (recipientIndex !== -1) {
            balance -= amount;
            console.log("Transfer successful. Remaining balance: ".concat(balance));
        }
        else {
            console.log("Recipient account not found. Transfer failed.");
        }
    }
    else {
        console.log("Insufficient funds for transfer.");
    }
};
var changePin = function (oldPin, newPin) {
    if (oldPin === pincode) {
        pincode = newPin;
        console.log("Pin changed successfully.");
    }
    else {
        console.log("Incorrect old pin. Pin change failed.");
    }


    // *! Hello Developer
    // * Hello
    // ? Hello
    // TODO:Hello
    
};
var attempts = 0;
var continueTransactions = true;
while (attempts < maxAttempts && continueTransactions) {
    var userPin = Number(prompt("Enter your 4-digit pin code:"));
    if (userPin === pincode) {
        while (continueTransactions) {
            console.log("1. Withdraw");
            console.log("2. Balance Check");
            console.log("3. Transfer");
            console.log("4. Change Pin");
            console.log("5. Exit");
            var choice = Number(prompt("Enter your choice:"));
            switch (choice) {
                case 1:
                    var withdrawAmount = Number(prompt("Enter amount to withdraw (multiples of 500, min 500, max 25000):"));
                    if (withdrawAmount >= 500 && withdrawAmount <= 25000 && withdrawAmount % 500 === 0) {
                        withdraw(withdrawAmount);
                    }
                    else {
                        console.log("Invalid amount for withdrawal.");
                    }
                    break;
                case 2:
                    checkBalance();
                    break;
                case 3:
                    var recipientAccountNumber = Number(prompt("Enter recipient's 9-digit account number:"));
                    if (isValidAccount(recipientAccountNumber)) {
                        var transferAmount = Number(prompt("Enter amount to transfer:"));
                        transfer(transferAmount, recipientAccountNumber);
                    }
                    else {
                        console.log("Recipient account not found. Transfer failed.");
                    }
                    break;
                case 4:
                    var oldPin = Number(prompt("Enter old pin:"));
                    var newPin = Number(prompt("Enter new pin:"));
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
    }
    else {
        attempts++;
        console.log("Incorrect pin. ".concat(maxAttempts - attempts, " attempts left."));
    }
}
if (attempts === maxAttempts) {
    console.log("Too many incorrect attempts. Exiting the application.");
}
