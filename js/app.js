$(document).on('scroll', function() {
    if ($(document).scrollTop() > 1) {
        $('#navbar').removeClass('scrollOn');
        $('#navbar').addClass('scrollOff');
        $('#btn-mas').fadeOut();
        $('#btn-arriba').fadeIn();
    } else {
        $('#navbar').removeClass('scrollOff');
        $('#navbar').addClass('scrollOn');
        $('#btn-mas').fadeIn();
        $('#btn-arriba').fadeOut();
    }
});
$('#btn-arriba').on('click', function(e){
	e.preventDefault();
    $('html,body').animate({ scrollTop: 0 }, 1000);
});

$('.ancla').on('click', function(e) {
    e.preventDefault();
    var strAncla = '#' + $(this).data('ancla');
    $('html,body').animate({ scrollTop: $(strAncla).offset().top - 60 }, 1000);
});