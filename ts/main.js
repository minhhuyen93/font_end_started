System.register(["./pages/homePage"], function(exports_1) {
    var homePage_1;
    var homePage;
    return {
        setters:[
            function (_homePage_1) {
                homePage_1 = _homePage_1;
            }],
        execute: function() {
            homePage = new homePage_1.HomePage();
            homePage.render();
        }
    }
});
