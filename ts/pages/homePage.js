System.register([], function(exports_1) {
    var HomePage;
    return {
        setters:[],
        execute: function() {
            HomePage = (function () {
                function HomePage() {
                }
                HomePage.prototype.render = function () {
                    console.log("huyen typescript update");
                };
                return HomePage;
            })();
            exports_1("HomePage", HomePage);
        }
    }
});
