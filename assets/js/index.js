$(document).ready(function () {
    $('.carousel').carousel({
        interval: 8000
    })

});




$(function () {
    $(document).scroll(function () {
       

        let $nav = $(".bg-light");
        if ($nav.toggleClass('scrolled', $(this).scrollTop() > 3)) {
           document.querySelector('.navbar-light .navbar-nav .nav-link ').setAttribute('style', 'color:black !important;')
            document.querySelector('.bar1').setAttribute('style', 'background:black ;')
            document.querySelector('.bar2').setAttribute('style', 'background:black ;')
            document.querySelector('.bar3').setAttribute('style', 'background:black ;')
           document.querySelectorAll('.nav-link').forEach(function(e){
               e.setAttribute('style', 'color:black !important;')
           
           })
           document.querySelector('.bg-light').setAttribute('style', 'background:white !important;')

        } if ($(this).scrollTop() == 0) {
            
            document.querySelector('.navbar-light .navbar-nav .nav-link').setAttribute('style', 'color:white;')
            document.querySelector('.bar1').setAttribute('style', 'background:white ;')
            document.querySelector('.bar2').setAttribute('style', 'background:white ;')
            document.querySelector('.bar3').setAttribute('style', 'background:white ;')
            document.querySelector('.bg-light').setAttribute('style', 'background:#21202052 !important')
            document.querySelectorAll('.nav-link').forEach(function (e) {
                e.setAttribute('style', 'color:white !important;')
            })
        }


    });
});


function myFunction(x) {
    x.classList.toggle("change");
}

let isOpen = false



document.querySelector('.navbar-toggler').addEventListener('click',function(e){
   
    let width = $(window).width();

    console.log(width)
    if (width < 976){
    
    if (isOpen == false) {
        isOpen = true
        document.querySelector('.navbar-expand-lg').setAttribute('style', 'background:#868698 !important;')
        console.log(isOpen)
    }else if (isOpen == true){
        isOpen = false
        document.querySelector('.navbar-expand-lg').setAttribute('style', 'background:#21202052 !important;')
        console.log(isOpen)
    }
    }
})