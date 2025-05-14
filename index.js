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