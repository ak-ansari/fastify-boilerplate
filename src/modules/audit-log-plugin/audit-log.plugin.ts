import mongoose, {
  PreSaveMiddlewareFunction,
  PostMiddlewareFunction,
  CallbackWithoutResultAndOptionalError,
} from "mongoose";
import Audit from "./static/audit.model";
import { IChangeLog } from "../../interface";
import { AuditLogPluginHelper } from "./static/helper";

export class AuditLogPlugin {
  private static _instance: AuditLogPlugin;
  private _userInfo: any;
  public static get Instance(): AuditLogPlugin{
    return this._instance ? this._instance : (this._instance = new this()) 
  }
  /** ################################  Method to log details for new document  ##################################### */
  public logChangesForNewDoc(): PreSaveMiddlewareFunction {
    return function (next) {
      let collectionName: string; // Get the collection name dynamically
      collectionName = this.constructor.collection.name;
      const userInfo = (global as any).requestContext?.userInfo
      const log = new Audit({
        userId: userInfo._id, // Replace with the actual user ID
        docId: this._doc._id,
        action: "save",
        collectionName, // Add collectionName to the audit log
        details: this._doc,
      });

      log.save();

      return next();
    };
  }

  /** ################################  Method to log details for old document  ##################################### */
  public logChangesForOldDoc(): PostMiddlewareFunction {
    return async function (
      this: any,
      doc: any,
      next: CallbackWithoutResultAndOptionalError
    ) {
      let collectionName: string; // Get the collection name dynamically
      collectionName = this._collection.collectionName;
      const userInfo = (global as any).requestContext?.userInfo
      // const originalDoc = await this.model.findOne(this.getQuery());
      const originalDoc = !doc.isNew ? doc : this;
      let changes: Record<string, IChangeLog> = {};
      // const ignoreRegex = new RegExp("^$");
      if (doc.isNew) {
        for (const key in doc) {
          if (AuditLogPluginHelper.detectChanges(originalDoc[key], doc[key]))
            changes[key] = {
              oldValue: originalDoc[key],
              newValue: doc[key],
            };
        }
      } else {
        changes = AuditLogPluginHelper.getUpdatedDoc(
          originalDoc._doc,
          this.getUpdate()
        );
      }

      const log = new Audit({
        userId: userInfo._id, // Replace with the actual user ID
        docId: doc._id,
        action: "update",
        collectionName, // Add collectionName to the audit log
        details: changes,
      });

      log.save();
      next();
      return;
    };
  }

  /** ################################  Method to log details on delete of any document  ##################################### */
  public logDocumentDeletion(): PreSaveMiddlewareFunction {
    return async function (this: any, next: () => void) {
      const collectionName = this._collection.collectionName;

      try {
        const userInfo = (global as any).requestContext?.userInfo
        const originalDoc = await this.model.findOne(this.getFilter());

        const log = new Audit({
          userId: userInfo._id, // Replace with the actual user ID
          docId: originalDoc._id,
          action: "delete",
          collectionName, // Add collectionName to the audit log
          details: originalDoc,
        });

        await log.save();
      } catch (error) {
        console.error(error);
      }

      next();
    };
  }
}
