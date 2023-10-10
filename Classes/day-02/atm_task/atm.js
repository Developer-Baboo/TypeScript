// Initial account details
var pinCode = "1234";
var maxAttempts = 3;
var balance = 20000;
var validAccountNumbers = ["1234567890123", "2345678901234", "3456789012345"];
// Function to authorize user based on PIN input
var authorize = function (event) {
    event.preventDefault();
    var pinInput = document.getElementById("pinInput").value;
    // Check if user has entered PIN is correct
    if (pinInput === pinCode) {
        // Hide PIN input form and display transaction options
        document.getElementById("pinForm").style.display = "none";
        document.getElementById("options").style.display = "block";
        document.getElementById("output").innerText = "";
    }
    else {
        // Display error message for incorrect PIN
        document.getElementById("output").innerText = "Incorrect PIN. Please try again.";
        maxAttempts--;
        // Lock the account after 3 incorrect attempts
        if (maxAttempts === 0) {
            alert("Too many incorrect attempts. Please try again latter.");
            document.getElementById("options").style.display = "none";
            document.getElementById("pinInputForm").style.display = "none";
        }
    }
};
// Function to display withdrawal form
var showWithdrawForm = function () {
    // Dynamically create and display the withdrawal form
    var formContainer = document.getElementById("formContainer");
    formContainer.innerHTML = "\n        <div class=\"container mt-4\">\n            <h2 class=\"mb-3\">Withdraw</h2>\n            <form id=\"withdrawForm\" onsubmit=\"withdraw(event)\">\n                <div class=\"form-group\">\n                    <label for=\"withdrawAmount\">Enter amount to withdraw (multiples of 500, min 500, max 25000):</label>\n                    <input type=\"number\" class=\"form-control\" id=\"withdrawAmount\" required>\n                </div>\n                <button type=\"submit\" class=\"btn btn-dark\">Withdraw</button>\n            </form>\n        </div>\n    ";
};
// Function to handle withdrawal logic
var withdraw = function (event) {
    event.preventDefault();
    var amount = parseInt(document.getElementById("withdrawAmount").value);
    // Validate withdrawal amount and update balance if valid
    if (amount >= 500 && amount <= 25000 && amount % 500 === 0 && amount <= balance) {
        balance -= amount;
        document.getElementById("output").innerText = "Withdrawal successful. Remaining balance: ".concat(balance);
    }
    else {
        // Display error message for invalid withdrawal
        document.getElementById("output").innerText = "Invalid amount for withdrawal or insufficient funds.";
    }
    clearForm();
};
// Function to check and display account balance
var checkBalance = function () {
    document.getElementById("output").innerText = "Your Available Balance is: ".concat(balance);
    clearForm();
};
// Function to display transfer form
var showTransferForm = function () {
    // Dynamically create and display the transfer form
    var formContainer = document.getElementById("formContainer");
    formContainer.innerHTML = "\n        <div class=\"container mt-4\">\n            <h2 class=\"mb-3\">Transfer</h2>\n            <form id=\"transferForm\" onsubmit=\"transfer(event)\">\n                <div class=\"form-group\">\n                    <label for=\"recipientAccountNumber\">Enter recipient's 13-digit account number:</label>\n                    <input type=\"text\" class=\"form-control\" id=\"recipientAccountNumber\" required>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"transferAmount\">Enter amount to transfer:</label>\n                    <input type=\"number\" class=\"form-control\" id=\"transferAmount\" required>\n                </div>\n                <button type=\"submit\" class=\"btn btn-dark\">Transfer</button>\n            </form>\n        </div>\n    ";
};
// Function to handle transfer logic
var transfer = function (event) {
    event.preventDefault();
    var recipientAccountNumber = document.getElementById("recipientAccountNumber").value;
    var transferAmount = parseInt(document.getElementById("transferAmount").value);
    // Validate recipient account number and transfer amount, update balance if valid
    var isValidRecipient = false;
    validAccountNumbers.forEach(function (accountNumber) {
        if (recipientAccountNumber === accountNumber && recipientAccountNumber.length === 13 && balance >= transferAmount && transferAmount >= 1) {
            isValidRecipient = true;
            balance -= transferAmount;
            document.getElementById("output").innerText = "Transfer successful. Remaining balance: ".concat(balance);
        }
    });
    // Display error message for invalid recipient or transfer amount
    if (!isValidRecipient) {
        document.getElementById("output").innerText = "Invalid recipient account or transfer amount exceeds balance.";
    }
    clearForm();
};
// Function to display PIN change form
var showChangePinForm = function () {
    // Dynamically create and display the PIN change form
    var formContainer = document.getElementById("formContainer");
    formContainer.innerHTML = "\n        <div class=\"container mt-4\">\n            <h2 class=\"mb-3\">Change PIN</h2>\n            <form id=\"pinChangeForm\">\n                <div class=\"form-group\">\n                    <label for=\"oldPin\">Enter old 4-digit PIN:</label>\n                    <input type=\"password\" class=\"form-control\" id=\"oldPin\" required>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"newPin\">Enter new 4-digit PIN:</label>\n                    <input type=\"password\" class=\"form-control\" id=\"newPin\" required>\n                </div>\n                <button type=\"button\" class=\"btn btn-info\" onclick=\"changePin()\">Change PIN</button>\n            </form>\n        </div>\n    ";
};
// Function to handle PIN change logic
var changePin = function () {
    var oldPinInput = document.getElementById("oldPin");
    var newPinInput = document.getElementById("newPin");
    // Get old and new PIN values from input fields
    var oldPin = oldPinInput.value;
    var newPin = newPinInput.value;
    var outputElement = document.getElementById("output");
    // Validate old and new PIN, update PIN if valid
    if (oldPin === pinCode && newPin.length === 4 && /^\d+$/.test(newPin)) {
        pinCode = newPin;
        outputElement.innerText = "PIN changed successfully.";
    }
    else {
        outputElement.innerText = "Invalid old PIN or new PIN. Please enter valid 4-digit numbers.";
    }
    clearForm();
};
// Function to exit the application
var exit = function () {
    document.getElementById("output").innerText = "Thank you! for Using our application";
    document.getElementById("options").style.display = "none";
    document.getElementById("formContainer").innerText = "";
};
// Function to clear input forms
var clearForm = function () {
    var forms = document.querySelectorAll('form');
    forms.forEach(function (form) { return form.reset(); });
};
