$(document).ready(function(){
    AOS.init({
        duration : '1000'
    });

    $(".mobileNav a").click(function(e){
        e.preventDefault()
        $('.menu').toggle()
    })
    
})