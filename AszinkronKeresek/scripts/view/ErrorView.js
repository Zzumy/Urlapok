export class ErrorView {
    constructor(error, parent) {
        parent.html(error.message);
    }
}

