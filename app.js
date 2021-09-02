const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const outputDiv = document.querySelector("#output");
const noOfNotes = document.querySelectorAll(".no-of-notes"); 

const availableNotes = [2000,500,100,20,10,5,1];

checkButton.addEventListener("click", validateBillAndCashAmount);

function validateBillAndCashAmount(){
outputDiv.style.display="none";
if(billAmount.value>0){
    if(cashGiven.value >= billAmount.value){
        const amountToBeReturned= cashGiven.value-billAmount.value;
        calculateChange(amountToBeReturned);
    }
    else{
        outputDiv.style.display="block";
        outputDiv.innerText="The cash given must atleast be equal to the bill amount."
    }
}
else{
  outputDiv.style.display="block";
  outputDiv.innerText="Invalid Bill Amount.";
}
}

function calculateChange(amountToBeReturned){
    for(i=0;i<availableNotes.length;i++){
        const numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
            amountToBeReturned = amountToBeReturned % availableNotes[i];
            noOfNotes[i].innerText= numberOfNotes;
    }        
}