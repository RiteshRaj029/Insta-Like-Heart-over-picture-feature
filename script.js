var image = document.querySelector("#card")
var icon = document.getElementById("heartPop")
var likeIcon= document.getElementById("like_icon")

image.addEventListener("dblclick",function(){

    likeIcon.classList.replace("ri-heart-line","ri-heart-fill")
    icon.style.transform='translate(-50%,-50%) scale(1)'
    icon.style.opacity=1
    setTimeout(function(){
        icon.style.transform='translate(-50%,-50%) scale(0)'
        icon.style.opacity=0
    },2000)
})

