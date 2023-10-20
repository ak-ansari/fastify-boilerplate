import { promises } from "dns";
import { MongoClient, Db } from "mongodb";
import { mongo } from "mongoose";
type mongoMethod = "find" | "findOne";

export class P3LDbService {
  public p3lMongoUri: string;
  private password = encodeURIComponent(process.env.P3L_MONGO_PASS);
  private client!: MongoClient;
  private db!: Db;
  private static _instance: P3LDbService;
  private dbName: string;
  constructor() {
      this.dbName = "p3l_dev";
      this.p3lMongoUri = `mongodb://admin:${this.password}@143.110.240.143:27017/${this.dbName}?authSource=admin`;
      this.classOnInit()
  }
  private async classOnInit(): Promise<void> {
    try {
      await this.connect();
    } catch (error) {
        process.exit(1);
    }
  }
  public connect = async (): Promise<Db | undefined> => {
    try {
      this.client = new MongoClient(this.p3lMongoUri,{ useNewUrlParser: true, useUnifiedTopology: true } as any);
      await this.client.connect()
      // await this.client.connect();
      this.db = this.client.db(this.dbName);
      console.log(`client connected to db : ${this.dbName}`);
      return this.db;
    } catch (error) {
      console.log(error);
    }
  };
  public async getClient(): Promise<Db> {
    return this.db || await this.connect();
  }
  public static get Instance(): P3LDbService {
    return this._instance || (this._instance = new this());
  }
  public async query<T>(
    collection: string,
    queryObj: any,
    options?: any
  ): Promise<T> {
    const session = this.client.startSession();
    try {
      const op = options ? {...options, session }: {session} 
      const result = await this.db
        .collection(collection).find(queryObj, op).toArray() as T;
      return result;
    } catch (error) {
      throw error;
    } finally {
      session.endSession();
    }
  }
  public async aggregate<T>(
    collection: string,
    queryObj: any,
    options?: any
  ): Promise<T> {
    const session = this.client.startSession();
    try {
      const op = options ? options : {} 
      const result = (await this.db
        .collection(collection)
        .aggregate(queryObj, { session,  ...op})
        .toArray()) as T;
      return result;
    } catch (error) {
      throw error;
    } finally {
      session.endSession();
    }
  }
}
