import { DataService } from "../model/DataService.js";
import { DataView } from "../view/DataView.js";
import { ErrorView } from "../view/ErrorView.js";

export class DataController {
    constructor() {
        console.log("sdGFWDGFHasdf");
        this.dataService = new DataService();
        this.dataService.getData("../scripts/data.json", this.show, this.showError);
    }

    show(list) {
        console.log("controller", list);
        new DataView(list, $(".list"));
    }

    showError(error) {
        console.log(error);
        new ErrorView(error, $(".list"));
    }
}
