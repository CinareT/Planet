var grow=document.querySelector('.grow');
var shrink=document.querySelector('.shrink');
var vis=document.querySelector('.vis');
var invis=document.querySelector('.invis');
var planet=document.querySelector('.planet');
var image=document.querySelector('.image');
var img=document.querySelector('img');
var normal=document.querySelector('.normal');
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "./captainplanet24.mp3");
 $(".theme-button").on("click", function() {
          audioElement.play();
        });
 $(".pause-button").on("click", function() {
          audioElement.pause();
        });
grow.onclick=function(){
    img.style.height= '700px'
    img.style.width= '600px'
}
shrink.onclick=function(){
    img.style.height= '250px',
    img.style.width= '200px'
}
normal.onclick=function(){
    img.style.height='500px',
    img.style.width= '400px'

}
vis.onclick=function(){
    img.style.opacity='1'
}
invis.onclick=function(){
    img.style.opacity='0.1'
}
$('.sag').on('click', function(){
     $('.image').animate({
        left: '+=200px'
     })
})
$('.sol').on('click',function(){
    $('.image').animate({
        left: '-=200px'
    })
})
$('.asagi').on('click',function(){
    $('.image').animate({
        bottom: '-=200px'
    })
})
$('.yuxari').on('click',function(){
    $('.image').animate({
        bottom: '+=200px'
    })
})


$(".planet").on("click", function() {
    $(".image").animate({ top: "200px", left: "280px" }, "fast");
  });




    