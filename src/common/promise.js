function PromiseFactory() { }

PromiseFactory.create = function () {
    return new Promise();

    function Promise() {

        var self = this;
        self.data = null;
        self.errors = null;
        self.onErrorCallBack = null;
        self.catch = error;
        self.reject = reject;

        self.onSuccessCallBack = null;
        self.resolve = resolve;
        self.then = then;

        function resolve(data) {
            this.data = data;
            processPromise.call(this);
            return this;
        }

        function then(callBack) {
            this.onSuccessCallBack = callBack;
            processPromise.call(this);
            return this;
        }

        function error(errorCallBack) {
            this.onErrorCallBack = errorCallBack;
            processPromise.call(this);
            return this;
        }

        function reject(errors) {
            this.errors = errors;
            processPromise.call(this);
            return this;
        }

        function processPromise() {
            if (this.data && this.onSuccessCallBack) {
                this.onSuccessCallBack(this.data);
            }
            if (this.errors && this.onErrorCallBack) {
                this.onErrorCallBack(this.errors);
            }
        }
    }
}