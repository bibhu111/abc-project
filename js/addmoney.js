// console.log("add money loaded");
document.getElementById('btn-add-money').addEventListener('click',function(event){
   event.preventDefault();
   const addMoney = document.getElementById('')
   console.log("Add money button clicked");
   const addedMoney = getInputFieldValueById('input-add-money');
   const pinNumber = getInputFieldValueById('input-pin');
   console.log(addedMoney,pinNumber);
})