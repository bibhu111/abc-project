document.getElementById('btn-cash-out-money').addEventListener('click',function(event){
    event.preventDefault();
    const cashOut = getInputFieldValueById('input-cash-out-money');
    console.log(cashOut);
    const pinNumber = getInputFieldValueById('input-cashout-pin');
    console.log(pinNumber);
    if(pinNumber===1234){
        const balance = getTextFieldValueById('account-balance');
        console.log(balance);
        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
      alert(`Please try again`);
    }
})