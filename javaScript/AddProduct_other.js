var btn_add = document.querySelector("#btn_add")
var form = document.querySelector("#form")
    

form.addEventListener('submit',function(e){
    e.preventDefault()
    // lay ten SP
    var nameP = document.querySelector("#nameproduct")
    var nameProduct_value = nameP.textContent.trim();
    // lay gia SP
    var priceElement = document.querySelector("#price");
    var priceText = priceElement.textContent.trim();
    var price_value = priceText.split(' ')[0];
    // lay hinh anh SP
    var img_value  = document.querySelector("#main_img").src

    // lay so luong SP
    var valueSpan = document.querySelector('#value');
    var SL_value = valueSpan.textContent;


  
    


        // tao SP
        var item = {
            nameProduct_value: nameProduct_value,
            price_value: price_value,
            img_value: img_value ,       
            SL_value: SL_value,
        };

        // chuyen doi thanh chuoi JSON
        var json = JSON.stringify(item);

        // luu vao localstorage
        localStorage.setItem(nameProduct_value, json);

     
        alert("Đã Thêm Vào Giỏ Hàng Thành Công!");
        location.reload()
       
})



