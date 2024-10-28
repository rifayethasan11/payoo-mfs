document.getElementById('btn-cashout').addEventListener('click', function(event){
    event.preventDefault();
    console.log('cash out button clicked');

    const cashOut = document.getElementById('input-add-money').value;
    const pinNumber = document.getElementById('input-pin-number').value;

    console.log(cashOut, pinNumber);

    if(pinNumber === '1234'){
        console.log('money is reducing');

        
        const balance = document.getElementById('account-balance').innerText;

        const balanceNumber = parseFloat(balance);
        const cashOutNumber = parseFloat(cashOut);

        // reduce the balance
        const newBalance = balanceNumber - cashOutNumber;

        // update the UI
        document.getElementById('account-balance').innerText = newBalance;
        

    }
    else{
        alert('Failed to cash out! please try again later');
    }


})