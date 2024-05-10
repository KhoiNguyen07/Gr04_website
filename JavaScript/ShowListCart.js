
// Hien Thi DS trong gio hang
  var No
  var userInfoHTML=""
  var count = 0;
  var sum = 0;
  var localStorage_length = localStorage.length;
  var buy = document.querySelector("#buy")
  var subtt = document.querySelector("#subtt")
              // duyet qua tung SP 

              
            

              for(var i= 0; i< localStorage_length; i++)
              {
                  var key = localStorage.key(i);
                  var itemJson = localStorage.getItem(key);
                  var item = JSON.parse(itemJson);

                  if(item.size_value == null)
                  {
                      item.size_value="Không Có"
                  }
                  userInfoHTML += `
                          <div class="row" >
                             
                              <div class=" col-xl-4 col-md-12 text-center" >             
                                  <img src="${item.img_value}" width="250">
                              </div>
                              <div class="col-xl-8 col-md-12 mt-5">
                                 
                                  <div>          
                                      <p>Sản Phẩm: <b style="margin-left: 30px;">${item.nameProduct_value}</b></p>
                                  </div>
                                  <div>          
                                      <p>Size: <b style="margin-left: 85px;">${item.size_value}</b></p>
                                  </div>

                                  <div>
                                          <p>Đơn Giá: <b style="margin-left: 50px;">${item.price_value}</b></p>
                                  </div>

                                  <div>
                                         
                                          <p>Số Lượng: <span style="margin-left: 35px;">${item.SL_value}</span></p>
                                  </div>
                                  
                                  <div>    
                                      <p >Thao Tác: <i class="fa-solid fa-trash del" id="${i}" style="margin-left: 40px;"></i></p>
                                      
                                  </div>
                              </div>
                          </div>
                          `
                  count++
                  sum += parseInt(item.price_value)* parseInt(item.SL_value);
                  
              }
              if(count == 0)
              {
                  subtt.style.display="block"     
                   
              }
              else{
                  if(sum > 1000)
                  {
                      sum/=1000
                  }
                  
                  userInfoHTML +=`<div class="total">    
                                      <p>Số Lượng Sản Phẩm: ${count}</p>
                                      <h3>TỔNG SỐ TIỀN : ${sum}.000đ</h3>
                                  </div>`
                  buy.style.display="block" 
                  
              }
             
              document.getElementById("itemPD").innerHTML = userInfoHTML;
  
  
  //Xu ly Xoa SP
  var del = document.querySelectorAll(".del")
  del.forEach(function(button){
      button.addEventListener("click",function(){
          var delNo = button.id
          console.log(delNo)
          var confirmation  = confirm("Bạn Có Chắc Chắn Muốn Xóa Sản Phẩm Này?")
          if(confirmation)
          {                 
             
              localStorage.removeItem(localStorage.key(delNo));
              window.location.href="../TaiKhoan/GioHang.html"
          }
          
      })

  })

  // thanh toan

  var payment = document.querySelector("#payment")
  payment.addEventListener("click",function(){

        if(flat){
            var confirmation  = confirm("Bạn Có Chắc Chắn Muốn Thanh Toán?")
            if(confirmation)
            {                 
                
                localStorage.clear()
                alert("Thanh Toán Thành Công!")
                window.location.href="../TaiKhoan/GioHang.html"
            }
        }else{
            alert("Bạn Chưa Đăng Nhập Vào Tài Khoản!")
            window.location.href="../TaiKhoan/Account_SignIn.html"
        }
       
      
      
     
  })
             




 

