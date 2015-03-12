/*
 * The clock controller has two depndencies: time_service and clock_view.
 * 
 * Require injects the modules.
 */
define(["time_service", "clock_view", "log_service"], function(time_service, clock_view, log_service) {
    
    log_service.log("Init of clock controller.");
    
    //update view every second
    setInterval(function(){ 
        clock_view.renderClock(time_service.time());
    }, 1000);
    
    clock_view.renderClock(time_service.time());
   
    
});


