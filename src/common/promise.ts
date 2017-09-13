export class PromiseFactory {
    public static create(): any {
        return new Promise();
    }
}

class Promise {
    private data: any = null;
    private onSuccesscallback: any = null;
    private errors: any = null;
    private onErrorcallback: any = null;

    public then(callback: any): any {
        this.onSuccesscallback = callback;
        this.process.call(this);
        return this;
    }
    public resolve(data: any): any {
        this.data = data;
        this.process.call(this);
        return this;
    }
    public catch(errorcallback: any): any {
        this.onErrorcallback = errorcallback;
        this.process.call(this);
        return this;
    }

    public reject(errors: any): any {
        this.errors = errors;
        this.process.call(this);
        return this;
    }
    private process():any{
        if(this.onSuccesscallback && this.data){
            this.onSuccesscallback(this.data);
        }
        if(this.onErrorcallback && this.errors){
            this.onErrorcallback(this.errors);
        }
    }
}