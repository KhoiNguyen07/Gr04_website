// man hinh rong
var search_tap = document.querySelector(".search");
var SearchList = document.querySelector(".products");
search_tap.addEventListener("click", function(e) {
    e.stopPropagation();
    SearchList.style.display = "block";
});

document.addEventListener("click", function(e) {
    SearchList.style.display = "none";
   
});

// man hinh nho


// var TapIcon = document.querySelector("#icon_search")
// TapIcon.addEventListener("mousemove",function(e){
   
//     var modal = document.querySelector("#modal_search")
//     var input = document.querySelector("#input")
  
//     modal.style.display ="block"
//     input.style.display ="block"
    
// })








// toan bo SP
var mockData =[
{
    name: 'Quần Jeans Ống Đứng Dài',
    picture: './img_quanjean/item1_1.jpg',
    link:"./code_Quan/item1_jean.html"
},
{
    name: 'Quần Jeans Xanh Bạc',
    picture: './img_quanjean/item2_1.jpg',
    link:"./code_Quan/item2_jean.html"
},

{
    name: 'Quần Jeans Đen Ống Ôm',
    picture: './img_quanjean/item3_1.jpg',
    link:"./code_Quan/item3_jean.html"
},

{
    name: 'Quần Jeans Đen Ống Rộng',
    picture: './img_quanjean/item4_1.jpg',
    link:"./code_Quan/item4_jean.html"
},

{
    name: 'Quần Jeans Bạc Thời Trang',
    picture: './img_quanjean/item4_4.jpg',
    link:"./code_Quan/item8_jean.html"
},

{
    name: 'Quần Jeans Ống Rộng Hàn Quốc',
    picture: './img_quanjean/item5_2.jpg',
    link:"./code_Quan/item7_jean.html"
},

{
    name: 'Quần KaKi Xám Thời Trang',
    picture: './img_quankaki/item1_1.jpg',
    link:"./code_Quan/item1_kaki.html"
},

{
    name: 'Quần KaKi Đen Form Rộng',
    picture: './img_quankaki/item2_1.jpg',
    link:"./code_Quan/item2_kaki.html"
},

{
    name: 'Quần KaKi Nâu Cà Phê',
    picture: './img_quankaki/item3_1.jpg',
    link:"./code_Quan/item3_kaki.html"
},

{
    name: 'Quần Kaki Xanh Rêu Dáng Cao',
    picture: './img_quankaki/item4_2.jpg',
    link:"./code_Quan/item4_kaki.html"
},
{
    name: 'Quần Tây Xám Dáng Đứng',
    picture: './img_quantay/item3_1.jpg',
    link:"./code_Quan/item3_tay.html"
},

{
    name: 'Quần Tây Nâu Sáng Thời Trang',
    picture: './img_quantay/item2_1.jpg',
    link:"./code_Quan/item2_tay.html"
},

{
    name: 'Quần Tây Xám Đen Công Sở',
    picture: './img_quantay/item1_1.jpg',
    link:"./code_Quan/item1_tay.html"
},

{
    name: 'Quần Tây Sọc Caro Xanh Đen',
    picture: './img_quantay/item4_1.jpg',
    link:"./code_Quan/item5_tay.html"
},

{
    name: 'Quần Tây Đen Form Ôm Thời Trang',
    picture: './img_quantay/item6_4.jpg',
    link:"./code_Quan/item4_tay.html"
},

{
    name: 'Quần Short Đen Vải Jean',
    picture: './img_quanshort/item1_1.jpg',
    link:"./code_Quan/item1_short.html"
},

{
    name: 'Quần Short Sọc Xanh Trắng',
    picture: './img_quanshort/item2_1.jpg',
    link:"./code_Quan/item2_short.html"
},

{
    name: 'Quần Short Vải Trơn Xanh Lá',
    picture: './img_quanshort/item3_1.jpg',
    link:"./code_Quan/item3_short.html"
},

{
    name: 'Quần Short Xanh Bạc Vải Jean',
    picture: './img_quanshort/item4_1.jpg',
    link:"./code_Quan/item4_short.html"
},





{
    name: 'Áo Khoác Jean Cổ Da',
    picture: './img_aokhoacjean/item1_2.webp',
    link:"./code_AoKhoac/item1_jean.html"
},
{
    name: 'Áo Khoác Jean Vàng Thu',
    picture: './img_aokhoacjean/item2_1.webp',
    link:"./code_AoKhoac/item2_jean.html"
},
{
    name: 'Áo Khoác Dù Đen Có Cổ',
    picture: './img_aokhoacdu/item1_1.webp',
    link:"./code_AoKhoac/item1_du.html"
},
{
    name: 'Áo Khoác Dù Xanh Cổ Đứng',
    picture: './img_aokhoacdu/item2_1.webp',
    link:"./code_AoKhoac/item2_du.html"
},
{
    name: 'Áo Khoác Dù Xám Vải Lưới',
    picture: './img_aokhoacdu/item3_1.webp',
    link:"./code_AoKhoac/item3_du.html"
},

{
    name: 'Áo Hoodie Nâu Cafe',
    picture: './img_aohoodie/item1_1.jpg',
    link:"./code_AoKhoac/item1_hoodie.html"
},
{
    name: 'Áo Hoodie Đen Vua Hải Tặc',
    picture: './img_aohoodie/item2_1.jpg',
    link:"./code_AoKhoac/item2_hoodie.html"
},
{
    name: 'Áo Hoodie Xanh SkyBlue',
    picture: './img_aohoodie/item3_1.jpg',
    link:"./code_AoKhoac/item3_hoodie.html"
},
{
    name: 'Áo Hoodie Xanh Navi Thời Trang',
    picture: './img_aohoodie/item4_1.jpg',
    link:"./code_AoKhoac/item4_hoodie.html"
},
{
    name: 'Áo Khoác Da Lót Dù',
    picture: './img_aokhoacda/item1_1.webp',
    link:"./code_AoKhoac/item1_da.html"
},
{
    name: 'Áo Khoác Da Lót Lông',
    picture: './img_aokhoacda/item2_1.webp',
    link:"./code_AoKhoac/item2_da.html"
},

{
    name: 'Balo Nữ Dễ Thương',
    picture: './img_balo/item1_1.jpeg',
    link:"./code_Balo/item1.html"
},
{
    name: 'Balo Đen Vải Canvas',
    picture: './img_balo/item2_1.jpeg',
    link:"./code_Balo/item2.html"
},
{
    name: 'Balo Vải Vân',
    picture: './img_balo/item3_1.jpeg',
    link:"./code_Balo/item3.html"
},
{
    name: 'Balo Đen Học Sinh',
    picture: './img_balo/item4_1.png',
    link:"./code_Balo/item4.html"
},
{
    name: 'Balo Đen Da Thời Trang',
    picture: './img_balo/item5_1.jpeg',
    link:"./code_Balo/item5.html"
},

{
    name: 'Dây Nịt Da Cao Cấp',
    picture: './img_daynit/item2_1.jpeg',
    link:"./code_DayNit/item2.html"
},
{
    name: 'Dây Nịt Nút Gài',
    picture: './img_daynit/item1_1.jpeg',
    link:"./code_DayNit/item1.html"
},
{
    name: 'Dây Nịt Khóa Platinum',
    picture: './img_daynit/item3_1.jpeg',
    link:"./code_DayNit/item3.html"
},
{
    name: 'Dây Nịt Khóa Cách Điệu',
    picture: './img_daynit/item4_1.jpeg',
    link:"./code_DayNit/item4.html"
},
{
    name: 'Dây Nịt Nam Thời Trang',
    picture: './img_daynit/item5_1.jpeg',
    link:"./code_DayNit/item5.html"
},

{
    name: 'Dép Cười',
    picture: './img_dep/item1_1.jpeg',
    link:"./code_Dep/item1.html"
},
{
    name: 'Dép DUWA Đi Phố',
    picture: './img_dep/item2_1.jpeg',
    link:"./code_Dep/item2.html"
},
{
    name: 'Dép Bánh Mì',
    picture: './img_dep/item3_1.jpeg',
    link:"./code_Dep/item3.html"
},
{
    name: 'Dép Sandal Đi Học',
    picture: './img_dep/item4_1.jpeg',
    link:"./code_Dep/item4.html"
},

{
    name: 'Giày Adidas Trắng',
    picture: './img_giay/item1_1.jpeg',
    link:"./code_Giay/item1.html"
},
{
    name: 'Giày Sneaker Đi Phố',
    picture: './img_giay/item2_1.jpeg',
    link:"./code_Giay/item2.html"
},
{
    name: 'Giày Tăng Chiều Cao',
    picture: './img_giay/item3_1.jpeg',
    link:"./code_Giay/item3.html"
},

{
    name: 'Nón Lưỡi Trai Thời Trang',
    picture: './img_non/item1_1.jpeg',
    link:"./code_Non/item1.html"
},
{
    name: 'Nón Tai Bèo',
    picture: './img_non/item2_2.jpeg',
    link:"./code_Non/item2.html"
},
{
    name: 'Nón Nồi Cam',
    picture: './img_non/item3_1.jpeg',
    link:"./code_Non/item3.html"
},

{
    name: 'Vớ Họa Tiết',
    picture: './img_vo/item1_1.jpeg',
    link:"./code_Vo/item1.html"
},
{
    name: 'Vớ Ngang Cổ Chân',
    picture: './img_vo/item2_1.jpeg',
    link:"./code_Vo/item2.html"
},


{
    name: 'Áo Polo Oversize',
    picture: './img_polo/item1_1.jpeg',
    link:"./code_Ao/item1_polo.html"
},
{
    name: 'Áo Polo Khóa Kéo',
    picture: './img_polo/item2_1.jpeg',
    link:"./code_Ao/item2_polo.html"
},
{
    name: 'Áo Polo Vải Nỉ',
    picture: './img_polo/item3_1.jpeg',
    link:"./code_Ao/item3_polo.html"
},

{
    name: 'Áo Sơ Mi Vải Nỉ',
    picture: './img_somi/item1_1.jpeg',
    link:"./code_Ao/item1_somi.html"
},
{
    name: 'Áo Sơ Mi Form Rộng',
    picture: './img_somi/item2_3.jpeg',
    link:"./code_Ao/item2_somi.html"
},
{
    name: 'Áo Sơ Mi 3 Sọc',
    picture: './img_somi/item3_4.jpeg',
    link:"./code_Ao/item3_somi.html"
},

{
    name: 'Áo TankTop City Cycle',
    picture: './img_tanktop/item1_1.jpeg',
    link:"./code_Ao/item1_tanktop.html"
},
{
    name: 'Áo TankTop Trơn',
    picture: './img_tanktop/item2_2.jpeg',
    link:"./code_Ao/item2_tanktop.html"
},
{
    name: 'Áo TankTop Form Rộng',
    picture: './img_tanktop/item3_1.jpeg',
    link:"./code_Ao/item3_tanktop.html"
},

{
    name: 'Áo Thun Vải Dày Dặn',
    picture: './img_aothun/item1_1.jpeg',
    link:"./code_Ao/item1_aothun.html"
},
{
    name: 'Áo Thun Oversize',
    picture: './img_aothun/item2_4.jpeg',
    link:"./code_Ao/item2_aothun.html"
},
{
    name: 'Áo Thun Cartoon',
    picture: './img_aothun/item3_1.jpeg',
    link:"./code_Ao/item3_aothun.html"
},

]

var products = document.querySelector(".products")
mockData.forEach(item =>{

    var newProduct = document.createElement("a")
    newProduct.href = item.link
    newProduct.classList.add('product')
    newProduct.innerHTML =`
                <img src= "${item.picture}"width="60">
               <p>${item.name}</p>`
    
    products.appendChild(newProduct)
    
})

var searchInput = document.querySelector(".search input")
searchInput.addEventListener("input",function(e){
    let txtSearch = e.target.value.trim().toLowerCase()
    let listPro = document.querySelectorAll(".product")
    listPro.forEach(item => {
        
        if(item.innerText.toLowerCase().includes(txtSearch))
        {
            item.classList.remove("hide")
        }
        else{
            item.classList.add("hide")
        }

    })
})

