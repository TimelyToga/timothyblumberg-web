/**
 * Created by Tim on 04/12/16.
 */
$(window).load(function() {
    var line = $('#timeline_line');
    $('.timeline_content').click(function(){
        var p = jQuery(this).children('.timeline_entry_description');
        var thisthis = this;

        p.slideToggle(function(){
            // Increase line height
            var newHeight = 0;
            // alert(p.css("display"))
            if(p.css("display") == "none"){
                newHeight = line.outerHeight() - $('.timeline_entry_description', thisthis).outerHeight();
            } else {
                newHeight = line.outerHeight() + $('.timeline_entry_description', thisthis).outerHeight();
            }

            line.animate({height: newHeight}, function(){
            });
        })
    });
});