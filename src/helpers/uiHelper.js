(function (global) {
    global.uiHelper = {
        append: append
    }
    return;
    function append(selector, htmlContent) {
        $(selector).append(htmlContent);
    }
})(window);