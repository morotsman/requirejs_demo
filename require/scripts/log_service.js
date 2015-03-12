define(["log_view", "time_service", "util"], function(log_view, time_service, util) {
    
        //Do init stuff here. Init will only be called a single time even if the module is used by many clients.
        log_view.render(util.toReadableDate(time_service.time()) + ": " + "Init of log service.");
    
        var LogService = function(){
            log_view.render(util.toReadableDate(time_service.time()) + ": " + "Creation of log service.");
            
            this.log = function(message){
                log_view.render(util.toReadableDate(time_service.time()) + ": " + message);
            };
            
          
        };
    
        //There can be only one...
        return new LogService();
    }
);