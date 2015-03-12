requirejs.config({
    "baseUrl": "scripts",
    "paths": {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min'
    }
});


require(["controller", "jquery"], function (controller, $) {
    $(function() {
        controller.contentUpdated(); 
    });
});