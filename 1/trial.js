var time=1;

function timeHere() {
  time = time + 1;
  finalTime = time / 10;
	document.title = finalTime+" seconds";
}

     
$('#every').hover(function() {
    $(".blue").css({"display":"block"});
});
$('.blue').click(function() {
    $("#scene1").addClass("none");
});       

// $('#twenty').click(function() {
//     $("#middle-offset").addClass("none");
// });   

document.getElementById("nothing").addEventListener("click", function() {
$(".scroll").animate({ scrollTop: $(document).height() }, 4000);
setTimeout(function() {
   $('.scroll').animate({scrollTop:0}, 4000); 
},2000);
setInterval(function(){
     // 4000 - it will take 4 secound in total from the top of the page to the bottom
$(".scroll").animate({ scrollTop: $(document).height() }, 4000);
setTimeout(function() {
   $('.scroll').animate({scrollTop:0}, 4000); 
},4000);
    
},8000);
   });

var imgArray = ['outside/day/1.png','outside/day/2.png','outside/day/3.png','outside/day/4.png','outside/day/5.png','outside/day/6.png','outside/day/7.png','outside/day/8.png','outside/day/9.png','outside/day/10.png','outside/day/11.png','outside/day/12.png','outside/day/13.png','outside/day/14.png','outside/day/15.png','outside/night/1.png','outside/night/2.png','outside/night/3.png','outside/night/4.png','outside/night/5.png','outside/night/6.png','outside/night/7.png','outside/night/8.png']


function imgRandom() {
    for (var i = 0; i < 30; i++) {
        var rand = imgArray[Math.floor(Math.random() * imgArray.length)];
        var image = new Image();
        image.src = basePath+rand;
        document.body.appendChild(image);
    }
}

imgRandom();





