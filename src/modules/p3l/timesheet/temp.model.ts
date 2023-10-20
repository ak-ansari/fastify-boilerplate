import {Schema, model} from "mongoose"

const misSchema = new Schema({
        projectId: String,
        projectTitle: String,
        supplierDetails: {type: Schema.Types.Mixed},
        supplierName: String,
        contractDoc: {type: [{ fileName: String, fileKey: String, createdAt: Date }]},
        contractName: String,
        contractValue: Number,
        startDate: Date,
        endDate: Date
});

export default model("linkSupplierMis", misSchema, "linkSupplierMis");