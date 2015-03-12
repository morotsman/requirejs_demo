requirejs.config({
    "baseUrl": "scripts",
    "paths": {
        'jquery': 'external/jquery'
    }
});


require(["./controller", "jquery"], function (controller, $) {
    $(function() {
        controller.contentUpdated();
    });
});