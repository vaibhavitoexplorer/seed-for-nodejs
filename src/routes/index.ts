import * as express from "express";
import SkusRoutes = require("./SKUSRoutes");

const app = express();

class BaseRoutes {
    get routes() {
        app.use("/api/skus/", new SkusRoutes().routes);
        return app;
    }
}
export = BaseRoutes;
