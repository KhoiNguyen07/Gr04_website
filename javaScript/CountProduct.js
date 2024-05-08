var count1 = 0;

for(var i = 0 ; i< localStorage.length; i++)
{
    count1++;
}


var HTML=`
            <i class="fa-solid fa-cart-shopping"></i>
                                <p id="small">${count1}</p>
`
document.getElementById("shopping").innerHTML = HTML;

