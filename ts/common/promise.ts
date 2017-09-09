export class PromiseFactory {
    public static create() {
        return new Promise();
    }
}

class Promise {
    private data: any = null;
    private onSuccessCallBack: any = null;
    private errors: any = null;
    private onErrorsCallBack: any = null;
    public then(callBack): any {
        this.onSuccessCallBack = callBack;
        this.process.call(this);
        return this;
    }

    public resolve(data): any {
        this.data = data;
        this.process.call(this);
        return this;
    }

    public error(callBack): any {
        this.onErrorsCallBack = callBack;
        this.process.call(this);
        return this;
    }

    public reject(errors): any {
        this.errors = errors;
        this.process.call(this);
        return this;
    }

    private process(): any {
        if (this.onSuccessCallBack && this.data) {
            this.onSuccessCallBack(this.data);
        }
        if (this.errors && this.onErrorsCallBack) {
            this.onErrorsCallBack(this.errors);
        }
    }
}