System.register(["./helpers/uiHelper"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var uiHelper_1, BasePage;
    return {
        setters: [
            function (uiHelper_1_1) {
                uiHelper_1 = uiHelper_1_1;
            }
        ],
        execute: function () {
            BasePage = class BasePage {
                constructor(templateUrl) {
                    this.templateUrl = "";
                    this.renderTo = "";
                    this.templateUrl = templateUrl;
                }
                render(renderTo = "body") {
                    var self = this;
                    self.renderTo = renderTo;
                    uiHelper_1.default.get(self.templateUrl)
                        .then((html) => {
                        uiHelper_1.default.append(self.renderTo, html);
                    })
                        .catch((errors) => {
                        console.log("please check your template url");
                    });
                }
            };
            exports_1("BasePage", BasePage);
        }
    };
});
