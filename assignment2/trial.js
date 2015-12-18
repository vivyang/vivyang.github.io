(function blink() { 
    $('.text').fadeOut(1500).fadeIn(800, blink); 
})();


setInterval(function () {
	var hours = new Date().getHours();
     $("#hours").html((hours < 10 ? "0" : "") + hours);
// wake up
if (hours >= 5  && hours < 7) {
	$(".work-container").html("");
	$(".break-container").html("")
	$(".sleep-container").html("");
	$(".dinner-container").html("");
	$(".lunch-container").html("");
	$(".commute-container").html("");
	$(".breakfast-container").html("");
	$(".gradient").addClass("gradient-2");
}
// breakfast
else if (hours >= 7 && hours < 8) {
	$(".work-container").html("");
	$(".break-container").html("")
	$(".sleep-container").html("");
	$(".dinner-container").html("");
	$(".morning-container").html("");
	$(".lunch-container").html("");
	$(".commute-container").html("");
	$(".gradient").addClass("gradient-3");
}
// Commute
else if (hours >=8 && hours < 9) {
	$(".work-container").html("");
	$(".break-container").html("")
	$(".sleep-container").html("");
	$(".dinner-container").html("");
	$(".morning-container").html("");
	$(".lunch-container").html("");
	$(".breakfast-container").html("");
	$(".gradient").addClass("gradient-4");
}
// Working
else if (hours >=9 && hours < 11) {;
	$(".sleep-container").html("");
	$(".dinner-container").html("");
	$(".break-container").html("")
	$(".morning-container").html("");
	$(".lunch-container").html("");
	$(".commute-container").html("");
	$(".breakfast-container").html("");
	$(".gradient").addClass("gradient-5");
}
// Lunch
else if (hours >=11 && hours < 14) {
	$(".work-container").html("")
	$(".sleep-container").html("");
	$(".break-container").html("")
	$(".dinner-container").html("");
	$(".morning-container").html("");
	$(".commute-container").html("");
	$(".breakfast-container").html("");
	$(".gradient").addClass("gradient-5");
}
// Work continue
else if (hours >=14 && hours < 18) {
	$(".sleep-container").html("");
	$(".dinner-container").html("");
	$(".break-container").html("")
	$(".morning-container").html("");
	$(".lunch-container").html("");
	$(".commute-container").html("");
	$(".breakfast-container").html("");
	$(".gradient").addClass("gradient-6");
}
// Dinner
else if (hours >=18 && hours < 22) {
	$(".work-container").html("")
	$(".break-container").html("")
	$(".sleep-container").html("");
	$(".morning-container").html("");
	$(".lunch-container").html("");
	$(".commute-container").html("");
	$(".breakfast-container").html("");
	$(".gradient").addClass("gradient-7");
}
// Break 
else if (hours >=22 && hours < 24) {
	$(".work-container").html("")
	$(".sleep-container").html("");
	$(".dinner-container").html("");
	$(".morning-container").html("");
	$(".lunch-container").html("");
	$(".commute-container").html("");
	$(".breakfast-container").html("");
	$(".gradient").addClass("gradient-8");
}
// Sleep
else {
	$(".break-container").html("")
	$(".work-container").html("")
   	$(".dinner-container").html("");
   	$(".morning-container").html("");
   	$(".lunch-container").html("");
   	$(".commute-container").html("");
   	$(".breakfast-container").html("");
   	$(".gradient").addClass("gradient-1");
}
}, 1000);

