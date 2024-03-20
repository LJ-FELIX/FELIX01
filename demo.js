var sidenav = document.querySelector(".side-navbar")
 
function showNavbar()
{
 sidenav.style.left="0";
} 

function closeNavbar()
{
    sidenav.style.left="-40%";
}


var productContainer = document.getElementById("product")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

var enteredvalue = event.target.value.toUppercase()

for(count=0;count<productlist.length;count=count+1)
{
    var productname = productlist[count].querySelectorAll("p").textContent

    if(productname.toUpperCase().index)
}