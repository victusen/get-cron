import parseDate from "./parseDate.js"
// Note: getWeekNum can be replaced by .getDay() 
import getWeekNum from "./getWeekNum.js"

export default function getCron({at, every}) {
  const cronObj = parseDate(at);
  // console.log(JSON.stringify(cronObj, null, 2));
  switch (every) {
    case "once":
      // cronOnce(datestr);
      return `${cronObj.minutes} ${cronObj.hour} ${cronObj.date} ${cronObj.month} *`;
    case "daily":
      // cronDaily(datestr);
      return `${cronObj.minutes} ${cronObj.hour} * * *`;
    case "weekly":
      // cronWeekly(datestr);
      return `${cronObj.minutes} ${cronObj.hour} * * ${getWeekNum(cronObj.weekday)}`;
    case "monthly":
      // cronMonthly(datestr);
      return `${cronObj.minutes} ${cronObj.hour} ${cronObj.date} * *`;
    case "yearly":
      // cronYearly(datestr);
      return `${cronObj.minutes} ${cronObj.hour} ${cronObj.date} ${cronObj.month} *`;
    case "weekday":
      // cronWeekdays(datestr);
      return `${cronObj.minutes} ${cronObj.hour} * * 1-5`;
    case "weekends":
      // cronWeekends(datestr);
      return `${cronObj.minutes} ${cronObj.hour} * * 0,6`;
    case "christmas":
      // cronChristmas(datestr);
      return `${cronObj.minutes} ${cronObj.hour} 25 12 *`;
    case "christmas-eve":
      // cronChristmasEve(datestr);
      return `${cronObj.minutes} ${cronObj.hour} 24 12 *`;
    case "new year":
      // cronNewYear(datestr);
      return `${cronObj.minutes} ${cronObj.hour} 1 1 *`;
    case "new years-eve":
      // cronNewYearEve(datestr);
      return `${cronObj.minutes} ${cronObj.hour} 31 12 *`;
    case "valentines":
      // cronValentines(datestr);
      return `${cronObj.minutes} ${cronObj.hour} 14 2 *`;
    default: 
      throw new Error(`Invalid every option provided. "${every}"`);
  };
}