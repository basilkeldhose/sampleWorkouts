var charecter = document.getElementById("charecter");
var block = document.getElementById("block");
function jump(){
    if(charecter.classList!="animate"){
charecter.classlist.add("anumate");
    }
setTimeout(function(){
charecter.classList.remove("animate")
},500)
}

var checkDead =setInterval(function(){
    var charecterTop=parseInt(window.getComputedStyle(charecter).getPropertyValue("top"));
    if(blockLeft<20 && blockLeft>0 && charecterTop>=130){
        block.style.animation="none";
        block.style.display="none";
        alert("you lose")
    }
},10)