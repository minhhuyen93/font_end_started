function Page(templateUrl) {
    var self = this;
    self.renderTo = "";
    self.render = render;
    self.templateUrl = templateUrl;
    return self;

    function render(renderTo = "body") {
        var self = this;
        this.renderTo = renderTo;
        var html = window.uiHelper.get(self.templateUrl)
            .then((html) => {
                window.uiHelper.append(self.renderTo, html);
            })
            .catch((errors) => {
                console.log("please check your template url");
            });
    }
}