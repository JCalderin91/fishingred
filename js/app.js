
$(document).on('scroll', function(){
	if($(document).scrollTop()>1){
		//$('#navBar').addClass('sticky');
		$('#btn-mas').fadeOut();
		$('#posHeader').css('top','-40px');

	}else{
		//$('#navBar').removeClass('sticky');
		$('#btn-mas').fadeIn();
		$('#posHeader').css('top','0px');
	}
});



