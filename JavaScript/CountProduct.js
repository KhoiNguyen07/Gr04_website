var count1 = sessionStorage.getItem("SoLuong")

if( count1 == null)
{
    count1 = 0;
}

var HTML=`
            <i class="fa-solid fa-cart-shopping"></i>
                                <p id="small">${count1}</p>
`
document.getElementById("shopping").innerHTML = HTML;

