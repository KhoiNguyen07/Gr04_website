var username = document.querySelector("#username")       
var password = document.querySelector("#password")
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

// function checkEmailError(input){          
//     const regexEmail = 
//     /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i

//     input.value = input.value.trim()
    
//     let isEmailError = !regexEmail.test(input.value)
//     if(regexEmail.test(input.value))
//     {
//         showSuccess(input)
//     }
//     else{
//         showError (input,"Email Không Hợp Lệ!" )
//     }
//     return isEmailError
// }

form.addEventListener('submit',function(e){
    e.preventDefault()
    
    
    let isEmpty = checkEmpty([password, username]);
    
    
    if(isEmpty)
    {
        //do nothing
    }
    else
    {
        var userName = username.value;                   
        var passWord = password.value;
        var user =sessionStorage.getItem(userName)
        var data = JSON.parse(user)
        if(user == null)
        {
            alert("Tài Khoản Không Tồn Tại!")
        }
        if(userName == data.userName && passWord == data.passWord)
        {
            alert("Đăng Nhập Thành Công!")
            sessionStorage.setItem("loggedInUsername", data.userName);
            window.location.href="../TaiKhoan/TaiKhoan.html" 
        }
        else{
            alert("Sai Mật Khẩu Hoặc Tên Tài Khoản!")
        }
       
    }

})


