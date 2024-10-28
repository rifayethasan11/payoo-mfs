// add money to the account
// S-1: add event handler
// prevent page reload after form submit
// S-2: get money to be added to the account balance

document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevent page reload after form submit
    event.preventDefault();

    // S-2: get money to be added to the account balance
    const addMonetInput = document.getElementById('input-add-money').value;
    console.log(addMonetInput);

    // get the pin number provided
    const pinNumber = document.getElementById('input-pin-number').value;
    console.log(pinNumber);

})