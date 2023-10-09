let pinCode: string = "1234";
let maxAttempts: number = 3;
let balance: number = 20000;

function authorize(event: Event) {
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
            document.getElementById("output")!.innerText = "Too many incorrect attempts. Exiting the application.";
            document.getElementById("options")!.style.display = "none";
        }
    }
}

function showWithdrawForm() {
    document.getElementById("formContainer")!.innerHTML = `
        <h2>Withdraw</h2>
        <form id="withdrawForm" onsubmit="withdraw(event)">
            <label for="withdrawAmount">Enter amount to withdraw (multiples of 500, min 500, max 25000):</label>
            <input type="number" id="withdrawAmount" required>
            <button type="submit">Withdraw</button>
        </form>
    `;
}

function withdraw(event: Event) {
    event.preventDefault();
    const amount = parseInt((document.getElementById("withdrawAmount") as HTMLInputElement).value);

    if (amount >= 500 && amount <= 25000 && amount % 500 === 0 && amount <= balance) {
        balance -= amount;
        document.getElementById("output")!.innerText = `Withdrawal successful. Remaining balance: ${balance}`;
    } else {
        document.getElementById("output")!.innerText = "Invalid amount for withdrawal or insufficient funds.";
    }
    clearForm();
}

function checkBalance() {
    document.getElementById("output")!.innerText = `Your Available Balance is: ${balance}`;
    clearForm();
}

function showTransferForm() {
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
}

function transfer(event: Event) {
    event.preventDefault();
    const recipientAccountNumber = (document.getElementById("recipientAccountNumber") as HTMLInputElement).value;
    const transferAmount = parseInt((document.getElementById("transferAmount") as HTMLInputElement).value);

    if (recipientAccountNumber.length === 13 && balance >= transferAmount && transferAmount >= 1) {
        balance -= transferAmount;
        document.getElementById("output")!.innerText = `Transfer successful. Remaining balance: ${balance}`;
    } else {
        document.getElementById("output")!.innerText = "Invalid recipient account or transfer amount exceeds balance.";
    }
    clearForm();
}

function showChangePinForm() {
    document.getElementById("formContainer")!.innerHTML = `
        <h2>Change PIN</h2>
        <form id="pinChangeForm" onsubmit="changePin(event)">
            <label for="newPin">Enter new 4-digit PIN:</label>
            <input type="password" id="newPin" pattern="\d{4}" required>
            <button type="submit">Change PIN</button>
        </form>
    `;
}

function changePin(event: Event) {
    event.preventDefault();
    const newPin = (document.getElementById("newPin") as HTMLInputElement).value;

    if (newPin.length === 4) {
        pinCode = newPin;
        document.getElementById("output")!.innerText = "PIN changed successfully.";
    } else {
        document.getElementById("output")!.innerText = "Invalid PIN. Please enter a 4-digit number.";
    }
    clearForm();
}

function exit() {
    document.getElementById("output")!.innerText = "Exiting the application. Thank you!";
    document.getElementById("options")!.style.display = "none";
    document.getElementById("formContainer")!.innerText = "";
}

function clearForm() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => form.reset());
}