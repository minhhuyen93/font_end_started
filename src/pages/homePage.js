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
            <div class="multi-columns">
                <div class="column-30 pull-left">
                    <div class="brand">
                        <img class="logo" src="images/logo.png" />
                        <span class="text">Prechu</span>
                    </div>
                </div>
                <div class="column-70 pull-right">
                    <ul class="main-nav">
                        <li class="item">
                            <a href="#" class="title">Home</a>
                        </li>
                        <li class="item active">
                            <a href="#" class="title">Products</a>
                        </li>
                        <li class="item">
                            <a href="#" class="title">Services</a>
                        </li>
                        <li class="item">
                            <a href="#" class="title">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="slider">
                <button class="prev"> &#60; </button>
                <button class="next"> &#62; </button>
                <div class="content">
                    <div class="service-summary">
                        <img src="images/phone.png" alt="" class="iphone-photo">
                        <div class="content">
                            <span class="title">Lorem ipsum is simply</span>
                            <p class="desc">dummy text for the printing & typesetting</p>
                            <button class="btn-sign-up"><i class="icon"></i><span class="text">Sign up now</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <p class="copy-right">Copyright &copy; 2012-2013 cssauthor.com</p>
        </div>`;
    }
}