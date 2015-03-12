define(["./message_resource"], function(message_resource) {
    
        var theMessage = "Hello world: " + message_resource.message;
    
        var MyDao = function(){
            
            this.getData = function(){
                return theMessage;
            };
            
        };
    
    
        return new MyDao();
    }
);