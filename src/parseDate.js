// To get cron syntax of time in utc
export default function parseDate(dateStr) {
  const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])T([01]\d|2[0-3]):([0-5]\d)Z?$/
  
  if (typeof dateStr !== 'string') {
    throw new TypeError("Expected an ISO date string.")
  }
  if (!regex.test(dateStr)) {
    // throw new Error("Invalid ISO date. This package requires all dates to be ISO format.")
    throw new Error("Invalid ISO date. This package requires all dates to be in ISO format for simplicity and consistency.")    
    // throw new Error("Invalid ISO date. Expected: YYYY-MM-DDTHH:mm or YYYY-MM-DDTHH:mmZ")
  }
  }
  
  const d = new Date(dateStr);
  
  if (isNaN(d.getTime())) {
    throw new TypeError('The provided ISO date is invalid.');
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