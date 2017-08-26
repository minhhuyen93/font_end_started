function PromiseFactory() {
}

PromiseFactory.create = function () {
    return new Promise();

    function Promise() {
        this.data = null;
        this.onSuccessCallback = null;
        this.then = then;
        this.resolve = resolve;

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