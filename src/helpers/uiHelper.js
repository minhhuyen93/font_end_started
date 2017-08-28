(function (global) {
    global.uiHelper = {
        append: append,
        get: get,
    }
    return;

    function get(templateUrl) {
        var def = PromiseFactory.create();
        $.get(templateUrl)
            .then((html) => {
                def.resolve(html);
            }).catch((errors) => {
                def.reject(errors);
            });
        return def;
    }

    function append(selector, htmlContent) {
        $(selector).append(htmlContent);
    }
})(window);