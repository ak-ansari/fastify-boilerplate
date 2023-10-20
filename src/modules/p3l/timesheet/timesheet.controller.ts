import tempModel from "./temp.model";
import { TimesheetService } from "./timesheet.service"

export class TimesheetController{
    private _timesheetSer: TimesheetService;
    constructor(){
        this._timesheetSer = new TimesheetService()
    }
    public async getUserLeavesYearWise(server: any, req: any):Promise<any> {
        try {
            const {finYear} = req.params;
            const result = await this._timesheetSer.getUserLeavesYearWise(finYear);
            return result;  
        } catch (error) {
            
        }
    }
    public async getUserLeaveBalance(server: any, req: any):Promise<any> {
        try {
            // const {finYear} = req.params;
            const result = await this._timesheetSer.checkManHoliday();
            return result;  
        } catch (error) {
            
        }
    }
    public async setUserIds(server: any, req: any):Promise<any> {
        try {
            const result = await this._timesheetSer.setUserIds();
            return result;  
        } catch (error) {
            
        }
    }
}