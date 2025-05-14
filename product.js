// selecting side navbar,MEnu icon
var sidebar=document.getElementById("sidenavbar")
var menuicon=document.getElementById("menuicon")

menuicon.addEventListener("click",function(){
    sidebar.style.right=0
})

// select the close icon
var close=document.getElementById("close-nav")

close.addEventListener("click",function(){
    sidebar.style.right="-50%"
})

// search functionality

var search=document.getElementById("search")
var productContainer=document.getElementById("product-container")

var productList=productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue=event.target.value.toUpperCase()

    for(count=0;count<productList.length;count=count+1){

        var productName=productList[count].querySelector("h1").textContent

        if(productName.toUpperCase().indexOf(enteredValue)<0){
            productList[count].style.display="none"

        }

        else{
            productList[count].style.display="block"
        }
    }
})