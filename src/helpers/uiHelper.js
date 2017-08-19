(function (global) {
    global.uiHelper = {
        append: append,
        get: get,
    }
    return;

    function get(templateUrl) {
        var def = new Promise();
        $.get(templateUrl, function(){
            def.resolve();
        });
        return def;
    }

    function append(selector, htmlContent) {
        $(selector).append(htmlContent);
    }
})(window);