function HomePage() {
    var self = this;
    self.renderTo = "";
    self.getHtmlContent = getHtmlContent;
    self.render = render;

    function render(renderTo = "body") {
        self.renderTo = renderTo;
        var html = self.getHtmlContent();
        window.uiHelper.append(self.renderTo, html);
    }

    function getHtmlContent() {
        return `<div class="page">
        <div class="header">
        </div>
        <div class="content">
        </div>
        <div class="footer">
        </div>`;
    }
}