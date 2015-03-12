define(["jquery"], function($) {
    
        var log = function(message){
                $("#log")
                        .append("<span>" + message + "</span>")
                        .append("<br>");            
        };
        
        log("Init of LogView");
    
        var MyView = function(){
            log("Creation of LogView");
            
            this.render = function(message){
                log(message);
            };
            
        };
    
    
        return new MyView();
    }
);