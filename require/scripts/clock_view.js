define(["jquery", "log_service", "util"], function ($, log_service, util) {
    log_service.log("Init of clock view.");

    var ClockView = function () {

        log_service.log("Creation of clock view.");


        //this function is public.
        this.renderClock = function (time) {
            $("#clock").empty();
            $("#clock").append("<span>" + util.padWithZero(time.getHours()) + ":" + util.padWithZero(time.getMinutes()) + ":" + util.padWithZero(time.getSeconds()) + "</span>");
        };

    };

    //The clock view is a singleton
    return new ClockView();

});


