import { Document } from "mongoose";

export interface CustomerKpiSchema extends Document,CustomerKpi{}

// interface CustomerKpi{
//         finYear: string;
//         privetClient: number;
//         govtClient: number;
//         commonClient: number;
//         govtProject: number;
//         privateProject: number;
//         privateProjectValue: number;
//         newClient: number;
//         repeatedClient: number;
//         date: Date[];
//         status: string;
//         period: string;
//         quarter: string;
// }

interface CustomerKpi{
        date: [Date,Date];
        privateClients: number;
        newClients: number;
        repeatedClients: number;
        lostClientName: string;
        clientExits: string;
        privateClientsPercent: number;
        totalClients: number;
        privateClientsValue: number;
        totalClientsValue: number;
        privateClientsValuePercent: number;
        status: string;
        quarter: string;
        period: string;
        finYear: string;
}
