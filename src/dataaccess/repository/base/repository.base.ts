import mongoose = require("mongoose");
import IRead = require("./read");
import IWrite = require("./write");

class RepositoryBase<T extends mongoose.Document> implements IRead<T>, IWrite<T> {

  private schemaModel: mongoose.Model<mongoose.Document>;

  constructor(schemaModel: mongoose.Model<mongoose.Document>) {
    this.schemaModel = schemaModel;
  }

  public create(item: T, callback: (error: any, result: any) => void) {
    this.schemaModel.create(item, (error: Error, result: T) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, result);
      }
    });

  }

  public retrieve(field: any, callback: (error: any, result: any) => void) {
    this.schemaModel.find(field, (error: Error, result: T) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, result);
      }
    });
  }

  public retrieveById(useId: any, callback: (error: any, result: any) => void) {
    this.schemaModel.findById(useId, (error: Error, result: T) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, result);
      }
    });
  }

  public update(findQuery: any, newObject: any, options: any, callback: (error: any, result: any) => void) {
    this.schemaModel.findOneAndUpdate(findQuery, newObject, options, (error: Error, result: T) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, result);
      }
    });
  }

  public deleteById(query: any, callback: (error: any, result: any) => void) {
    this.schemaModel.findByIdAndDelete(query, (error: Error, result: T) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, result);
      }
    });
  }

}

export = RepositoryBase;
