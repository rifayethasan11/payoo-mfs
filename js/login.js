// search: form submit reloading the page

// step - 1 set event handler

document.getElementById('button-login').addEventListener('click', function(event){
    // step-2: prevent default behavior (prevent reloading browser)
    event.preventDefault();
    console.log('clicked')

    // step-3: get the phone number and the pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value

    console.log(phoneNumber, pinNumber);
    // step-4: validate phone and Pin
    // this is temporary. You should do like this.
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('you are logged in');
        window.location.href = "./home.html"
    }
    else{
        alert('Somenthing is wrong please check again.')
    }
    
})