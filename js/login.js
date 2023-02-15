document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    if(email=== 'monju@fatu.com' && password === 'fatamonju'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid');
    }
})