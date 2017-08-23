function HomePage() {
    var self = this;
    self.renderTo = "";
    self.templateUrl = "src/pages/homePage.html";
    self.render = render;

    function render(renderTo = "body") {
        self.renderTo = renderTo;
        window.uiHelper.get(self.templateUrl).then((html) => {
            window.uiHelper.append(self.renderTo, html);
        });
    }
}