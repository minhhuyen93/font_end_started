(function (global) {
    global.uiHelper = {
        append: append,
        get: get,
    }
    return;

    function get(templateUrl) {
        var def = PromiseFactory.create();
        $.get(templateUrl, function (html) {
            def.resolve(html);
        });
        return def;
    }

    function append(selector, html) {
        $(selector).append(html);
    }

})(window);