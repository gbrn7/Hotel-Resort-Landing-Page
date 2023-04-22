const x = document.querySelector(".icon-menu");
x.addEventListener("click", function(){
    x.classList.toggle("bx-x");
    const y = document.querySelector(".menu");
    y.classList.toggle("active");
    console.log(y);
});

$(window).on("scroll", function(){
    if($(window).scrollTop() > 70){
        $(".navbar").addClass("show");
    }else{
        $(".navbar").removeClass("show");
    }
});

$(window).ready(function(){
    $(".menu-link").on("click", function(){
        $(".menu-link").removeClass("active");
        $(this).addClass("active")
    })
})

