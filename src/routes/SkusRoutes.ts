import express = require("express");
import SkusController = require("../controllers/SkusController");
const router = express.Router();

class SkusRoutes {

    private skusController: SkusController;

    constructor() {
        this.skusController = new SkusController();
    }

    get routes(): express.Router {
        router.post("/", this.skusController.createSkus);
        router.get("/", this.skusController.getAllSkuss);
        router.get("/:id", this.skusController.getSkusById);
        router.put("/:id", this.skusController.updateSkus);
        router.delete("/:id", this.skusController.deleteSkusById);
        return router;
    }
}

Object.seal(SkusRoutes);
export = SkusRoutes ;
