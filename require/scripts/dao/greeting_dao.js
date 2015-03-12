/**
 * One can include scripts from different folders, the base path is defined in main.js.
 */
define(["dao/message_resource", "log_service"], function(message_resource, log_service) {
    
        //Do init stuff here. Init will only be called a single time even if the module is used by many clients.
        log_service.log("Init of GreetingDao");
    
        var GreetingDao = function(language){
            log_service.log("Creation of GreetingDao");
            this.getMessage = function(){
                return message_resource[language].message;
            };
                      
            
        };
        
        //We return a reference to GreetingDao, makes it possible for the client to create different versions.
        return GreetingDao;
    }
);