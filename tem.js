/*const hamburger = document.querySelector('.hamburger');
const navlink = doocument.querySelector('.nav-link');
const links = document.querySelectorAll('.nav-link li');

hamburger.addEventListener("click", ()=>{
    navlink.classlist.toggle("open");
});*/
function myFunction() {
    var x = document.getElementById("nav-link");
    if (x.style.display ==="none") {
        x.style.display = "block";
    } else {
        x.style.display ="none";
    }
}
   
   /* } jQuery (function($) {
        $('.hamburger').click(function(){
            $('.nav-link').toggleclass('open')
            })
        })
   
    jQuery(function($) {
        $('.hamburger').click(function(){
        $('.nav-link').addclass('open')
        $('.hamburger').addclass('none')
        })

        $('.close').click(function(){
        $('.nav-link').removeclass('open')
        $('.hamburger').removeclass('none')
        })
    })*/