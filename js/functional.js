function getInputValue(id) {
    const inputField = document.getElementById(id);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}
function getInnerTextValue(id) {
    const tag = document.getElementById(id);
    const tagInText = tag.innerText;
    const tagTotal = parseFloat(tagInText);
    return tagTotal;
}
function updateTotal(id, amount) {
    const totalTag = document.getElementById(id);
    const previousTotalInText = totalTag.innerText;
    const previousTotal = parseFloat(previousTotalInText);

    const newTotal = previousTotal + amount;
    totalTag.innerText = newTotal;

}



function updateBalance(amount, isAdd) {
    const balanceTag = document.getElementById('total-balance');
    const balanceInText = balanceTag.innerText;
    const previousBalance = parseFloat(balanceInText);
    let newBalance;
    if (isAdd == true) {
        newBalance = previousBalance + amount;
    }
    else {
        newBalance = previousBalance - amount;
    }

    balanceTag.innerText = newBalance;
}

//Deposit
document.getElementById('deposit-btn').addEventListener('click', function () {
    const deposit = getInputValue('deposit-input');
    if (deposit > 0) {
        updateTotal('total-deposit', deposit);
        updateBalance(deposit, true);
    }

})
//Withdraw
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdraw = getInputValue('withdraw-input');
    const balance = getInnerTextValue('total-balance')
    if (withdraw > 0 && withdraw, balance) {
        updateTotal('total-withdraw', withdraw);
        updateBalance(withdraw, false);
    }
})