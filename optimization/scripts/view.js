define(["jquery"], function($) {
    
        var MyView = function(){
            
            this.render = function(content){
                $("#hello_world").append("<span>" + content + "</span>");
            };
            
        };
    
    
        return new MyView();
    }
);