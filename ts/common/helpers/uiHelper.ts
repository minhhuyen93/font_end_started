import { PromiseFactory } from "../promise";
let uiHelper = {
    get: get,
    append: append
}
export default uiHelper;

function get(templateUrl): any {
    var def = PromiseFactory.create();
    window.jQuery.get(templateUrl)
        .then((data) => {
            def.resolve(data);
        })
        .catch((errors) => {
            def.reject(errors);
        });
    return def;
}

function append($selector, htmlContent): any {
    window.jQuery($selector).append(htmlContent);
    console.log("huyen dep trai");
}
