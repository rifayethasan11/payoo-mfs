// add money to the account
// S-1: add event handler
// prevent page reload after form submit
// S-2: get money to be added to the account balance

document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevent page reload after form submit
    event.preventDefault();

    // S-2: get money to be added to the account balance
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);


    // S-3: verify the pin Number
    
    if(pinNumberInput === '1234'){
        console.log('added money to your account');

        // s-4: get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        // s-5: add addMoneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);

        // S-6: update the balance in the UI/DOM
        document.getElementById('account-balance').innerText = newBalance;

    }
    else{
        alert('Failed to add money! Please try again');
    }

})