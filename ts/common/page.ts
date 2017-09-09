import uiHelper from "./helpers/uiHelper";

export class BasePage {
    private templateUrl: string = "";
    private renderTo: string = "";
    constructor(templateUrl) {
        this.templateUrl = templateUrl;
    }
    public render(renderTo: string = "body"): void {
        var self = this;
        self.renderTo = renderTo;
        uiHelper.get(self.templateUrl)
            .then((html) => {
                uiHelper.append(self.renderTo, html);
            })
            .catch((errors) => {
                console.log("please check your template url");
            });
    }
}
