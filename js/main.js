$(document).ready(function(){    
    $('.field .wpcf7-list-item input[checked="checked"]').closest('.field .wpcf7-list-item').addClass('active');

    $('.field .wpcf7-list-item').click(function(){
        $(this).parent().find('.wpcf7-list-item').removeClass('active');
        $(this).addClass('active');
        $(this).parent().addClass('changed');
    });
    
    var slideNow = 1;   
    var slideCount = console.log($('#slidewrapper .slide').length);
    var navBtnId = 0;
    
    $('.smooth').click(function() {   
            navBtnId = $(this).index();
                $('#slidewrapper').css(
                    'margin-left','-'+navBtnId+'00%'); 
    });
});