/////////////////////
let pincode = 1234;
let balance = 20000; // Initial balance set to 20,000
let card_number = 123456789;

function withdraw(amount: number): void {
    if (balance >= amount) {
        balance -= amount;
        console.log(`Withdrawal successful. Remaining balance: ${balance}`);
    } else {
        console.log("Insufficient funds.");
    }
}

function deposit(amount: number): void {
    balance += amount;
    console.log(`Deposit successful. Current balance: ${balance}`);
}
let user_code = prompt("Enter your pincode");
let pin_code = Number(user_code);
if (pin_code === pincode) {
    let choice: number;
    do {
        let input1 = prompt("Enter 1 for deposit, 2 for withdraw, 6 for exit");
        choice = Number(input1);
        switch (choice) {
            case 1:
                let depositAmount = prompt("Enter the amount to deposit");
                let amountToDeposit = Number(depositAmount);
                deposit(amountToDeposit);
                break;
            case 2:
                let inputAmount = prompt("Enter the amount to withdraw");
                let amountToWithdraw = Number(inputAmount);
                withdraw(amountToWithdraw);
                break;
            case 6:
                console.log("Thanks for choosing our service. Goodbye!");
                break;
            default:
                console.log("Invalid choice. Please try again.");
        }
    } while (choice !== 6);
} else {
    console.log("Invalid pincode.");
}

