function validateEmail(){
    let userEmail = document.querySelector('#email').value;
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
            passStrength.style.color = "red";
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
    
    function LoginForm(){
        let loginError = document.querySelector('#logError');
        
        
        if(!validateEmail() || !validatePassword()){
            loginError.innerHTML = "*Enter proper value in all fields"
            
            return false;
        }
        else{
            loginError.innerHTML = '';
            
            return true;
        }
    }