import parseDate from "./parseDate.js"
// Note: getWeekNum can be replaced by .getDay() 
import getWeekNum from "./getWeekNum.js"

export default function getCron({at, every}) {
  if (typeof at !== 'string') {
    throw new TypeError("The 'at' property must be a date string")
  }
  
  if (typeof every !== 'string') {
    throw new TypeError('The "every" property must be a string.')
  }
  
  const cronObj = parseDate(at);
  
  switch (every) {
    case "once":
      return `${cronObj.minutes} ${cronObj.hour} ${cronObj.date} ${cronObj.month} *`;
    case "daily":
      return `${cronObj.minutes} ${cronObj.hour} * * *`;
    case "weekly":
      return `${cronObj.minutes} ${cronObj.hour} * * ${getWeekNum(cronObj.weekday)}`;
    case "monthly":
      return `${cronObj.minutes} ${cronObj.hour} ${cronObj.date} * *`;
    case "yearly":
      return `${cronObj.minutes} ${cronObj.hour} ${cronObj.date} ${cronObj.month} *`;
    case "weekday":
      return `${cronObj.minutes} ${cronObj.hour} * * 1-5`;
    case "weekends":
      return `${cronObj.minutes} ${cronObj.hour} * * 0,6`;
    case "christmas":
      return `${cronObj.minutes} ${cronObj.hour} 25 12 *`;
    case "christmas-eve":
      return `${cronObj.minutes} ${cronObj.hour} 24 12 *`;
    case "new year":
      return `${cronObj.minutes} ${cronObj.hour} 1 1 *`;
    case "new years-eve":
      return `${cronObj.minutes} ${cronObj.hour} 31 12 *`;
    case "valentines":
      return `${cronObj.minutes} ${cronObj.hour} 14 2 *`;
    default: 
      throw new Error(`Unsupported repeat option: "${every}".`);
  };
}