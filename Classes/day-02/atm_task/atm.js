var pinCode = "1234";
var maxAttempts = 3;
var balance = 20000;
function authorize(event) {
    event.preventDefault();
    var pinInput = document.getElementById("pinInput").value;
    if (pinInput === pinCode) {
        document.getElementById("pinForm").style.display = "none";
        document.getElementById("options").style.display = "block";
        document.getElementById("output").innerText = "";
    }
    else {
        document.getElementById("output").innerText = "Incorrect PIN. Please try again.";
        maxAttempts--;
        if (maxAttempts === 0) {
            document.getElementById("output").innerText = "Too many incorrect attempts. Exiting the application.";
            document.getElementById("options").style.display = "none";
        }
    }
}
function showWithdrawForm() {
    document.getElementById("formContainer").innerHTML = "\n        <h2>Withdraw</h2>\n        <form id=\"withdrawForm\" onsubmit=\"withdraw(event)\">\n            <label for=\"withdrawAmount\">Enter amount to withdraw (multiples of 500, min 500, max 25000):</label>\n            <input type=\"number\" id=\"withdrawAmount\" required>\n            <button type=\"submit\">Withdraw</button>\n        </form>\n    ";
}
function withdraw(event) {
    event.preventDefault();
    var amount = parseInt(document.getElementById("withdrawAmount").value);
    if (amount >= 500 && amount <= 25000 && amount % 500 === 0 && amount <= balance) {
        balance -= amount;
        document.getElementById("output").innerText = "Withdrawal successful. Remaining balance: ".concat(balance);
    }
    else {
        document.getElementById("output").innerText = "Invalid amount for withdrawal or insufficient funds.";
    }
    clearForm();
}
function checkBalance() {
    document.getElementById("output").innerText = "Your Available Balance is: ".concat(balance);
    clearForm();
}
function showTransferForm() {
    document.getElementById("formContainer").innerHTML = "\n        <h2>Transfer</h2>\n        <form id=\"transferForm\" onsubmit=\"transfer(event)\">\n            <label for=\"recipientAccountNumber\">Enter recipient's 13-digit account number:</label>\n            <input type=\"text\" id=\"recipientAccountNumber\" required>\n            <label for=\"transferAmount\">Enter amount to transfer:</label>\n            <input type=\"number\" id=\"transferAmount\" required>\n            <button type=\"submit\">Transfer</button>\n        </form>\n    ";
}
function transfer(event) {
    event.preventDefault();
    var recipientAccountNumber = document.getElementById("recipientAccountNumber").value;
    var transferAmount = parseInt(document.getElementById("transferAmount").value);
    if (recipientAccountNumber.length === 13 && balance >= transferAmount && transferAmount >= 1) {
        balance -= transferAmount;
        document.getElementById("output").innerText = "Transfer successful. Remaining balance: ".concat(balance);
    }
    else {
        document.getElementById("output").innerText = "Invalid recipient account or transfer amount exceeds balance.";
    }
    clearForm();
}
function showChangePinForm() {
    document.getElementById("formContainer").innerHTML = "\n        <h2>Change PIN</h2>\n        <form id=\"pinChangeForm\" onsubmit=\"changePin(event)\">\n            <label for=\"newPin\">Enter new 4-digit PIN:</label>\n            <input type=\"password\" id=\"newPin\" pattern=\"d{4}\" required>\n            <button type=\"submit\">Change PIN</button>\n        </form>\n    ";
}
function changePin(event) {
    event.preventDefault();
    var newPin = document.getElementById("newPin").value;
    if (newPin.length === 4) {
        pinCode = newPin;
        document.getElementById("output").innerText = "PIN changed successfully.";
    }
    else {
        document.getElementById("output").innerText = "Invalid PIN. Please enter a 4-digit number.";
    }
    clearForm();
}
function exit() {
    document.getElementById("output").innerText = "Exiting the application. Thank you!";
    document.getElementById("options").style.display = "none";
    document.getElementById("formContainer").innerText = "";
}
function clearForm() {
    var forms = document.querySelectorAll('form');
    forms.forEach(function (form) { return form.reset(); });
}
