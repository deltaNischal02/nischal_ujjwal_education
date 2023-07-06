function redirectToLowerSection() {
    window.location.href="index.html#lowerSection"
}

window.addEventListener('scroll',function(){
    var navbar = document.querySelector('.navbar');
    if(window.scrollY>650){
        navbar.style.display ="flex";
    }
    else{
        navbar.style.display="none";
    }
});