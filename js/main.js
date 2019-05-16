$(document).ready(function(){


//панель элементов (админка)
$(".c_menu").click(function() {
	if ($(".g_menu").is(":visible")) {
			$(".g_menu").hide();
		}else{
		$(".g_menu").show();
		}
		
	
	
});



function windowSize(){
    if ($(window).width() >= '991'){
        $('.phone_nav').hide();
    } else {
        $('.phone_nav').show();

    }
}
$(window).on('load resize',windowSize);


});