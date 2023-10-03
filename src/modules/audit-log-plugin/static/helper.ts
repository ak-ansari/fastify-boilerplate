import { cloneDeep } from "lodash";
import { IChangeLog } from "../../../interface";
import moment from "moment";
export class AuditLogPluginHelper {
  /** ################################  resolve . separated path  ##################################### */
  /**
   * Resolves the path if path is provided in . separated string
   * 
   * @access public
   * @since 2.9.1
   * @author Abdul Karim Ansari
   * @memberof AuditLogPluginHelper
   * @param {string} path
   * @param {any} originalDoc
   * @param {any} newVal
   * @param {string} operator
   * @returns { Object<newValue: any; path: string> }
   */
  public static resolvePath(
    path: string,
    originalDoc: any,
    newVal: any,
    operator: string
  ): { newValue: any; path: string } {
    const keys = path.split(".");
    const firstKey = keys[0];
    const clone = cloneDeep(originalDoc);
    function helper(keys: string[], doc: any, val: any): any {
      const currentKey = keys.shift() as string;
      if (keys.length === 0) {
        return AuditLogPluginHelper.getNewValByOperator(
          operator,
          newVal,
          doc,
          currentKey
        );
      }
      return { [currentKey]: helper(keys, doc[currentKey], newVal) };
    }
    const newValue = helper(keys, clone, newVal);
    return { newValue: newValue[firstKey], path: firstKey };
  }

  /** ################################  get new value by operator applied  ##################################### */
  /**
   * get new value by operator applied 
   * 
   * @access public
   * @since 2.9.1
   * @author Abdul Karim Ansari
   * @memberof AuditLogPluginHelper
   * @returns {PostMiddlewareFunction}
   */
  public static getNewValByOperator(
    operator: string,
    newVal: any,
    originalDocument: any,
    field: string
  ) {
    switch (operator) {
      case "$set":
        originalDocument[field] = newVal;
        break;
      case "$unset":
        delete originalDocument[field];
        break;
      case "$inc":
        if (typeof originalDocument[field] === "number") {
          originalDocument[field] += newVal;
        }
        break;
      case "$mul":
        if (typeof originalDocument[field] === "number") {
          originalDocument[field] *= newVal;
        }
        break;
      case "$push":
        if (Array.isArray(originalDocument[field])) {
          originalDocument[field].push(newVal);
        }
        break;
      case "$pop":
        if (Array.isArray(originalDocument[field])) {
          if (newVal === 1) {
            originalDocument[field].pop();
          } else if (newVal === -1) {
            originalDocument[field].shift();
          }
        }
        break;
      case "$addToSet":
        if (Array.isArray(originalDocument[field])) {
          if (originalDocument[field].indexOf(newVal) === -1) {
            originalDocument[field].push(newVal);
          }
        }
        break;
      case "$pull":
        if (Array.isArray(originalDocument[field])) {
          originalDocument[field] = originalDocument[field].filter(
            (item: any) => item !== newVal
          );
        }
        break;

      case "$rename":
        if (originalDocument.hasOwnProperty(field)) {
          originalDocument[newVal] = originalDocument[field];
        }
        break;
      default:
        break;
      // Add more cases for other operators as needed
    }
    return originalDocument;
  }
  /** ################################  to get a single object of nested values  ##################################### */
  /**
   * to get a single object of nested values
   * 
   * @access public
   * @since 2.9.1
   * @author Abdul Karim Ansari
   * @memberof AuditLogPluginHelper
   * @param {Record<string, any>} obj
   * @returns {Record<string, any>}
   */
  public static flatten(obj: Record<string, any>): Record<string, any> {
    let newObj: Record<string, any> = { ...obj };
    for (const key in obj) {
      if (key.startsWith("$")) {
        newObj = { ...newObj, ...obj[key] };
        delete newObj[key];
      }
    }
    delete newObj._id;
    return newObj;
  }

  /** ################################  get updated document  ##################################### */
  /**
   * get updated document 
   * 
   * @access public
   * @since 2.9.1
   * @author Abdul Karim Ansari
   * @memberof AuditLogPluginHelper
   * @param {Record<string, any>} originalDocument
   * @param {Record<string, any>} update
   * @returns {Record<string, any>}
   */
  public static getUpdatedDoc(
    originalDocument: Record<string, any>,
    update: Record<string, any>
  ): Record<string, any> {
    const changes: Record<string, IChangeLog> = {};
    try {
      const resolvePath = AuditLogPluginHelper.resolvePath;
      const getChangeLog = AuditLogPluginHelper.getChangeLog;
      for (const key in update) {
        if (update.hasOwnProperty(key)) {
          const value = update[key];
          switch (key) {
            case "$set":
              for (const field in value) {
                if (field.includes(".")) {
                  const { path, newValue } = resolvePath(
                    field,
                    originalDocument,
                    value[field],
                    key
                  );
                  changes[path] = getChangeLog(
                    newValue,
                    originalDocument[path],
                    key,
                    field
                  );
                } else {
                  changes[field] = getChangeLog(
                    value[field],
                    originalDocument[field]
                  );
                }
              }
              break;
            case "$unset":
              for (const field in value) {
                if (field.includes(".")) {
                  const { path, newValue } = resolvePath(
                    field,
                    originalDocument,
                    value[field],
                    key
                  );
                  changes[path] = getChangeLog(
                    newValue,
                    originalDocument[path],
                    key,
                    field
                  );
                } else {
                  changes[field] = getChangeLog(null, originalDocument[field]);
                }
              }
              break;
            case "$inc":
              for (const field in value) {
                if (field.includes(".")) {
                  const { path, newValue } = resolvePath(
                    field,
                    originalDocument,
                    value[field],
                    key
                  );
                  changes[path] = getChangeLog(
                    newValue,
                    originalDocument[path],
                    key,
                    field
                  );
                } else {
                  if (typeof originalDocument[field] === "number") {
                    changes[field] = getChangeLog(
                      originalDocument[field] + value[field],
                      originalDocument[field]
                    );
                  }
                }
              }
              break;
            case "$mul":
              for (const field in value) {
                if (field.includes(".")) {
                  const { path, newValue } = resolvePath(
                    field,
                    originalDocument,
                    value[field],
                    key
                  );
                  changes[path] = getChangeLog(
                    newValue,
                    originalDocument[path],
                    key,
                    field
                  );
                } else {
                  if (typeof originalDocument[field] === "number") {
                    changes[field] = getChangeLog(
                      originalDocument[field] * value[field],
                      originalDocument[field]
                    );
                  }
                }
              }
              break;
            case "$push":
              for (const field in value) {
                if (field.includes(".")) {
                  const { path, newValue } = resolvePath(
                    field,
                    originalDocument,
                    value[field],
                    key
                  );
                  changes[path] = getChangeLog(
                    newValue,
                    originalDocument[path],
                    key,
                    field
                  );
                } else {
                  if (Array.isArray(originalDocument[field])) {
                    changes[field] = getChangeLog(
                      [...originalDocument[field], value[field]],
                      originalDocument[field]
                    );
                  }
                }
              }
              break;
            case "$pop":
              for (const field in value) {
                if (field.includes(".")) {
                  const { path, newValue } = resolvePath(
                    field,
                    originalDocument,
                    value[field],
                    key
                  );
                  changes[path] = getChangeLog(
                    newValue,
                    originalDocument[path],
                    key,
                    field
                  );
                } else {
                  let newValue = [];
                  if (Array.isArray(originalDocument[field])) {
                    const clone = [...originalDocument[field]];
                    if (value[field] === 1) {
                      clone.pop();
                    } else if (value[field] === -1) {
                      clone.shift();
                    }
                    changes[field] = getChangeLog(clone, originalDocument);
                  }
                }
              }
              break;
            case "$addToSet":
              for (const field in value) {
                if (field.includes(".")) {
                  const { path, newValue } = resolvePath(
                    field,
                    originalDocument,
                    value[field],
                    key
                  );
                  changes[path] = getChangeLog(
                    newValue,
                    originalDocument[path],
                    key,
                    field
                  );
                } else {
                  if (Array.isArray(originalDocument[field])) {
                    const clone = [...originalDocument[field]];
                    if (clone.indexOf(value[field]) === -1) {
                      clone.push(value[field]);
                    }
                    changes[field] = getChangeLog(
                      clone,
                      originalDocument[field]
                    );
                  }
                }
              }
              break;
            case "$pull":
              for (const field in value) {
                if (field.includes(".")) {
                  const { path, newValue } = resolvePath(
                    field,
                    originalDocument,
                    value[field],
                    key
                  );
                  changes[path] = getChangeLog(
                    newValue,
                    originalDocument[path],
                    key,
                    field
                  );
                } else {
                  if (Array.isArray(originalDocument[field])) {
                    const newVal = originalDocument[field].filter(
                      (item: any) => item !== value[field]
                    );
                    changes[field] = getChangeLog(
                      newVal,
                      originalDocument[field]
                    );
                  }
                }
              }
              break;

            case "$rename":
              for (const field in value) {
                if (field.includes(".")) {
                  const { path, newValue } = resolvePath(
                    field,
                    originalDocument,
                    value[field],
                    key
                  );
                  changes[path] = getChangeLog(
                    newValue,
                    originalDocument[path],
                    key,
                    field
                  );
                } else {
                  if (originalDocument.hasOwnProperty(field)) {
                    changes[field] = getChangeLog(
                      null,
                      originalDocument[field],
                      key
                    );
                    changes[value[field]] = getChangeLog(
                      originalDocument[field],
                      null,
                      key
                    );
                  }
                }
              }
              break;
            default:
              if (originalDocument.hasOwnProperty(key)) {
                changes[key] = getChangeLog(update[key], originalDocument[key]);
              }
            // Add more cases for other operators as needed
          }
        }
      }
    } catch (error) {
      return changes;
    }

    return changes;
  }

  /** ################################  generate change log object to save in db  ##################################### */
  /**
   * generate change log object to save in db
   * 
   * @access public
   * @since 2.9.1
   * @author Abdul Karim Ansari
   * @memberof AuditLogPluginHelper
   * @param {any} newValue
   * @param {any} oldValue
   * @param {string} operator
   * @param {string} stack
   * @returns {IChangeLog}
   */
  public static getChangeLog(
    newValue: any,
    oldValue: any,
    operator?: string,
    stack?: string
  ): IChangeLog {
    const doc: IChangeLog = {
      newValue,
      oldValue,
    };
    if (operator) {
      doc.operator = operator;
    }
    if (stack) {
      doc.stack = stack;
    }
    return doc;
  }
  /** ################################  to detect changed properties  ##################################### */
  /**
   * to detect changed properties
   * 
   * @access public
   * @since 2.9.1
   * @author Abdul Karim Ansari
   * @memberof AuditLogPluginHelper
   * @param {any} originalVal
   * @param {any} newVal
   * @returns {boolean}
   */
  public static detectChanges(originalVal: any, newVal: any): boolean {
    if (typeof originalVal !== typeof newVal) {
      return true;
    } else if (
      typeof originalVal === "object" &&
      originalVal !== null &&
      newVal !== null
    ) {
      if (Array.isArray(originalVal)) {
        if (originalVal.length !== newVal.length) {
          return true;
        }

        for (let i = 0; i < originalVal.length; i++) {
          if (AuditLogPluginHelper.detectChanges(originalVal[i], newVal[i])) {
            return true;
          }
        }
      } else if (
        typeof originalVal === "object" &&
        originalVal instanceof Date
      ) {
        const originalDate = moment(originalVal);
        const newDate = moment(newVal);
        return !originalDate.isSame(newDate);
      } else if (typeof originalVal === "object") {
        const keys = new Set([
          ...Object.keys(originalVal),
          ...Object.keys(newVal),
        ]);
        for (const key of keys) {
          if (
            AuditLogPluginHelper.detectChanges(originalVal[key], newVal[key])
          ) {
            return true;
          }
        }
      }
    } else if (originalVal !== newVal) {
      return true;
    }

    return false;
  }
  public static get skipKeys(): string[] {
    return ["_id", "createdAt", "__v"];
  }
}
