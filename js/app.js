$(document).on('scroll', function() {
    if ($(document).scrollTop() > 1) {
        $('#navBar').addClass('sticky');
        $('#btn-mas').fadeOut();
        $('#btn-arriba').fadeIn();
    } else {
        $('#navBar').removeClass('sticky');
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
    $('html,body').animate({ scrollTop: $(strAncla).offset().top - 50 }, 1000);
});