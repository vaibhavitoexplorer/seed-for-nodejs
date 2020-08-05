import * as mongoose from "mongoose";
import skusModel = require("./../models/user");

interface IUser extends skusModel, mongoose.Document {
    _id: string;
}
export = IUser;
