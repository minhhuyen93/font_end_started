System.register(["../common/page"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var page_1, HomePage;
    return {
        setters: [
            function (page_1_1) {
                page_1 = page_1_1;
            }
        ],
        execute: function () {
            HomePage = class HomePage extends page_1.BasePage {
                constructor() {
                    super("src/pages/homePage.html");
                }
            };
            exports_1("HomePage", HomePage);
        }
    };
});
