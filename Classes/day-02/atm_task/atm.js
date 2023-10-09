var pinCode = "1234";
var maxAttempts = 3;
var balance = 20000;
var validAccountNumbers = ["1234567890123", "2345678901234", "3456789012345"];
var authorize = function (event) {
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
            alert("Too many incorrect attempts. Exiting the application.");
            document.getElementById("options").style.display = "none";
            document.getElementById("pinInputForm").style.display = "none";
        }
    }
};
var showWithdrawForm = function () {
    document.getElementById("formContainer").innerHTML = "\n        <h2>Withdraw</h2>\n        <form id=\"withdrawForm\" onsubmit=\"withdraw(event)\">\n            <label for=\"withdrawAmount\">Enter amount to withdraw (multiples of 500, min 500, max 25000):</label>\n            <input type=\"number\" id=\"withdrawAmount\" required>\n            <button type=\"submit\">Withdraw</button>\n        </form>\n    ";
};
var withdraw = function (event) {
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
};
var checkBalance = function () {
    document.getElementById("output").innerText = "Your Available Balance is: ".concat(balance);
    clearForm();
};
var showTransferForm = function () {
    document.getElementById("formContainer").innerHTML = "\n        <h2>Transfer</h2>\n        <form id=\"transferForm\" onsubmit=\"transfer(event)\">\n            <label for=\"recipientAccountNumber\">Enter recipient's 13-digit account number:</label>\n            <input type=\"text\" id=\"recipientAccountNumber\" required>\n            <label for=\"transferAmount\">Enter amount to transfer:</label>\n            <input type=\"number\" id=\"transferAmount\" required>\n            <button type=\"submit\">Transfer</button>\n        </form>\n    ";
};
var transfer = function (event) {
    event.preventDefault();
    var recipientAccountNumber = document.getElementById("recipientAccountNumber").value;
    var transferAmount = parseInt(document.getElementById("transferAmount").value);
    var isValidRecipient = false;
    validAccountNumbers.forEach(function (accountNumber) {
        if (recipientAccountNumber === accountNumber && recipientAccountNumber.length === 13 && balance >= transferAmount && transferAmount >= 1) {
            isValidRecipient = true;
            balance -= transferAmount;
            document.getElementById("output").innerText = "Transfer successful. Remaining balance: ".concat(balance);
        }
    });
    if (!isValidRecipient) {
        document.getElementById("output").innerText = "Invalid recipient account or transfer amount exceeds balance.";
    }
    clearForm();
};
var showChangePinForm = function () {
    var formContainer = document.getElementById("formContainer");
    formContainer.innerHTML = "\n        <h2>Change PIN</h2>\n        <form id=\"pinChangeForm\">\n            <label for=\"oldPin\">Enter old 4-digit PIN:</label>\n            <input type=\"password\" id=\"oldPin\" required>\n            <label for=\"newPin\">Enter new 4-digit PIN:</label>\n            <input type=\"password\" id=\"newPin\" required>\n            <button type=\"button\" onclick=\"changePin()\">Change PIN</button>\n        </form>\n    ";
};
var changePin = function () {
    var oldPinInput = document.getElementById("oldPin");
    var newPinInput = document.getElementById("newPin");
    var oldPin = oldPinInput.value;
    var newPin = newPinInput.value;
    var outputElement = document.getElementById("output");
    if (oldPin === pinCode && newPin.length === 4 && /^\d+$/.test(newPin)) {
        pinCode = newPin;
        outputElement.innerText = "PIN changed successfully.";
    }
    else {
        outputElement.innerText = "Invalid old PIN or new PIN. Please enter valid 4-digit numbers.";
    }
    clearForm();
};
var exit = function () {
    document.getElementById("output").innerText = "Exiting the application. Thank you!";
    document.getElementById("options").style.display = "none";
    document.getElementById("formContainer").innerText = "";
};
var clearForm = function () {
    var forms = document.querySelectorAll('form');
    forms.forEach(function (form) { return form.reset(); });
};
