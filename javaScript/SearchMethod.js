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

var TapIcon = document.querySelector("#icon_search")

TapIcon.addEventListener("mousemove",function(e){
    var modal = document.querySelector("#modal_search")
    var input = document.querySelector("#input")
    
    modal.style.display ="block"
    input.style.display ="block"
    
})








// toan bo SP
var mockData =[
{
    name: 'Quần Jeans Ống Đứng Dài',
    picture: '/Images/IMG_Product/IMG_Quan/jean/item1/1.jpg',
    link:"/SourceCode/SanPham/Detail/Quan/QuanJean/item1.html"
},
{
    name: 'Quần Jeans Xanh Bạc',
    picture: '/Images/IMG_Product/IMG_Quan/jean/item2/1.jpg',
    link:"/SourceCode/SanPham/Detail/Quan/QuanJean/item2.html"
},

{
    name: 'Quần Jeans Đen Ống Ôm',
    picture: '/Images/IMG_Product/IMG_Quan/jean/item3/1.jpg',
    link:"/SourceCode/SanPham/Detail/Quan/QuanJean/item3.html"
},

{
    name: 'Quần Jeans Đen Ống Rộng',
    picture: '/Images/IMG_Product/IMG_Quan/jean/item4/1.jpg',
    link:"/SourceCode/SanPham/Detail/Quan/QuanJean/item4.html"
},

{
    name: 'Quần Jeans Bạc Thời Trang',
    picture: '/Images/IMG_Product/IMG_Quan/jean/item4/4.jpg',
    link:"/SourceCode/SanPham/Detail/Quan/QuanJean/item8.html"
},

{
    name: 'Quần Jeans Ống Rộng Hàn Quốc',
    picture: '/Images/IMG_Product/IMG_Quan/jean/item5/2.jpg',
    link:"/SourceCode/SanPham/Detail/Quan/QuanJean/item7.html"
},

{
    name: 'Quần KaKi Xám Thời Trang',
    picture: '/Images/IMG_Product/IMG_Quan/Kaki/item1/1.jpg',
    link:"/SourceCode/SanPham/Detail/Quan/QuanKaki/item1.html"
},

{
    name: 'Quần KaKi Đen Form Rộng',
    picture: '/Images/IMG_Product/IMG_Quan/Kaki/item2/1.jpg',
    link:"/SourceCode/SanPham/Detail/Quan/QuanKaki/item2.html"
},

{
    name: 'Quần KaKi Nâu Cà Phê',
    picture: '/Images/IMG_Product/IMG_Quan/Kaki/item3/1.jpg',
    link:"/SourceCode/SanPham/Detail/Quan/QuanKaki/item3.html"
},

{
    name: 'Quần Kaki Xanh Rêu Dáng Cao',
    picture: '/Images/IMG_Product/IMG_Quan/Kaki/item4/2.jpg',
    link:"/SourceCode/SanPham/Detail/Quan/QuanKaki/item4.html"
},
{
    name: 'Quần Tây Xám Dáng Đứng',
    picture: '/Images/IMG_Product/IMG_Quan/QuanTay/item3/1.jpg',
    link:"/SourceCode/SanPham/Detail/Quan/QuanTay/item3.html"
},

{
    name: 'Quần Tây Nâu Sáng Thời Trang',
    picture: '/Images/IMG_Product/IMG_Quan/QuanTay/item2/1.jpg',
    link:"/SourceCode/SanPham/Detail/Quan/QuanTay/item2.html"
},

{
    name: 'Quần Tây Xám Đen Công Sở',
    picture: '/Images/IMG_Product/IMG_Quan/QuanTay/item1/1.jpg',
    link:"/SourceCode/SanPham/Detail/Quan/QuanTay/item1.html"
},

{
    name: 'Quần Tây Sọc Caro Xanh Đen',
    picture: '/Images/IMG_Product/IMG_Quan/QuanTay/item4/1.jpg',
    link:"/SourceCode/SanPham/Detail/Quan/QuanTay/item5.html"
},

{
    name: 'Quần Tây Đen Form Ôm Thời Trang',
    picture: '/Images/IMG_Product/IMG_Quan/QuanTay/item6/4.jpg',
    link:"/SourceCode/SanPham/Detail/Quan/QuanTay/item4.html"
},

{
    name: 'Quần Short Đen Vải Jean',
    picture: '/Images/IMG_Product/IMG_Quan/short/item1/1.jpg',
    link:"/SourceCode/SanPham/Detail/Quan/QuanShort/item1.html"
},

{
    name: 'Quần Short Sọc Xanh Trắng',
    picture: '/Images/IMG_Product/IMG_Quan/short/item2/1.jpg',
    link:"/SourceCode/SanPham/Detail/Quan/QuanShort/item2.html"
},

{
    name: 'Quần Short Vải Trơn Xanh Lá',
    picture: '/Images/IMG_Product/IMG_Quan/short/item3/1.jpg',
    link:"/SourceCode/SanPham/Detail/Quan/QuanShort/item3.html"
},

{
    name: 'Quần Short Xanh Bạc Vải Jean',
    picture: '/Images/IMG_Product/IMG_Quan/short/item4/1.jpg',
    link:"/SourceCode/SanPham/Detail/Quan/QuanShort/item4.html"
},

{
    name: 'Áo Khoác Jean Cổ Da',
    picture: '/Images/IMG_Product/IMG_AoKhoac/Jean/Item1/2.webp',
    link:"/SourceCode/SanPham/Detail/AoKhoac/AoKhoacJean/item1.html"
},
{
    name: 'Áo Khoác Jean Vàng Thu',
    picture: '/Images/IMG_Product/IMG_AoKhoac/Jean/Item2/1.webp',
    link:"/SourceCode/SanPham/Detail/AoKhoac/AoKhoacJean/item2.html"
},
{
    name: 'Áo Khoác Dù Đen Có Cổ',
    picture: '/Images/IMG_Product/IMG_AoKhoac/Du/item1/1.webp',
    link:"/SourceCode/SanPham/Detail/AoKhoac/AoKhoacDu/item1.html"
},
{
    name: 'Áo Khoác Dù Xanh Cổ Đứng',
    picture: '/Images/IMG_Product/IMG_AoKhoac/Du/item2/2.webp',
    link:"/SourceCode/SanPham/Detail/AoKhoac/AoKhoacDu/item2.html"
},
{
    name: 'Áo Khoác Dù Xám Vải Lưới',
    picture: '/Images/IMG_Product/IMG_AoKhoac/Du/item3/1.webp',
    link:"/SourceCode/SanPham/Detail/AoKhoac/AoKhoacDu/item3.html"
},

{
    name: 'Áo Hoodie Nâu Cafe',
    picture: '/Images/IMG_Product/IMG_AoKhoac/Hoodie/item1/1.jpg',
    link:"/SourceCode/SanPham/Detail/AoKhoac/AoHoodie/item1.html"
},
{
    name: 'Áo Hoodie Đen Vua Hải Tặc',
    picture: '/Images/IMG_Product/IMG_AoKhoac/Hoodie/item2/1.jpg',
    link:"/SourceCode/SanPham/Detail/AoKhoac/AoHoodie/item2.html"
},
{
    name: 'Áo Hoodie Xanh SkyBlue',
    picture: '/Images/IMG_Product/IMG_AoKhoac/Hoodie/item3/1.jpg',
    link:"/SourceCode/SanPham/Detail/AoKhoac/AoHoodie/item3.html"
},
{
    name: 'Áo Hoodie Xanh Navi Thời Trang',
    picture: '/Images/IMG_Product/IMG_AoKhoac/Hoodie/item4/1.jpg',
    link:"/SourceCode/SanPham/Detail/AoKhoac/AoHoodie/item4.html"
},
{
    name: 'Áo Khoác Da Lót Dù',
    picture: '/Images/IMG_Product/IMG_AoKhoac/Da/Item1/1.webp',
    link:"/SourceCode/SanPham/Detail/AoKhoac/AoKhoacDa/item1.html"
},
{
    name: 'Áo Khoác Da Lót Lông',
    picture: '/Images/IMG_Product/IMG_AoKhoac/Da/Item2/1.webp',
    link:"/SourceCode/SanPham/Detail/AoKhoac/AoKhoacDa/item2.html"
},

{
    name: 'Balo Nữ Dễ Thương',
    picture: '/Images/IMG_Product/IMG_PhuKien/Balo/item1/1.jpeg',
    link:"/SourceCode/SanPham/Detail/PhuKien/Balo/item1.html"
},
{
    name: 'Balo Đen Vải Canvas',
    picture: '/Images/IMG_Product/IMG_PhuKien/Balo/item2/1.jpeg',
    link:"/SourceCode/SanPham/Detail/PhuKien/Balo/item2.html"
},
{
    name: 'Balo Vải Vân',
    picture: '/Images/IMG_Product/IMG_PhuKien/Balo/item3/1.jpeg',
    link:"/SourceCode/SanPham/Detail/PhuKien/Balo/item3.html"
},
{
    name: 'Balo Đen Học Sinh',
    picture: '/Images/IMG_Product/IMG_PhuKien/Balo/item4/1.png',
    link:"/SourceCode/SanPham/Detail/PhuKien/Balo/item4.html"
},
{
    name: 'Balo Đen Da Thời Trang',
    picture: '/Images/IMG_Product/IMG_PhuKien/Balo/item5/1.jpeg',
    link:"/SourceCode/SanPham/Detail/PhuKien/Balo/item5.html"
},

{
    name: 'Dây Nịt Da Cao Cấp',
    picture: '/Images/IMG_Product/IMG_PhuKien/DayNit/item2/1.jpeg',
    link:"/SourceCode/SanPham/Detail/PhuKien/DayNit/item2.html"
},
{
    name: 'Dây Nịt Nút Gài',
    picture: '/Images/IMG_Product/IMG_PhuKien/DayNit/item1/1.jpeg',
    link:"/SourceCode/SanPham/Detail/PhuKien/DayNit/item1.html"
},
{
    name: 'Dây Nịt Khóa Platinum',
    picture: '/Images/IMG_Product/IMG_PhuKien/DayNit/item3/1.jpeg',
    link:"/SourceCode/SanPham/Detail/PhuKien/DayNit/item3.html"
},
{
    name: 'Dây Nịt Khóa Cách Điệu',
    picture: '/Images/IMG_Product/IMG_PhuKien/DayNit/item4/1.jpeg',
    link:"/SourceCode/SanPham/Detail/PhuKien/DayNit/item4.html"
},
{
    name: 'Dây Nịt Nam Thời Trang',
    picture: '/Images/IMG_Product/IMG_PhuKien/DayNit/item5/1.jpeg',
    link:"/SourceCode/SanPham/Detail/PhuKien/DayNit/item5.html"
},

{
    name: 'Dép Cười',
    picture: '/Images/IMG_Product/IMG_PhuKien/Dep/item1/1.jpeg',
    link:"/SourceCode/SanPham/Detail/PhuKien/Dep/item1.html"
},
{
    name: 'Dép DUWA Đi Phố',
    picture: '/Images/IMG_Product/IMG_PhuKien/Dep/item2/1.jpeg',
    link:"/SourceCode/SanPham/Detail/PhuKien/Dep/item2.html"
},
{
    name: 'Dép Bánh Mì',
    picture: '/Images/IMG_Product/IMG_PhuKien/Dep/item3/1.jpeg',
    link:"/SourceCode/SanPham/Detail/PhuKien/Dep/item3.html"
},
{
    name: 'Dép Sandal Đi Học',
    picture: '/Images/IMG_Product/IMG_PhuKien/Dep/item4/1.jpeg',
    link:"/SourceCode/SanPham/Detail/PhuKien/Dep/item4.html"
},

{
    name: 'Giày Adidas Trắng',
    picture: '/Images/IMG_Product/IMG_PhuKien/Giay/item1/1.jpeg',
    link:"/SourceCode/SanPham/Detail/PhuKien/Giay/item1.html"
},
{
    name: 'Giày Sneaker Đi Phố',
    picture: '/Images/IMG_Product/IMG_PhuKien/Giay/item2/1.jpeg',
    link:"/SourceCode/SanPham/Detail/PhuKien/Giay/item2.html"
},
{
    name: 'Giày Tăng Chiều Cao',
    picture: '/Images/IMG_Product/IMG_PhuKien/Giay/item3/1.jpeg',
    link:"/SourceCode/SanPham/Detail/PhuKien/Giay/item3.html"
},

{
    name: 'Nón Lưỡi Trai Thời Trang',
    picture: '/Images/IMG_Product/IMG_PhuKien/Non/item1/1.jpeg',
    link:"/SourceCode/SanPham/Detail/PhuKien/Non/item1.html"
},
{
    name: 'Nón Tai Bèo',
    picture: '/Images/IMG_Product/IMG_PhuKien/Non/item2/2.jpeg',
    link:"/SourceCode/SanPham/Detail/PhuKien/Non/item2.html"
},
{
    name: 'Nón Nồi Cam',
    picture: '/Images/IMG_Product/IMG_PhuKien/Non/item3/1.jpeg',
    link:"/SourceCode/SanPham/Detail/PhuKien/Non/item3.html"
},

{
    name: 'Vớ Họa Tiết',
    picture: '/Images/IMG_Product/IMG_PhuKien/Vo/item1/1.jpeg',
    link:"/SourceCode/SanPham/Detail/PhuKien/Vo/item1.html"
},
{
    name: 'Vớ Ngang Cổ Chân',
    picture: '/Images/IMG_Product/IMG_PhuKien/Vo/item2/1.jpeg',
    link:"/SourceCode/SanPham/Detail/PhuKien/Vo/item2.html"
},
{
    name: 'Vớ Dài Trơn',
    picture: '/Images/IMG_Product/IMG_PhuKien/Vo/item3/1.jpeg',
    link:"/SourceCode/SanPham/Detail/PhuKien/Vo/item3.html"
},

{
    name: 'Áo Polo Oversize',
    picture: '/Images/IMG_Product/IMG_Ao/Polo/item1/1.jpeg',
    link:"/SourceCode/SanPham/Detail/Ao/AoPolo/item1.html"
},
{
    name: 'Áo Polo Khóa Kéo',
    picture: '/Images/IMG_Product/IMG_Ao/Polo/item2/1.jpeg',
    link:"/SourceCode/SanPham/Detail/Ao/AoPolo/item2.html"
},
{
    name: 'Áo Polo Vải Nỉ',
    picture: '/Images/IMG_Product/IMG_Ao/Polo/item3/1.jpeg',
    link:"/SourceCode/SanPham/Detail/Ao/AoPolo/item3.html"
},

{
    name: 'Áo Sơ Mi Vải Nỉ',
    picture: '/Images/IMG_Product/IMG_Ao/SoMi/item1/1.jpeg',
    link:"/SourceCode/SanPham/Detail/Ao/AoSoMi/item1.html"
},
{
    name: 'Áo Sơ Mi Form Rộng',
    picture: '/Images/IMG_Product/IMG_Ao/SoMi/item2/3.jpeg',
    link:"/SourceCode/SanPham/Detail/Ao/AoSoMi/item2.html"
},
{
    name: 'Áo Sơ Mi 3 Sọc',
    picture: '/Images/IMG_Product/IMG_Ao/SoMi/item3/4.jpeg',
    link:"/SourceCode/SanPham/Detail/Ao/AoSoMi/item3.html"
},

{
    name: 'Áo TankTop City Cycle',
    picture: '/Images/IMG_Product/IMG_Ao/TankTop/item1/1.jpeg',
    link:"/SourceCode/SanPham/Detail/Ao/AoTankTop/item1.html"
},
{
    name: 'Áo TankTop Trơn',
    picture: '/Images/IMG_Product/IMG_Ao/TankTop/item2/2.jpeg',
    link:"/SourceCode/SanPham/Detail/Ao/AoTankTop/item2.html"
},
{
    name: 'Áo TankTop Form Rộng',
    picture: '/Images/IMG_Product/IMG_Ao/TankTop/item3/1.jpeg',
    link:"/SourceCode/SanPham/Detail/Ao/AoTankTop/item3.html"
},

{
    name: 'Áo Thun Vải Dày Dặn',
    picture: '/Images/IMG_Product/IMG_Ao/Thun/item1/1.jpeg',
    link:"/SourceCode/SanPham/Detail/Ao/AoThun/item1.html"
},
{
    name: 'Áo Thun Oversize',
    picture: '/Images/IMG_Product/IMG_Ao/Thun/item2/4.jpeg',
    link:"/SourceCode/SanPham/Detail/Ao/AoThun/item2.html"
},
{
    name: 'Áo Thun Cartoon',
    picture: '/Images/IMG_Product/IMG_Ao/Thun/item3/1.jpeg',
    link:"/SourceCode/SanPham/Detail/Ao/AoThun/item3.html"
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

