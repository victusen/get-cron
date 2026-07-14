// convert weekday name into the syntax cron job expects
export default function getWeekNum(day) {
  switch (day) {
    case "Sunday":
      return 0;
    case "Monday":
      return 1;
    case "Tuesday":
      return 2;
    case "Wednesday":
      return 3;
    case "Thursday":
      return 4;
    case "Friday":
      return 5;
    case "Saturday":
      return 6;
    default:
      throw new Error("So sorry - Invalid weekday")
  }
}

// Note: getWeekNum can be replaced entirely with .getDay() 