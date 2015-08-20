// $(".process_button").click(function(){
//     $('.red').addClass('show');
// });
$( ".process_button" ).hover(function(){
  		$('.shade').addClass('show_shade');
});
$('.process_button').click(function() {
    if ($(this).text() === '+') {
         $(this).text('-');
         $('.red').addClass('show');
         $('.blue').addClass('smaller');
         $('.column-wrapperm').addClass('wrap');
    }
    else {
        $(this).text('+');
        $('.red').removeClass('show');
        $('.blue').removeClass('smaller');
        $('.column-wrapperm').removeClass('wrap');
    }
});
// $( ".process_button" ).click(function() {
//   $( "#block2" )
//     .animate({ width: "90%" }, 1000 )
//     .animate({ fontSize: "24px" }, 1000 )
//     .animate({ borderLeftWidth: "15px" }, 1000 );
// });
