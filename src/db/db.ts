import mongoose from "mongoose";
import { P3LDbService } from "./p3l.db";
export class DBConnectionService {
  private mongoUri = process.env.MONGO_URI as string;

  public async connect() {
    const database = "p3l_dev"
    // await mongoose.connect(P3LDbService.Instance.p3lMongoUri);
    // console.log(`DB connection stabilized successfully for DATABASE: ${database}`)
  }
}
