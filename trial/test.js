$(".process_button").click(function(){
    $('.red').addClass('show');
});
$('.process_button').click(function() {
    if ($(this).text() === 'Process') {
         $(this).text('Hide');
    }
    else {
        $(this).text('Process');
        $('.red').removeClass('show');
    }
});