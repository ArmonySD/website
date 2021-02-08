function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

window.onscroll = function() {myFun()};

var myTopnav = document.getElementById("myTopnav");
var sticky = myTopnav.offsetTop;

function myFun() {
    if (window.pageYOffset >= sticky) {
        myTopnav.classList.add("sticky")
        }
        else {
            myTopnav.classList.remove("sticky");
            }
}