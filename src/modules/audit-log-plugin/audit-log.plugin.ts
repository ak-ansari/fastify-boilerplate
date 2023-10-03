import mongoose, {
  PreSaveMiddlewareFunction,
  PostMiddlewareFunction,
  CallbackWithoutResultAndOptionalError,
  Document
} from "mongoose";
import Audit from "./static/audit.model";
import { IAuditLog, IChangeLog } from "../../interface";
import { AuditLogPluginHelper } from "./static/helper";

export class AuditLogPlugin {
  private static _instance: AuditLogPlugin;
  public static get Instance(): AuditLogPlugin {
    return this._instance ? this._instance : (this._instance = new this());
  }
  /** ################################  Method to log details for new document  ##################################### */
  /**
   * Method to log details for new document 
   * 
   * @access public
   * @since 2.9.1
   * @author Abdul Karim Ansari
   * @memberof AuditLogPlugin
   * @returns {PreSaveMiddlewareFunction}
   */
  
  
  public logChangesSaveDoc(): PreSaveMiddlewareFunction {
    return function (next) {
      const collectionName = this.constructor.collection.name;
      // get user info from request context variable saved earlier in common middleware 
      const userInfo = (global as any).requestContext?.userInfo;
      const log = new Audit({
        userId: userInfo._id,
        userName: userInfo.userName,
        docId: this._doc._id,
        action: "save",
        collectionName, // name of current collection
        details: this._doc,
      });

      log.save();

      return next();
    };
  }


  /**
   * Method to log details on insertion of many documents in one go 
   * 
   * @access public
   * @since 2.9.1
   * @author Abdul Karim Ansari
   * @memberof AuditLogPlugin
   * @returns {PostMiddlewareFunction}
   */
  public logChangesForInsertMany(): PostMiddlewareFunction {
    return async function (docs: any, next) {
      const collectionName= this.collection.collectionName;
      const userInfo = (global as any).requestContext?.userInfo;
      const auditArr = []
      for (const doc of docs) {
        const log = {
          userId: userInfo._id,
          userName: userInfo.userName,
          docId: doc._id,
          action: "save",
          collectionName,
          details: doc,
        };

        auditArr.push(log)
      }
      await Audit.insertMany(auditArr)
      return next();
    };
  }
  /** ################################  Method to log details for old document  ##################################### */
  public logChangesForUpdateSingleDoc(): PostMiddlewareFunction {
    return async function (
      this: any,
      doc: any,
      next: CallbackWithoutResultAndOptionalError
    ) {
      const originalDoc = this._oldDoc._doc;
      const newDoc = this.op === "updateOne" ? (await this.model.findOne({_id:originalDoc._id}))._doc : doc._doc;
      if(!newDoc) {
        return next()
      }
      const collectionName: string = this._collection.collectionName;
      const userInfo = (global as any).requestContext?.userInfo;
      const isNew = this.options.new;
      let changes: Record<string, IChangeLog> = {};
      if (isNew) {
        for (const key in newDoc) {
          if(AuditLogPluginHelper.skipKeys.includes(key)){
            continue;
          }
          else if (
            AuditLogPluginHelper.detectChanges(
              originalDoc[key],
              newDoc[key]
            )
          )
            changes[key] = {
              oldValue: originalDoc[key],
              newValue: newDoc[key],
            };
        }
      } else {
        changes = AuditLogPluginHelper.getUpdatedDoc(
          originalDoc,
          this.getUpdate()
        );
      }

      const log = new Audit({
        userId: userInfo._id,
        userName: userInfo.userName,
        docId: doc._id,
        action: "update",
        collectionName, 
        details: changes,
      });

      log.save();
      next();
      return;
    };
  }

  /**
   * Method to log details on update of may documents
   * 
   * @access public
   * @since 2.9.1
   * @author Abdul Karim Ansari
   * @memberof AuditLogPlugin
   * @returns {PostMiddlewareFunction}
   */
  public logChangesForUpdateMany(): PostMiddlewareFunction {
    return async function (
      this: any,
      doc: any,
      next: CallbackWithoutResultAndOptionalError
    ) {
      const originalDocs = this._oldDocs;
      const ids = originalDocs.map((doc: Document)=> doc._id)
      const newDocs = await this.model.find({_id:{$in: ids}});
      const collectionName: string = this._collection.collectionName;
      const userInfo = (global as any).requestContext?.userInfo;
      const AuditArr: IAuditLog[] = [];

      for (let i = 0; i < newDocs.length; i++) {
        let changes: Record<string, IChangeLog> = {};
        const newDoc = newDocs[i]._doc;

        for (const key in newDoc) {
          if(AuditLogPluginHelper.skipKeys.includes(key)){
            continue;
          }
          if (
            AuditLogPluginHelper.detectChanges(
              originalDocs[i]._doc[key],
              newDoc[key]
            )
          )
            changes[key] = {
              oldValue: originalDocs[i][key],
              newValue: newDoc[key],
            };
        }
        const log = {
          userId: userInfo._id, 
          userName: userInfo.userName,
          docId: newDoc._id,
          action: "update",
          collectionName,
          details: changes,
        };
        AuditArr.push(log as any);
      }
      await Audit.insertMany(AuditArr);
      return next();
    };
  }

  /** ################################  Method to log details on delete of any document  ##################################### */
  /**
   *  Method to log details on delete of any document
   * 
   * @access public
   * @since 2.9.1
   * @author Abdul Karim Ansari
   * @memberof AuditLogPlugin
   * @returns {PreSaveMiddlewareFunction}
   */
  public logDocumentDeletion(): PreSaveMiddlewareFunction {
    return async function (this: any, next: () => void) {
      const collectionName = this._collection.collectionName;

      try {
        const userInfo = (global as any).requestContext?.userInfo;
        const originalDoc = await this.model.findOne(this.getFilter());

        const log = new Audit({
          userId: userInfo._id,
          userName: userInfo.userName,
          docId: originalDoc._id,
          action: "delete",
          collectionName,
          details: originalDoc,
        });

        await log.save();
      } catch (error) {
        console.error(error);
      }

      next();
    };
  }
  /**
   *  get original form of document and set that as _oldDoc in schema for further use
   * 
   * @access public
   * @since 2.9.1
   * @author Abdul Karim Ansari
   * @memberof AuditLogPlugin
   * @returns {PreSaveMiddlewareFunction}
   */
  setOldDoc(): PreSaveMiddlewareFunction {
    return async function (next): Promise<any> {
      try {
        this._oldDoc = await this.model.findOne(this.getQuery());
        return next();
      } catch (error) {
        return next();
      }
    };
  }
  /**
   *  get original form of documents and set that as _oldDocs in schema for further use
   * 
   * @access public
   * @since 2.9.1
   * @author Abdul Karim Ansari
   * @memberof AuditLogPlugin
   * @returns {PreSaveMiddlewareFunction}
   */
  setOldDocsMany(): PreSaveMiddlewareFunction {
    return async function (next): Promise<any> {
      try {
        this._oldDocs = await this.model.find(this.getQuery());
        return next();
      } catch (error) {
        return next();
      }
    };
  }
}
