var pincode = 1234;
var balance = 20000; // Initial balance set to 20,000
var card_number = 123456789;
function withdraw(amount) {
    if (balance >= amount) {
        balance -= amount;
        console.log("Withdrawal successful. Remaining balance: ".concat(balance));
    }
    else {
        console.log("Insufficient funds.");
    }
}
var user_code = prompt("Enter your pincode");
var pin_code = Number(user_code);
if (pin_code === pincode) {
    var input1 = prompt("Enter 1 for deposit, 2 for withdraw");
    var choice = Number(input1);
    if (choice === 2) {
        var inputAmount = prompt("Enter the amount to withdraw");
        var amountToWithdraw = Number(inputAmount);
        withdraw(amountToWithdraw);
    }
    else {
        console.log("Invalid choice or action.");
    }
}
else {
    console.log("Invalid pincode.");
}
//////////////////////
var pincode = 1234;
var balance = 20000; // Initial balance set to 20,000
var card_number = 123456789;
function withdraw(amount) {
    if (balance >= amount) {
        balance -= amount;
        console.log("Withdrawal successful. Remaining balance: ".concat(balance));
    }
    else {
        console.log("Insufficient funds.");
    }
}
function deposit(amount) {
    balance += amount;
    console.log("Deposit successful. Current balance: ".concat(balance));
}
var user_code = prompt("Enter your pincode");
var pin_code = Number(user_code);
if (pin_code === pincode) {
    var choice = void 0;
    do {
        var input1 = prompt("Enter 1 for deposit, 2 for withdraw, 6 for exit");
        choice = Number(input1);
        switch (choice) {
            case 1:
                var depositAmount = prompt("Enter the amount to deposit");
                var amountToDeposit = Number(depositAmount);
                deposit(amountToDeposit);
                break;
            case 2:
                var inputAmount = prompt("Enter the amount to withdraw");
                var amountToWithdraw = Number(inputAmount);
                withdraw(amountToWithdraw);
                break;
            case 6:
                console.log("Thanks for choosing our service. Goodbye!");
                break;
            default:
                console.log("Invalid choice. Please try again.");
        }
    } while (choice !== 6);
}
else {
    console.log("Invalid pincode.");
}
