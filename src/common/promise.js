function PromiseFactory() {
}

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
            if (!this.onErrorCallBack) { return this; }
            this.errors = errors;
            this.onErrorCallBack(this.errors);
            return this;
        }

        function error(errorCallBack) {
            this.onErrorCallBack = errorCallBack;
            if (!this.errors) { return this; }

            this.onErrorCallBack(this.errors);
            return this;
        }

        function then(callBack) {
            this.onSuccessCallback = callBack;
            if (!this.data) {
                return this;
            }

            this.onSuccessCallback(this.data);
            return this;
        }

        function resolve(data) {
            if (!this.onSuccessCallback) {
                return this;
            }
            this.data = data;

            this.onSuccessCallback(this.data);
            return this;
        }
    }
}