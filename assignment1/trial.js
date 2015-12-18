var time=1;

function timeHere() {
  time = time + 1;
  finalTime = time / 10;
	document.title = finalTime+" seconds";
}

function sayTime() {
  finalTime = time / 10;
  alert("You have wated\n You have been here " + finalTime + " seconds!");
}

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
