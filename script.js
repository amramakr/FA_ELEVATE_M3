
function validateName(){
   let nameError = document.querySelector('#usernameError');
   let userName =  document.querySelector('#name').value;
   let userName_value = userName.trim();
   let isvalidName = /^([a-zA-Z])+(\s)+[a-zA-Z]+$/;

if(userName_value == ''){
    nameError.innerHTML = "Enter a valid username";
    return false;
}
else if(!isvalidName.test(userName_value)){
    nameError.innerHTML = "*Enter your full name using alphabets and space only";
    return false;
}
else if(userName_value.length < 4){
    nameError.innerHTML = "Enter your full Name";
    return false;
}
else {
    nameError.innerHTML = '';
    return true;
}
}   
function validateEmail(){
   let userEmail =    document.querySelector('#email').value;
   let emailidError = document.querySelector('#emailError');
   let regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
   let userEmail_value = userEmail.trim();

if(userEmail_value == ''){
    emailidError.innerHTML = "Enter a valid email";
    return false;
}
else if
    (!userEmail_value.match(regEx)){
        emailidError.innerHTML = "*Email Address must be in valid format with @ symbol"; 
        return false;
    }
else{
    emailidError.innerHTML = '';
    return true;
}
}
function validateContact(){
    let userContact = document.querySelector('#contact').value;
    let phoneError =  document.querySelector('#contactError');

    let userContact_value  = userContact.trim();
    let isValidNumber = /^[0-9]*$/;

    if(userContact_value == ''){
        phoneError.innerHTML = "Enter a valid number";
        return false;
    }
    else if(!isValidNumber.test(userContact_value)){
        phoneError.innerHTML = "Contact number must be numeric";
        return false;
    }
      else if (userContact_value.length != 10){
           phoneError.innerHTML = "Contact number must have 10 digits";
           return false;
      }
    else{
        phoneError.innerHTML = '';
        return true;
    }
}
function validatePassword(){

    let userPassword = document.querySelector('#pswd').value;
    let msg = document.querySelector('#message');
    let passStrength = document.querySelector('#strength');
    let passError = document.querySelector('#passwordError');
    let isContainsUppercase = /^(?=.*[A-Z]).*$/;
    let isContainsLowercase = /^(?=.*[a-z]).*$/;
    let isContainsNumber = /^(?=.*[0-9]).*$/;
    let isContainsSymbol = /^(?=.*[@#$&*]).*$/;
    let isValidLength = /^.{6,12}$/;
     

        if(userPassword.length > 0){
            msg.style.display="block";        
        }
        else{
            msg.style.display="none";
        }
        if(!userPassword.match(isContainsUppercase) || !userPassword.match( isContainsLowercase) || !userPassword.match(isContainsNumber)
        || !userPassword.match(isContainsSymbol)|| !userPassword.match(isValidLength)){
            passStrength.innerHTML = "weak";
            passStrength.style.color ="red";
            msg.style.color = "red";
            passError.innerHTML = "*Password must contain [A-Z][a-z][0-9][@#$&*][6-12]"
           
        
    }
    else if(userPassword.length >= 4 && userPassword.length < 6 ){
            passStrength.innerHTML = "medium";
            msg.style.color = "yellow";
            passStrength.style.color = "yellow";
            passError.innerHTML = "*Password must contain [A-Z][a-z][0-9][@#$&*][6-12]"
          
        }
        else if(userPassword.length >=6){
            passStrength.innerHTML = "strong";
            passStrength.style.color = "lawngreen";         
            msg.style.color = "lawngreen";
            passError.innerHTML = '';
            return false();
        }
        else{
            passError.innerHTML = '';
            return true;
        }
 
    }
function validateConfirm(){
    let userPassword = document.querySelector('#pswd').value;
    let confirmPassword = document.querySelector('#pswdconfirm').value;
    let confirmError = document.querySelector('#confirmPswdError');
    
     if (userPassword != confirmPassword){
        confirmError.innerHTML = "*Confirm Password mismatch";
        return false;
    }
    else {
        confirmError.innerHTML = '';
        return true;
    }
}
function validateForm(){
    let submitError = document.querySelector('#subError');
       
    if(!validateName() || !validateEmail() || !validateContact() || !validatePassword() || !validateConfirm()){
        submitError.innerHTML = "*Enter proper value in all fields"
        
        return false;
    }
    else{
        submitError.innerHTML = '';
        
        return true;
    }
}