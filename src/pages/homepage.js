function HomePage() {
    var self = this;
    self.renderTo = "";
    self.render = render;
    return self;

    function render(renderTo = "body") {
        var self = this;
        this.renderTo = renderTo;
        var templateUrl = "src/pages/homepage.html";
        var html = window.uiHelper.get(templateUrl).then((html) => {
            window.uiHelper.append(self.renderTo, html);
        });
    }
}