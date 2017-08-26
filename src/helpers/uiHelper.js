(function (global) {
    global.uiHelper = {
        append: append,
        get: get,
    }
    return;

    function get(templateUrl) {
        var def = PromiseFactory.create();
        $.get(templateUrl)
            .then(function () {
                def.resolve(html);
            })
            .catch(function (errors) {
                def.reject(errors);
            });
        return def;
    }

    function append(selector, html) {
        $(selector).append(html);
    }

})(window);