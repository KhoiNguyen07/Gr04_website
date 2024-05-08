var email = document.querySelector("#email")
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
    
    let isEmpty = checkEmpty([email]);
    let isEmailError = checkEmailError(email);


    if(isEmpty || isEmailError)
    {
        var heading1 = document.querySelector("h3")
        var heading2 = document.querySelector("h5")
        heading1.innerText=""
        heading2.innerText=""
    }
    else
    {
       var heading1 = document.querySelector("h3")
       heading1.innerText="Mật Khẩu Đã Được Gửi Qua Email Của Bạn."
       var heading2 = document.querySelector("h5")
       heading2.innerText="Nhấn Đăng Nhập Tài Khoản Để Tiếp Tục."
    }

})
