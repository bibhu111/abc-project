document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney = getInputFieldValueById('input-add-money');
    console.log("Add money inside addmoney2: ",addMoney);
    const pinNumber = getInputFieldValueById("input-pin");
    console.log("Pin NUmber inside addmoney2: ",pinNumber);

    if(pinNumber===1234){
        const balance = getTextFieldValueById('account-balance');
        console.log(balance,addMoney);
        const newBalance = balance + addMoney;
        document.getElementById('account-balance').innerText = newBalance;

        //add to transaction history
        const p = document.createElement('p');
        p.innerText = `Added: ${addMoney} TK. Balance: ${newBalance}`;
        console.log(p);

        //should be a common function
        document.getElementById('transaction-container').appendChild(p);
    }
    else{
      alert(`Failed to add the money`);
    }

})