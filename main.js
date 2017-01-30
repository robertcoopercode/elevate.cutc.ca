var timer_days;
var timer_hours;
var timer_minutes;
var timer_seconds;
var LAUNCH_DATE = new Date(2017, 04, 13); //Year, month - 1, day

$(document).ready(function() {
    timer_days = $("#timer_days");
    timer_hours = $("#timer_hours");
    timer_minutes = $("#timer_minutes");
    timer_seconds = $("#timer_seconds");
    countdown();

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

function countdown() {
    var current_date = new Date();
    if (LAUNCH_DATE - current_date < 0) return;

    //Get difference in various formats
    var seconds = Math.floor((LAUNCH_DATE - current_date) / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = (Math.floor(hours / 24));
    //Convert differences into remainders
    hours = (hours % 24);
    minutes = (minutes % 60);
    seconds = (seconds % 60);

    var timeArray = [days, hours, minutes, seconds];
    //Ensure there is a leading zero on single digit numbers
    $.each(timeArray, function(index, time) {
        timeArray[index] = timeArray[index].toString();
        if (timeArray[index].length <= 2) {
            timeArray[index] = ("0" + time).slice(-2);
        }
    });

    timer_days.text(timeArray[0]);
    timer_hours.text(timeArray[1]);
    timer_minutes.text(timeArray[2]);
    timer_seconds.text(timeArray[3]);

    setTimeout(countdown, 1000);
}
