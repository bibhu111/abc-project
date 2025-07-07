function getInputFieldValueById(id){
    const value = document.getElementById(id).value;
    const inputV = parseFloat(value)
    return inputV;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showAsectionByID(id){
    document.getElementById('add-money-section').classList.add('hidden');
    document.getElementById('cashout-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}
