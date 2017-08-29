function PromiseFactory() {
}

PromiseFactory.create = function () {
    return new Promise();

    function Promise() {
        var self = this;
        self.data = null;
        self.onSuccessCallBack = null;
        self.then = then;
        self.resolve = resolve;
        self.errors = null;
        self.onErrorsCallBack = null;
        self.reject = reject;
        self.catch = error;

        function then(callBack) {
            this.onSuccessCallBack = callBack;
            process.call(this);
            return this;
        }

        function resolve(data) {
            this.data = data;
            process.call(this);
            return this;
        }

        function error(callBack) {
            this.onErrorsCallBack = callBack;
            process.call(this);
            return this;
        }

        function reject(errors) {
            this.errors = errors;
            process.call(this);
            return this;
        }

        function process() {
            if (this.onSuccessCallBack && this.data) {
                this.onSuccessCallBack(this.data);
            }
            if (this.errors && this.onErrorsCallBack) {
                this.onErrorsCallBack(this.errors);
            }
        }
    }
}