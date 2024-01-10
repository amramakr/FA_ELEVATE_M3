function validateName(){
   let nameError = document.getElementById('usernameError');
   let userName = document.getElementById('name').value;

if(userName.trim() == ''){
    nameError.innerHTML = "Enter a valid username";
    return false;
}
else if(userName.length < 4){
    nameError.innerHTML = "*Length of username is too short";
    return false;
}
else {
    nameError.innerHTML = '';
    return true;
}
}   
function validateEmail(){
   let userEmail = document.getElementById('email').value;
   let emailidError = document.getElementById('emailError');
   let regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

if(userEmail.trim() == ''){
    emailidError.innerHTML = "Enter a valid email";
    return false;
}
else if
    (!userEmail.match(regEx)){
        emailidError.innerHTML = "*Enter email in global format"; 
        return false;
    }
else{
    emailidError.innerHTML = '';
    return true;
}
}
function validateContact(){
    let userContact = document.getElementById('contact').value;
    let phoneError = document.getElementById('contactError');

    if(userContact.trim() == ''){
        phoneError.innerHTML = "Enter a valid number";
        return false;
    }
    else if(userContact.length != 10){
        phoneError.innerHTML = "Enter 10 digit valid number";
        return false;
    }
    else{
        phoneError.innerHTML = '';
        return true;
    }
}
function validatePassword(){
    let userPassword = document.getElementById('pswd').value;
    let passError = document.getElementById('passwordError');
    let isContainsUppercase = /^(?=.*[A-Z]).*$/;
    let isContainsLowercase = /^(?=.*[a-z]).*$/;
    let isContainsNumber = /^(?=.*[0-9]).*$/;
    let isContainsSymbol = /^(?=.*[@#$&*]).*$/;
    let isValidLength = /^.{6,12}$/;

    if(userPassword.trim() == ''){
        passError.innerHTML = "Enter a valid password";
        return false;
    }
    // else if(userPassword.length < 5 || userPassword.length > 15 ){
    //     passError.innerHTML = "*Password should have min 5 characters and max 15 characters"
    //     return false;
    // }
     if
          (!userPassword.match(isContainsUppercase) || !userPassword.match( isContainsLowercase) || !userPassword.match(isContainsNumber)
           || !userPassword.match(isContainsSymbol) || !userPassword.match(isValidLength))
           {
            passError.innerHTML = "*Password must contain [A-Z][a-z][0-9][@#$&*][6-12]"
            return false;    
           }   
    else{
        passError.innerHTML = ''
        return true;
    }
}
function validateConfirm(){
    let userPassword = document.getElementById('pswd').value;
    let confirmPassword = document.getElementById('pswdconfirm').value;
    let confirmError = document.getElementById('confirmPswdError');

    if (userPassword != confirmPassword){
        confirmError.innerHTML = "*Password mismatch";
        return false;
    }
    else {
        confirmError.innerHTML = '';
        return true;
    }
}
function validateForm(){
    let submitError = document.getElementById('subError');
    
    if(!validateName() || !validateEmail() || !validateContact() || !validatePassword() || !validateConfirm()){
        submitError.innerHTML = "*Enter proper value in all fields"
        return false;
    }
    else{
        submitError.innerHTML = '';
        return true;
    }
}