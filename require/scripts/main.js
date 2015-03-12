//the configuration for require
requirejs.config({
    "baseUrl": "scripts",//the root path to use for all module lookups
    "paths": {//path mappings for module names not found directly under baseUrl.
        'jquery': 'external/jquery',
        'greeting_dao': 'dao/greeting_dao'
    }
    
    /* Use shims to configure the dependencies, exports, and custom initialization for older, 
     * traditional "browser globals" scripts that do not use define() 
     * to declare the dependencies and set a module value.
    ,
    "shim": {
        'jqueryui': {
            deps: ['jquery']
        }
    }
    */
});

//Main application logic
//we need to import clock_controller, otherwise it will never start. 
require(['jquery','greeting_controller', "log_service", 'clock_controller'], function ( $, greeting_controller, log_service) {
    log_service.log("Main is starting");
    $(function() {
        log_service.log("Say hello");
        greeting_controller.sayHello();
        log_service.log("Sweet!");
    });
});