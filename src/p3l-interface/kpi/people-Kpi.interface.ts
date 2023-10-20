import { Document } from "mongoose";

export interface PeopleKpiSchema extends Document,peopleKpi {}

// export interface peopleKpi{
//     date: Date[];
//     status: string;
//     period: string;
//     quarter: string;
//     finYear: string;
//     totalTrainingHours: number;
//     noOfUsers: number;
//     userMateFourty: number;
//     overall:{all:number; female: number};
//     exits: number;
//     all:{
//         ceo: number;
//         managingDirector: number;
//         vicePresident: number;
//         avp: number;
//         manager: number;
//         seniorConsultant: number;
//         consultant: number;
//     };
//     female:{
//         ceo: number;
//         managingDirector: number;
//         vicePresident: number;
//         avp: number;
//         manager: number;
//         seniorConsultant: number;
//         consultant: number;
//     }
//     opening: {
//         fullTime: number;
//         // contractual:number;
//         // thirdPartyWeExcel:number;
//         // thirdPartyAchievant:number;
//         // thirdPartyCred:number;
//         // thirdPartyInfoTech:number;
//         // intern: number;
//         // advisor: number;
//         // independantConsultant: number
//     };
//     closing: {
//         fullTime: number;
//         // contractual:number;
//         // thirdPartyWeExcel:number;
//         // thirdPartyAchievant:number;
//         // thirdPartyCred:number;
//         // thirdPartyInfoTech:number;
//         // intern: number;
//         // advisor: number;
//         // independantConsultant: number
//     };
//     openingCount: number;
//     closingCount: number;

// }
export interface peopleKpi{
    date: [Date,Date];
    gptwScore:string;
    noOfExits: number;
    avgNoOfEmployees: number;
    attritionPercent: number;
    femaleEmployees: number;
    totalEmployees: number;
    diversityRatio: number;
    hoursUsed: number;
    avgTrainingHrs: number;
    status: string;
    period:  string;
    quarter: string ;
    finYear: string;
    level1:{
        femaleEmployees: number;
        totalEmployees: number;
        diversityRatio: number
    };
    level2:{
        femaleEmployees: number;
        totalEmployees: number;
        diversityRatio: number
    };
    level3:{
        femaleEmployees: number;
        totalEmployees: number;
        diversityRatio: number
    };
    level4:{
        femaleEmployees: number;
        totalEmployees: number;
        diversityRatio: number
    };
    level5:{
        femaleEmployees: number;
        totalEmployees: number;
        diversityRatio: number
    };
}