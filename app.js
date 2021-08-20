const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

var availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            var amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);

        } else {
            showMessage("Cash given should atleast be equal to the bill amount");
        }
    } else {
        showMessage("Invalid bill amount");
    }
});

function calculateChange(amountToBeReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        var numberOfNotes = Math.trunc(
            amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }

}

function hideMessage(){
    console.log("here2");
    message.style.display= "none";
}

function showMessage(msg) {
    console.log("here");
    message.style.display = "block";
    message.innerText = msg ;
}
