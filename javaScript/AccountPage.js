var loginName = sessionStorage.getItem("loggedInUsername")
var signout = document.querySelector("#SignOut")
var logoitem = document.querySelector("#logoitem")
var infoitem = document.querySelector("#infoitem")
var warning = document.querySelector("#warning")

let flat;
// load du lieu
document.addEventListener("DOMContentLoaded", function() {
    // lay du lieu storage
    var storedData = sessionStorage.getItem(loginName);
    
    
    if (storedData) {
        flat = true;
        var userData = JSON.parse(storedData);
        
        // function hien thi tt
        displayUserData(userData);
    } else {
        // du lieu rong
        document.getElementById("userInfo").innerHTML = "Tài Khoản Chưa Được Đăng Nhập!";
        flat = false;
    }

})


// function hien thi tt
function displayUserData(userData) {
   // code html hien thi
    var userInfoHTML = `
        <h2>THÔNG TIN KHÁCH HÀNG</h2>
        <p><b>Tên Tài Khoản:</b> <span>${userData.userName}</span></p>
        <p><b>Tên Khách Hàng:</b> <span>${userData.Name}</span> </p>
        <p><b>Email:</b> <span>${userData.Email}</span> </p>
        <p><b>Số điện thoại:</b> <span>${userData.phoneNumber}</span> </p>
       
    `;
    
    // hien thi code html
    document.getElementById("userInfo").innerHTML = userInfoHTML;
   


    signout.style.display = "block";
    logoitem.style.display= "block";
    infoitem.style.display= "block";
    warning.style.display="none";
}
// su kien dang xuat
signout.addEventListener("click",function(e){
   
    var confirmation = confirm("Bạn Có Chắc Chắn Muốn Đăng Xuất Tài Khoản")
    if(confirmation)
    {
        flat= false;
        sessionStorage.setItem("loggedInUsername", "");
        window.location.href="../TaiKhoan/TaiKhoan.html" 
    
    }
   
   
  
})
