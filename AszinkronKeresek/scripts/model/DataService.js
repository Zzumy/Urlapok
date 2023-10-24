export class DataService {
    constructor() {}

    getData(endpoint, callback, errorCallback) {
        axios
            .get(endpoint)
            .then(function (response) {
                console.log("response", response);
                console.log("data", response.data);
                console.log("names", response.data.names);
                console.log("status", response.request.status);
                console.log("text", response.request.statusText);
                callback(response.data.names);
            })
            .catch(function (error) {
                errorCallback(error);
            })
            .finally(function () {});
    }
}
