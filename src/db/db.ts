import mongoose from "mongoose";
export class DBConnectionService {
  private mongoUri = process.env.MONGO_URI as string;

  public async connect() {
    await mongoose.connect(this.mongoUri);
    const db = this.mongoUri.split(".net/")[1]
    console.log(`DB connection stabilized successfully for DATABASE: ${db}`)
  }
}
