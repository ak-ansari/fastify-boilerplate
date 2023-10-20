import mongoose from "mongoose";
import { P3LDbService } from "../../../db/p3l.db";
import { IProject, IUser, Iholiday } from "../../../p3l-interface";
import { Utility } from "../../../utility/util";
import {
  ITimesheet,
  TimesheetWeek,
} from "../../../p3l-interface/timesheet.interfaces";
import moment from "moment";
import { writeFileSync } from "fs";
import { resolve } from "path";

export class TimesheetService {
  private DbService: P3LDbService;
  private leaveCategory = "61238fb7f78e731fdd57cc0c";
  constructor() {
    this.DbService = P3LDbService.Instance;
  }
  public async getUserLeavesYearWise(finYear: string): Promise<any> {
    try {
      const json = [];
      const { start: finStart, end: finEnd } = Utility.getStartEnd(finYear);
      const activeUsers = await this.DbService.query<IUser[]>("users",{
        $and: [
          { status: "active" },
          {
            employeeType: {
              $in: ["intern", "full-time-employee", "contractual-employee"],
            },
          },
          { email: { $nin: Utility.dummyUsers } },
        ],
      });
      const { start, end } = Utility.getTimesheetStart(finYear);
      const leaveIds = Utility.leaveIds;
      for (const user of activeUsers) {
        const doj = moment(user.joiningDate)
        // if(user.joiningDate){
        //     continue;
        // }
        const userObj = {
          userName: user.userName,
          email: user.email,
          sick: 0,
          casual: 0,
          earned: 0,
          "Compensatory Off": 0,
          maternity: 0,
          paternity: 0,
          "leave without pay": 0,
          Sabbatical: 0,
        };
        const pipeline = [
          {
            $match: {
              $and: [
                { user: user._id },
                {
                  "timesheets.category": new mongoose.Types.ObjectId(
                    this.leaveCategory
                  ),
                },
                { startDate: { $gte: start } },
                { endDate: { $lte: end } },
              ],
            },
          },
          {
            $unwind: "$timesheets",
          },
          {
            $match: {
              "timesheets.category": new mongoose.Types.ObjectId(
                this.leaveCategory
              ),
            },
          },
        ];
        const leaveTimesheets = await this.DbService.aggregate<ITimesheet[]>(
          "timesheets",
          pipeline
        );
        for (const leave of leaveTimesheets) {
          const t = leave.timesheets as unknown as TimesheetWeek;
          for (const day of Utility.weekDays) {
            const d = moment(t[day].date);
            const leaveDay = Number(t[day].value)/8 || 0;
            const isIn = d.isSameOrAfter(moment(finStart)) && d.isSameOrBefore(moment(finEnd));
            if (isIn && leaveDay) {
              switch (t.project.toString()) {
                case leaveIds.sick:
                  userObj.sick += leaveDay;
                  break;
                case leaveIds.casual:
                  userObj.casual += leaveDay;
                  break;
                case leaveIds.earned:
                  userObj.earned += leaveDay;
                  break;
                case leaveIds.maternity:
                  userObj.maternity += leaveDay;
                  break;
                case leaveIds.paternity:
                  userObj.paternity += leaveDay;
                  break;
                case leaveIds.lwp:
                  userObj["leave without pay"] += leaveDay;
                  break;
                case leaveIds.Sabbatical:
                  userObj.Sabbatical += leaveDay;
                  break;
                case leaveIds.comm:
                  userObj["Compensatory Off"] += leaveDay;
                  break;
              }
            }
          }
        }
        json.push(userObj);
      }

      writeFileSync(
        resolve(__dirname, `./${finYear}.json`),
        JSON.stringify(json, null, 2),
        { encoding: "utf-8" }
      );
      return json
    } catch (error) {
      throw error;
    }
  }
  public async leaveBalance(finYear: string): Promise<any>{
    try {
        const {start,end} = Utility.getStartEnd(finYear)
        const activeUsers = await this.DbService.query<IUser[]>("users",{
            $and: [
              { status: "active" },
              {
                employeeType: {
                  $in: ["intern", "full-time-employee", "contractual-employee"],
                },
              },
              { email: { $nin: Utility.dummyUsers } },
            ],
          });
          const json = [];
          for(const user of activeUsers){
            const userObj = {
                userName: user.userName,
                email: user.email,
                "emp type": user.employeeType,
                doj: moment(user.joiningDate).format("DD MMM YYYY"),
                sick: user.sickLeaves[finYear] || 0 ,
                casual: user.casualLeaves[finYear] || 0 ,
                earned: null
            }
            if(user.employeeType === "full-time-employee"){
                userObj.earned = user.earnedLeaves[finYear] || 0
            }
            else {
                userObj.earned = "NA"
            }
            json.push(userObj)
          }
          writeFileSync(resolve(__dirname,`./balance-${finYear}.json`),JSON.stringify(json, null,2),{encoding:"utf-8"});
          return json
    } catch (error) {
        throw error
    }
  }
  public async setUserIds(): Promise<any>{
    try {
      // const json = []
      const db =await this.DbService.getClient();
      const users: IUser[] = await db.collection("users").find({}).sort({_id: 1}).toArray();
      const idNo = {
        "full-time-employee":0,
        "contractual-employee":0,
        "third-party-contract-we-excel":0,
        "third-party-contract-achievant":0,
        "third-party-contract-cred":0,
        "third-party-contract-s2-infotech":0,
        "intern":0,
        "advisor":0,
        "independant-consultant":0
        }
      for(const user of users){
        const empType = user.employeeType
        const id = getId(empType, idNo[empType]);
          // await db.collection("users").findOneAndUpdate({createdAt: {$exists: false}}, {$set:{createdAt: moment(user.joiningDate).toDate()}})
        if(user.employeeType){
          await db.collection("users").findOneAndUpdate({_id: user._id}, {$set:{employeeNumber: id}})
        }
        idNo[empType] ++;

      }
      // const path = resolve(__dirname,"./user.json");
      // writeFileSync(path, JSON.stringify(json,null,2),{encoding:"utf-8"})
      return true
    } catch (error) {
      
    }
  }

  public async checkManHoliday(){
    try {
      const notFound = []
      const applicable = ["full-time-employee", "contractual-employee","intern"];
      const employees = await this.DbService.query<IUser[]>("users",{$and:[
        {employeeType:{$in: applicable}},
        {status:"active"}
      ]});
      const upcomingHolidays = await this.DbService.query<Iholiday[]>("holidays",{
        $and:[
          {holidayDate:{
            $gte:moment().toDate(),
            $lte:moment("31-03-2024","DD-MM-YYYY").toDate(),
          }},
          {mandatoryIn: {$ne: null}}
        ]
      })
      for(const user of employees){
        // {"timesheets.project": new mongoose.Types.ObjectId("6124812198435cbea11db989")}
        const filteredHolidays = upcomingHolidays.filter(h=> h.mandatoryIn.includes(user.location));
        const client = await this.DbService.getClient();
        const timesheet= await client.collection("timesheets").findOne({
          $and:[
            {user: user._id},
            {startDate:{ $gte:  moment("02-10-2023","DD-MM-YYYY").toDate()}},
            {endDate: {$lte: moment("08-10-2023","DD-MM-YYYY").toDate()}},
          ]
        });
        if(!timesheet){
          notFound.push(user.email)
        }
      }
      return notFound
    } catch (error) {
      throw error
    }
  }
}

function getId(empType: string, pre: number): string{
  let preFix = "";
  switch (empType) {
    case "full-time-employee":
      break;
    case "contractual-employee":
      preFix = "PPC-";
      break;
    case "third-party-contract-we-excel":
      preFix = "WEC-";
      break;
    case "third-party-contract-achievant":
      preFix = "AC-";
      break;
    case "third-party-contract-cred":
      preFix = "CRC-";
      break;
    case "third-party-contract-s2-infotech":
      preFix = "SI-";
      break;
    case "intern":
      preFix = "I-";
      break;
    case "advisor":
      preFix = "A-";
      break;
    case "independant-consultant":
      preFix = "IC-";
      break;
  }
  const id = preFix+ `${pre+1}`.padStart(2,"0");
  return id
}