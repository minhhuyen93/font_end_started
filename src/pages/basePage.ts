import uiHelper from "../common/uiHelper";
export class BasePage {
    private temPlateUrl: string = null;
    private renderTo: string = null;
    constructor(temPlateUrl: string) {
        this.temPlateUrl = temPlateUrl;
    }

    public render(renderTo: string = "body"): void {
        let self: any = this;
        self.renderTo = renderTo;
        uiHelper.get(self.temPlateUrl)
            .then((data) => {
                uiHelper.append(self.renderTo, data)
            }).catch((erorrs) => {
                console.log("please check your templateUrl file");
            });
    }
}