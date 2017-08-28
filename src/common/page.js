function Page(templateUrl) {
    var self = this;
    self.renderTo = "";
    self.templateUrl = templateUrl;
    self.render = render;
    return self;

    function render(renderTo = "body") {
        var self = this;
        this.renderTo = renderTo;
        window.uiHelper.get(templateUrl)
            .then((html) => {
                window.uiHelper.append(self.renderTo, html);
            }).catch((errors) => {
                console.log("errorr here, please check your html file");
            });
    }
}