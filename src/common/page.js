function Page(templateUrl) {
    this.renderTo = "";
    this.templateUrl = templateUrl;
    this.render = render;

    function render(renderTo = "body") {
        var self = this;
        self.renderTo = renderTo;

        window.uiHelper.get(self.templateUrl)
            .then((html) => {
                window.uiHelper.append(self.renderTo, html);
            })
            .catch(function (error) {
                console.log("huyen add error");
            });
    }
}