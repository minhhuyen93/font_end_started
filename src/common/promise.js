function PromiseFactory() { }

PromiseFactory.create = function () {
    return new Promise();

    function Promise() {
        this.data = null;
        this.errors = null;
        this.onErrorCallBack = null;
        this.onSuccessCallback = null;
        this.then = then;
        this.resolve = resolve;
        this.reject = reject;
        this.catch = error;

        function reject(errors) {
            this.errors = errors;
            processPromise.call(this);
            return this;
        }

        function error(errorCallBack) {
            this.onErrorCallBack = errorCallBack;
            processPromise.call(this);
            return this;
        }

        function then(callBack) {
            this.onSuccessCallback = callBack;
            processPromise.call(this);
            return this;
        }

        function resolve(data) {
            this.data = data;
            processPromise.call(this);
            return this;
        }

        function processPromise() {
            if (this.data && this.onSuccessCallback) {
                this.onSuccessCallback(this.data);
            }
            if (this.errors && this.onErrorCallBack) {
                this.onErrorCallBack(this.errors);
            }
        }
    }
}