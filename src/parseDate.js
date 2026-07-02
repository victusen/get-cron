// To get cron syntax of time in utc
export default function parseDate(dateStr) {
  const d = new Date(dateStr);
  
  if (isNaN(d.getTime())) {
    throw new Error("Invalid date-time string.")
  }
  
  return {
    minutes: d.getMinutes(),
    hour: d.getHours(),
    date: d.getDate(),
    month: d.getMonth() + 1,
    weekday: d.toLocaleDateString("en-US", {weekday: "long"})
  }
};

// console.log(JSON.stringify(parseDate("2026-06-30T20:14"), null, 2));
