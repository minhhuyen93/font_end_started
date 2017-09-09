function PromiseFactory() {
}

PromiseFactory.create = function () {
    return new Promise();

    function Promise() {
        var self = this;
        self.data = null;
        self.onSuccesscallback = null;
        self.then = then;
        self.resolve = resolve;
        self.errors = null;
        self.onErrorscallback = null;
        self.reject = reject;
        self.catch = error;

        function then(callback) {
            this.onSuccesscallback = callback;
            process.call(this);
            return this;
        }

        function resolve(data) {
            this.data = data;
            process.call(this);
            return this;
        }

        function error(callback) {
            this.onErrorscallback = callback;
            process.call(this);
            return this;
        }

        function reject(errors) {
            this.errors = errors;
            process.call(this);
            return this;
        }

        function process() {
            if (this.onSuccesscallback && this.data) {
                this.onSuccesscallback(this.data);
            }
            if (this.errors && this.onErrorscallback) {
                this.onErrorscallback(this.errors);
            }
        }
    }
}