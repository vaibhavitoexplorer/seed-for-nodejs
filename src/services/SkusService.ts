import SkuAPI = require("openapi-typescript-node-sku1");

class SkusService {

    private SkuAPICaller: any;

    constructor() {
        this.SkuAPICaller = new SkuAPI.SKUsApi("https://api.digitalriver.com");
        this.SkuAPICaller.accessToken = "sk_test_feb83acdb4b042b48817a5da657ee137";
        this.SkuAPICaller.setApiKey("apiKey", "sk_test_feb83acdb4b042b48817a5da657ee137");
    }

    public createSkusData(skus: any, callback: (error: any, response: any) => void) {
        this.SkuAPICaller.create(skus)
            .then((res) => {
                callback(null, res);
            }).catch((err) => {
                callback(null, err);
            });
    }

    public getSkusById(skusId: any, callback: (error: any, response: any) => void) {
        this.SkuAPICaller.retrieve(skusId)
            .then((res) => {
                callback(null, res);
            }).catch((err) => {
                callback(null, err);
            });
    }

    public getAllSkusData(callback: (error: any, response: any) => void) {
        this.SkuAPICaller.list()
            .then((res) => {
                callback(null, res);
            }).catch((err) => {
                callback(null, err);
            });
    }

    public updateSkusData(skusId: any, updatedSkus: any, callback: (error: any, response: any) => void) {
        this.SkuAPICaller.retrieve(skusId, updatedSkus)
            .then((res) => {
                callback(null, res);
            }).catch((err) => {
                callback(null, err);
            });
    }

    public deleteSkusById(skusId: any, callback: (error: any, response: any) => void) {
        this.SkuAPICaller._delete(skusId)
            .then((res) => {
                callback(null, res);
            }).catch((err) => {
                callback(null, err);
            });
    }
}

Object.seal(SkusService);
export = SkusService;
