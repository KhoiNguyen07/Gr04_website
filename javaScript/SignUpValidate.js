// Validate du lieu
var username = document.querySelector("#username")
var tname = document.querySelector("#name")
var phoneNo = document.querySelector("#phoneNo")
var email = document.querySelector("#email")
var password = document.querySelector("#password")
var cf_password = document.querySelector("#cf_password")
 
var form = document.querySelector("#form")

function showError(input, message){
    let parent = input.parentElement;
    let small = parent.querySelector("small");    
    parent.classList.add("error");            
    small.innerText = message;
}

function showSuccess(input){
    let parent = input.parentElement;
    let small = parent.querySelector("small");    
    parent.classList.remove("error");
    small.innerText=''
  
}

function checkMatchPasswordError(pwInput, cf_pwInput)
{

    if(pwInput.value !== cf_password.value){
        showError(cf_password,"Mật Khẩu Không Trùng Khớp")
        return true;
    }
    return false;
}

function checkEmpty(listInput){
    let isEmpty = false;
    listInput.forEach(input => {
        input.value= input.value.trim()

        if(!input.value){   
            isEmpty = true;           
            showError(input, "Thông Tin Rỗng!")
        }
        else{
            showSuccess(input)
        }
    });
    return isEmpty;
}

function checkEmailError(input){          
    const regexEmail = 
    /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i

    input.value = input.value.trim()
    
    let isEmailError = !regexEmail.test(input.value)
    if(regexEmail.test(input.value))
    {
        showSuccess(input)
    }
    else{
        showError (input,"Email Không Hợp Lệ!" )
    }
    return isEmailError
}

form.addEventListener('submit',function(e){
    e.preventDefault()
    
    let isEmpty = checkEmpty([username,tname, phoneNo, email, password, cf_password]);
    let isEmailError = checkEmailError(email);
    let isMatchPWError = checkMatchPasswordError(password, cf_password);

    if(isEmpty || isEmailError || isMatchPWError)
    {
       
      
    }
    else
    {
        var userName = username.value;
        var Email = email.value;
        var Name = tname.value;
        var phoneNumber = phoneNo.value;
        var passWord = password.value;
        var user = {
            userName: userName,
            Name: Name,
            Email: Email,
            phoneNumber: phoneNumber,
            passWord: passWord
        };

        var json = JSON.stringify(user);
        sessionStorage.setItem(userName, json);
        alert("Đăng Kí Thành Công!, Nhấn OK để tiếp tục.");
        window.location.href="../TaiKhoan/Account_SignIn.html"
    }

})


