function HomePage() {
    var self = this;
    self.renderTo = "";
    self.render = render;
    return self;

    function render(renderTo = "body") {
        var self = this;
        this.renderTo = renderTo;
        var templateUrl = "src/pages/homepage1.html";

        window.uiHelper.get(templateUrl)
            .then((html) => {
                window.uiHelper.append(self.renderTo, html);
            })
            .catch(function (error) {
                console.log("huyen add error");
            });
    }
}