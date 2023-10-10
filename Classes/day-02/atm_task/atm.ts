// Initial account details
let pinCode: string = "1234";
let maxAttempts: number = 3;
let balance: number = 20000;
const validAccountNumbers = ["1234567890123", "2345678901234", "3456789012345"];

// Function to authorize user based on PIN input
const authorize = (event: Event) => {
    event.preventDefault();
    const pinInput = (document.getElementById("pinInput") as HTMLInputElement).value;

    // Check if user has entered PIN is correct
    if (pinInput === pinCode) {
         // Hide PIN input form and display transaction options
        document.getElementById("pinForm")!.style.display = "none"; // hide form page
        document.getElementById("options")!.style.display = "block"; //SHOW OPTION WITHDRAW, TRANSFER ETC
        document.getElementById("output")!.innerText = ""; //SHOW OUTPUT EMPTY
    } else {
        // Display error message for incorrect PIN
        document.getElementById("output")!.innerText = "Incorrect PIN. Please try again.";
        maxAttempts--;

        // Lock the account after 3 incorrect attempts
        if (maxAttempts === 0) {
            alert("Too many incorrect attempts. Please try again latter.");
            document.getElementById("options")!.style.display = "none";
            document.getElementById("pinInputForm")!.style.display = "none";
        }
    }
};

// Function to display withdrawal form
const showWithdrawForm = () => {
    // Dynamically create and display the withdrawal form
    const formContainer = document.getElementById("formContainer");
    formContainer.innerHTML = `
        <div class="container mt-4">
            <h2 class="mb-3">Withdraw</h2>
            <form id="withdrawForm" onsubmit="withdraw(event)">
                <div class="form-group">
                    <label for="withdrawAmount">Enter amount to withdraw (multiples of 500, min 500, max 25000):</label>
                    <input type="number" class="form-control" id="withdrawAmount" required>
                </div>
                <button type="submit" class="btn btn-dark">Withdraw</button>
            </form>
        </div>
    `;
};

// Function to handle withdrawal logic
const withdraw = (event: Event) => {
    event.preventDefault();
    const amount = parseInt((document.getElementById("withdrawAmount") as HTMLInputElement).value);

    // Validate withdrawal amount and update balance if valid
    if (amount >= 500 && amount <= 25000 && amount % 500 === 0 && amount <= balance) {
        balance -= amount;
        document.getElementById("output")!.innerText = `Withdrawal successful. Remaining balance: ${balance}`;
    } else {
        // Display error message for invalid withdrawal
        document.getElementById("output")!.innerText = "Invalid amount for withdrawal or insufficient funds.";
    }
    clearForm();
};


// Function to check and display account balance
const checkBalance = () => {
    document.getElementById("output")!.innerText = `Your Available Balance is: ${balance}`;
    clearForm();
};

// Function to display transfer form
const showTransferForm = () => {
    // Dynamically create and display the transfer form
    const formContainer = document.getElementById("formContainer");
    formContainer.innerHTML = `
        <div class="container mt-4">
            <h2 class="mb-3">Transfer</h2>
            <form id="transferForm" onsubmit="transfer(event)">
                <div class="form-group">
                    <label for="recipientAccountNumber">Enter recipient's 13-digit account number:</label>
                    <input type="text" class="form-control" id="recipientAccountNumber" required>
                </div>
                <div class="form-group">
                    <label for="transferAmount">Enter amount to transfer:</label>
                    <input type="number" class="form-control" id="transferAmount" required>
                </div>
                <button type="submit" class="btn btn-dark">Transfer</button>
            </form>
        </div>
    `;
};

// Function to handle transfer logic
const transfer = (event: Event) => {
    event.preventDefault();
    // validAccountNumbers
    const recipientAccountNumber = (document.getElementById("recipientAccountNumber") as HTMLInputElement).value;
    const transferAmount = parseInt((document.getElementById("transferAmount") as HTMLInputElement).value);

    // Validate recipient account number and transfer amount, update balance if valid
    let isValidRecipient = false;

    //validAccountNumbers is the name of above array
    validAccountNumbers.forEach(accountNumber => {
        if (recipientAccountNumber === accountNumber && recipientAccountNumber.length === 13 && balance >= transferAmount && transferAmount >= 1) {
            isValidRecipient = true;
            balance -= transferAmount;
            document.getElementById("output")!.innerText = `Transfer successful. Remaining balance: ${balance}`;
        }
    });

// Display error message for invalid recipient or transfer amount
    if (!isValidRecipient) {
        document.getElementById("output")!.innerText = "Invalid recipient account or transfer amount exceeds balance.";
    }

    clearForm();
};


// Function to display PIN change form
const showChangePinForm = (): void => {
    // Dynamically create and display the PIN change form
    const formContainer = document.getElementById("formContainer") as HTMLElement;
    formContainer.innerHTML = `
        <div class="container mt-4">
            <h2 class="mb-3">Change PIN</h2>
            <form id="pinChangeForm">
                <div class="form-group">
                    <label for="oldPin">Enter old 4-digit PIN:</label>
                    <input type="password" class="form-control" id="oldPin" required>
                </div>
                <div class="form-group">
                    <label for="newPin">Enter new 4-digit PIN:</label>
                    <input type="password" class="form-control" id="newPin" required>
                </div>
                <button type="button" class="btn btn-info" onclick="changePin()">Change PIN</button>
            </form>
        </div>
    `;
};

// Function to handle PIN change logic
const changePin = (): void => {
    const oldPinInput = document.getElementById("oldPin") as HTMLInputElement;
    const newPinInput = document.getElementById("newPin") as HTMLInputElement;

    // Get old and new PIN values from input fields
    const oldPin: string = oldPinInput.value;
    const newPin: string = newPinInput.value;

    const outputElement = document.getElementById("output") as HTMLElement;

    // Validate old and new PIN, update PIN if valid
    if (oldPin === pinCode && newPin.length === 4 && /^\d+$/.test(newPin)) {
        pinCode = newPin;
        outputElement.innerText = "PIN changed successfully.";
    } else {
        outputElement.innerText = "Invalid old PIN or new PIN. Please enter valid 4-digit numbers.";
    }

    clearForm();
};

// Function to exit the application
const exit = () => {
    document.getElementById("output")!.innerText = "Thank you! for Using our application";
    document.getElementById("options")!.style.display = "none";
    document.getElementById("formContainer")!.innerText = "";
};

// Function to clear input forms
const clearForm = () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => form.reset());
};
