(function (global) {
    global.uiHelper = {
        append: append,
        get: get
    }
    return;
    function append(selector, htmlContent) {
        $(selector).append(htmlContent);
    }

    function get(url){
        return $.get(url);
    }
})(window);