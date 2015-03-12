define(["jquery", "log_service"], function($, log_service) {
    
        log_service.log("Init of GreetingView");
    
        //We can return ordinary javascript objects.
        return {
            render: function(content){
                $("#greeting")
                        .append("<span>" + content + "</span>")
                        .append("<br>");
            }
        };
    }
);


