/**
 * Created by Tim on 04/12/16.
 */
$(document).ready(function() {
    $('.timeline_content').click(function(){
        $('p', this).slideToggle();
    });
});