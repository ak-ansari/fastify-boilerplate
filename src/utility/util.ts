import moment from "moment";

export class Utility {
  public static getFinYear(date?: Date): string {
    const d = date ? moment(date) : moment();
    const year = d.year();
    const month = d.month();
    if (month > 2) {
      return `${year}-${year + 1}`;
    }
    return `${year - 1}-${year}`;
  }
  public static getStartEnd(finYear?: string): { start: Date; end: Date } {
    const years = finYear
      ? finYear.split("-")
      : Utility.getFinYear().split("-");
    const start = moment(`01-04-${Number(years[0])}`, "DD-MM-YYYY").toDate();
    const end = moment(`31-03-${Number(years[1])}`, "DD-MM-YYYY").toDate();
    return { start, end };
  }
  public static getTimesheetStart(finYear?: string): {
    start: Date;
    end: Date;
  } {
    const years = finYear
      ? finYear.split("-")
      : Utility.getFinYear().split("-");
    const start = moment(`01-04-${Number(years[0])}`, "DD-MM-YYYY")
      .startOf("isoWeek")
      .toDate();
    const end = moment(`31-03-${Number(years[1])}`, "DD-MM-YYYY")
      .endOf("isoWeek")
      .toDate();
    return { start, end };
  }
  public static get dummyUsers(): string[] {
    return [
      "admin@primuspartners.in",
      "dev1@primuspartners.in",
      "dev2@primuspartners.in",
      "dev3@primuspartners.in",
    ];
  }

  public static get leaveIds(): ILeaveIds {
    return {
        sick: "63a42fb4b068313174f01182",
        casual: "61247fe398435cbea11db8df",
        earned: "6123911d98435cbea11db349",
        comm:"61247ea598435cbea11db7c9",
        maternity:"61247f2198435cbea11db886",
        paternity:"61247f8198435cbea11db8cc",
        lwp:"6124805398435cbea11db8f2",
        Sabbatical:"64523b9fab426b7decd25ed6"
    }
  }

  public static weekDays = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
}

interface ILeaveIds {
  sick: "63a42fb4b068313174f01182";
  casual: "61247fe398435cbea11db8df";
  earned: "6123911d98435cbea11db349";
  comm: "61247ea598435cbea11db7c9";
  maternity: "61247f2198435cbea11db886";
  paternity: "61247f8198435cbea11db8cc";
  lwp: "6124805398435cbea11db8f2";
  Sabbatical: "64523b9fab426b7decd25ed6";
}
