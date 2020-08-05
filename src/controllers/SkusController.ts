import * as express from "express";
import SkusService = require("../services/SkusService");

class SkusController {
    private localSkusService: SkusService;
    constructor() {
        this.localSkusService = new SkusService();
    }

    public createSkus(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const skus = req.body;
            const skusService = new SkusService();
            skusService.createSkusData(skus, (error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log("Exception in creating Skus Data : ", e);
        }
    }

    public getSkusById(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const skusService = new SkusService();
            const skusId = req.params.id;
            skusService.getSkusById(skusId, (error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log("Exception in getting all Skus Data . ", e);
        }
    }

    public getAllSkuss(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const skusService = new SkusService();
            skusService.getAllSkusData((error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log("Exception in getting all Skus Data . ", e);
        }
    }

    public updateSkus(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const skusId = req.params.id;
            const updateBody = req.body;
            const skusService = new SkusService();
            skusService.updateSkusData(skusId, updateBody, (error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log("Exception in updating Skus Data : ", e);
        }
    }

    public deleteSkusById(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const skusId = req.params.id;
            const skusService = new SkusService();
            skusService.deleteSkusById(skusId, (error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log("Exception in deleting Skus by Id : ", e);
        }
    }
}

export = SkusController;
