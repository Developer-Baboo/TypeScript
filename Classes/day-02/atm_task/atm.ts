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
            alert("Too many incorrect attempts. Exiting the application.");
            document.getElementById("options")!.style.display = "none";
            document.getElementById("pinInputForm")!.style.display = "none";
        }
    }
};

const showWithdrawForm = () => {
    document.getElementById("formContainer")!.innerHTML = `
        <h2>Withdraw</h2>
        <form id="withdrawForm" onsubmit="withdraw(event)">
            <label for="withdrawAmount">Enter amount to withdraw (multiples of 500, min 500, max 25000):</label>
            <input type="number" id="withdrawAmount" required>
            <button type="submit">Withdraw</button>
        </form>
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
    document.getElementById("formContainer")!.innerHTML = `
        <h2>Transfer</h2>
        <form id="transferForm" onsubmit="transfer(event)">
            <label for="recipientAccountNumber">Enter recipient's 13-digit account number:</label>
            <input type="text" id="recipientAccountNumber" required>
            <label for="transferAmount">Enter amount to transfer:</label>
            <input type="number" id="transferAmount" required>
            <button type="submit">Transfer</button>
        </form>
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
        <h2>Change PIN</h2>
        <form id="pinChangeForm">
            <label for="oldPin">Enter old 4-digit PIN:</label>
            <input type="password" id="oldPin" required>
            <label for="newPin">Enter new 4-digit PIN:</label>
            <input type="password" id="newPin" required>
            <button type="button" onclick="changePin()">Change PIN</button>
        </form>
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
    document.getElementById("output")!.innerText = "Exiting the application. Thank you!";
    document.getElementById("options")!.style.display = "none";
    document.getElementById("formContainer")!.innerText = "";
};

const clearForm = () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => form.reset());
};
