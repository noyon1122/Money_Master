function getInputValueById(inputValue)
{
   const inputValueField=document.getElementById(inputValue);
   const inputValueString=inputValueField.value;
   const input=parseFloat(inputValueString);
   return input;
}

function getTextValueById(textValue)
{
  const textValueField=document.getElementById(textValue);
  const textValueString=textValueField.innerText;
  const tValue=parseFloat(textValueString);
  return tValue;
}

document.getElementById('calculate').addEventListener('click',function(){
    //Get Input value
    const foodValue=getInputValueById('food');
    const rentValue=getInputValueById('rent');
    const clothesValue=getInputValueById('clothes');

    //Get Text Value
    const textExpensesField=document.getElementById('expenses');
    textExpensesField.innerText=foodValue+rentValue+clothesValue;
    const textBalanceFiled=document.getElementById('balance');
    textBalanceFiled.innerText=10000-(foodValue+rentValue+clothesValue);   
})

//Savings

document.getElementById('save_btn').addEventListener('click',function(){
    const saveValue=getInputValueById('save');
   
    //Get Saving Amount
    const savingAmount=document.getElementById('saving_amount');
    savingAmount.innerText=10000*(saveValue/100);
    

    //Remaining Balance
    const remainingBalance=document.getElementById('remaining');
    const totalBalance=getTextValueById('balance');
    remainingBalance.innerText=totalBalance-10000*(saveValue/100);
   
    
    
    
})