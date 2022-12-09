function myfunction() {
    location.href = "Documents.html";
}

var b = document.querySelector(".hindi");
b.addEventListener("click", change);

function change(){
    var i=Math.floor(Math.random()*300)+1 ;
    var j=Math.floor(Math.random()*300)+1 ;

    b.style.left=i+"px"
    b.style.top=j+"px"
    b.style.position="absolute";
}
