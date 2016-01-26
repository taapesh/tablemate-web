$(document).ready(function(){
    $('#learn-1').click(function(){
        $('#more-info-1').toggle();
        $('#overview-1').toggleClass('overview-feature-revealed');
        $('#plus-1').toggleClass('icon_close_alt2');
        $('#plus-1').toggleClass('info-toggled');
        $('#learn-text-1').toggle();
    });
    $('#learn-2').click(function(){
        $('#more-info-2').toggle();
        $('#overview-2').toggleClass('overview-feature-revealed');
        $('#plus-2').toggleClass('icon_close_alt2');
        $('#plus-2').toggleClass('info-toggled');
        $('#learn-text-2').toggle();
    });
    $('#learn-3').click(function(){
        $('#more-info-3').toggle();
        $('#overview-3').toggleClass('overview-feature-revealed');
        $('#plus-3').toggleClass('icon_close_alt2');
        $('#plus-3').toggleClass('info-toggled');
        $('#learn-text-3').toggle();
    });
});

$(window).load(function(){
    $('#loader').css('opacity', 0);
    setTimeout(function(){$('#loader').hide();}, 600);
});