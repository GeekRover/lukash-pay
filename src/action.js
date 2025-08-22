document.getElementById('btn').addEventListener('click', () =>{
    console.log('button clicked');
    const phn = document.getElementById('phone');
    const pin = document.getElementById('pin')
    const phnNumber = 1794074014;
    const pinNumber = 1234;
    if(parseInt(phn.value)  === phnNumber && parseInt(pin.value)  === pinNumber ){
        console.log('Logged in');
        window.location.replace('../src/pages.html')

    } else{
        alert("wrong credentials");
    }
})



