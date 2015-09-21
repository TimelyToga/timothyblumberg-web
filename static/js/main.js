window.onload=function() {
    $("#personal_logo").fadeTo("slow",1);

    $('#personal_logo').click(function(e){
    $('#logo_wrapper').fadeOut('slow', function(){
        $('#bod_wrapper').fadeTo('slow', 1);
    });
});
}