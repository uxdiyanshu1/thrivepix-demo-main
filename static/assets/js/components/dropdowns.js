$(document).ready(function() {
    $('.control_dropdown').click(function() {
        var dropdown = $(this).find('.colony_dropdown');
        var left = ($(this).width())/2 + 'px';
        dropdown.css('left', left);
        $('.colony_dropdown').not(dropdown).hide();
        $('.control_dropdown').not(this).removeClass('active');
        $(this).toggleClass('active');
        dropdown.toggle();
    });
});