$(document).ready(function() {
    //Disabled ticket button click scrolls to email block
    $("#ticket_button.button_disabled").on("click", function(e) {
        e.preventDefault();

        $("html, body").animate({
            scrollTop: $("#email_block").offset().top
        }, 1000);
    });

    //Updates all current years
    $(".current_year").text(new Date().getFullYear());
});