let pinCode: string = "1234";
let maxAttempts: number = 3;
let balance: number = 20000;
const validAccountNumbers = ["1234567890123", "2345678901234", "3456789012345"];

const authorize = (event: Event) => {
    event.preventDefault();
    const pinInput = (document.getElementById("pinInput") as HTMLInputElement).value;

    if (pinInput === pinCode) {
        document.getElementById("pinForm")!.style.display = "none";
        document.getElementById("options")!.style.display = "block";
        document.getElementById("output")!.innerText = "";
    } else {
        document.getElementById("output")!.innerText = "Incorrect PIN. Please try again.";
        maxAttempts--;

        if (maxAttempts === 0) {
            alert("Too many incorrect attempts. Please try again latter.");
            document.getElementById("options")!.style.display = "none";
            document.getElementById("pinInputForm")!.style.display = "none";
        }
    }
};

const showWithdrawForm = () => {
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

const withdraw = (event: Event) => {
    event.preventDefault();
    const amount = parseInt((document.getElementById("withdrawAmount") as HTMLInputElement).value);

    if (amount >= 500 && amount <= 25000 && amount % 500 === 0 && amount <= balance) {
        balance -= amount;
        document.getElementById("output")!.innerText = `Withdrawal successful. Remaining balance: ${balance}`;
    } else {
        document.getElementById("output")!.innerText = "Invalid amount for withdrawal or insufficient funds.";
    }
    clearForm();
};

const checkBalance = () => {
    document.getElementById("output")!.innerText = `Your Available Balance is: ${balance}`;
    clearForm();
};

const showTransferForm = () => {
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

const transfer = (event: Event) => {
    event.preventDefault();
    const recipientAccountNumber = (document.getElementById("recipientAccountNumber") as HTMLInputElement).value;
    const transferAmount = parseInt((document.getElementById("transferAmount") as HTMLInputElement).value);

    let isValidRecipient = false;

    validAccountNumbers.forEach(accountNumber => {
        if (recipientAccountNumber === accountNumber && recipientAccountNumber.length === 13 && balance >= transferAmount && transferAmount >= 1) {
            isValidRecipient = true;
            balance -= transferAmount;
            document.getElementById("output")!.innerText = `Transfer successful. Remaining balance: ${balance}`;
        }
    });

    if (!isValidRecipient) {
        document.getElementById("output")!.innerText = "Invalid recipient account or transfer amount exceeds balance.";
    }

    clearForm();
};

const showChangePinForm = (): void => {
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

const changePin = (): void => {
    const oldPinInput = document.getElementById("oldPin") as HTMLInputElement;
    const newPinInput = document.getElementById("newPin") as HTMLInputElement;

    const oldPin: string = oldPinInput.value;
    const newPin: string = newPinInput.value;

    const outputElement = document.getElementById("output") as HTMLElement;

    if (oldPin === pinCode && newPin.length === 4 && /^\d+$/.test(newPin)) {
        pinCode = newPin;
        outputElement.innerText = "PIN changed successfully.";
    } else {
        outputElement.innerText = "Invalid old PIN or new PIN. Please enter valid 4-digit numbers.";
    }

    clearForm();
};

const exit = () => {
    document.getElementById("output")!.innerText = "Thank you! for Using our application";
    document.getElementById("options")!.style.display = "none";
    document.getElementById("formContainer")!.innerText = "";
};

const clearForm = () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => form.reset());
};
