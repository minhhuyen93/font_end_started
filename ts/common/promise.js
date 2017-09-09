System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PromiseFactory, Promise;
    return {
        setters: [],
        execute: function () {
            PromiseFactory = class PromiseFactory {
                static create() {
                    return new Promise();
                }
            };
            exports_1("PromiseFactory", PromiseFactory);
            Promise = class Promise {
                constructor() {
                    this.data = null;
                    this.onSuccessCallBack = null;
                    this.errors = null;
                    this.onErrorsCallBack = null;
                }
                then(callBack) {
                    this.onSuccessCallBack = callBack;
                    this.process.call(this);
                    return this;
                }
                resolve(data) {
                    this.data = data;
                    this.process.call(this);
                    return this;
                }
                error(callBack) {
                    this.onErrorsCallBack = callBack;
                    this.process.call(this);
                    return this;
                }
                reject(errors) {
                    this.errors = errors;
                    this.process.call(this);
                    return this;
                }
                process() {
                    if (this.onSuccessCallBack && this.data) {
                        this.onSuccessCallBack(this.data);
                    }
                    if (this.errors && this.onErrorsCallBack) {
                        this.onErrorsCallBack(this.errors);
                    }
                }
            };
        }
    };
});
