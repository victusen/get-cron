# get-cron

> Convert JavaScript dates into cron expressions without memorizing cron syntax.

get-cron is a lightweight utility that transforms JavaScript date strings into valid cron expressions. It also includes helper utilities for working with dates and weekdays.

No more memorizing:

```text
30 14 * * 1-5
```

You simply run:

```js
import getCron from "get-cron";

const cron = getCron({
    at: "2026-06-30T14:30",
    every: "weekday"
});

console.log(cron);

// 30 14 * * 1-5
```

---

# Features

- Convert JavaScript dates into cron expressions.
- Built-in repeat options.
- Named helper exports.
- Lightweight.
- Zero dependencies.
- Modern ES Modules.
- Perfect companion for node-cron.

---

# Installation

```bash
npm install get-cron
```
other package managers are built in.

---

# Quick Start

```js
import getCron from "get-cron";

const cron = getCron({
    at: "2026-08-12T09:00",
    every: "yearly"
});

console.log(cron);

// 0 9 12 8 *
```

---

# API

## getCron()

```js
getCron({
    at,
    every
});
```

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| at | String | Yes | A valid JavaScript date string. |
| every | String | Yes | How often the event repeats. |

Returns a valid cron expression.

---

# Repeat Options

Supported repeat values:

- once
- daily
- weekly
- monthly
- yearly
- weekday
- weekends
- christmas
- christmas-eve
- new year
- new years-eve
- valentines

---

# Named Exports

get-cron also exports helper utilities.

```js
import {
    parseDate,
    getWeekNum
} from "get-cron";
```

### parseDate()

```js
const date = parseDate("2026-06-30T20:14");

console.log(date);
```

Returns

```js
{
    minutes: 14,
    hour: 20,
    date: 30,
    month: 6,
    weekday: "Tuesday"
}
```

---

### getWeekNum()

```js
getWeekNum("Sunday");

// 0
```

Useful when building custom cron expressions.

---

# Why get-cron?

Cron expressions are powerful but you often have to spend time getting the right syntaxes. That's difficult to remember.

get-cron lets you think in dates while it handles the cron syntax.

---

# Roadmap

Future versions will include:

- Better validation
- More repeat values(patterns)
- TypeScript support
- Timezone helpers
- Natural language scheduling

---

# Contributing

Contributions are welcome.

Feel free to open an Issue or submit a Pull Request.

---

# License

MIT

---

# Author

**Victor Usen**

GitHub

https://github.com/victusen

---

If this project saved you time, please consider giving it a ⭐ o

Every star helps more developers discover this project.