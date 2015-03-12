define(["greeting_dao", "log_service", "greeting_view"], function(GreetingDao, log_service, greeting_view) {
    
        //we can create different versions of greeting dao
        var svDao = new GreetingDao("sv");
        var enDao = new GreetingDao("en");
        log_service.log("Init of GreetingController");
    
        var GreetingController = function(){
            log_service.log("Creation of GreetingController");
            this.sayHello = function(){
                log_service.log(enDao.getMessage());
                greeting_view.render(svDao.getMessage());
                greeting_view.render(enDao.getMessage());
            };
        };
    
    
        return new GreetingController();
    }
);


