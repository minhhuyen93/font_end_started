System.register(["../promise"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function get(templateUrl) {
        var def = promise_1.PromiseFactory.create();
        window.jQuery.get(templateUrl)
            .then((data) => {
            def.resolve(data);
        })
            .catch((errors) => {
            def.reject(errors);
        });
        return def;
    }
    function append($selector, htmlContent) {
        window.jQuery($selector).append(htmlContent);
    }
    var promise_1, uiHelper;
    return {
        setters: [
            function (promise_1_1) {
                promise_1 = promise_1_1;
            }
        ],
        execute: function () {
            uiHelper = {
                get: get,
                append: append
            };
            exports_1("default", uiHelper);
        }
    };
});
