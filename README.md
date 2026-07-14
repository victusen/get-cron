# get-cron

> Convert JavaScript dates into cron expressions without writing cron syntax.

`get-cron` is a lightweight utility that converts JavaScript ISO dates into valid cron expressions.

Instead of memorizing cron syntax like:

```text
30 14 * * 1-5
```

you simply write:

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
- Simple and intuitive API.
- Built in scheduling patterns.
- Lightweight.
- Zero dependencies.
- Modern ES Modules.
- Perfect companion for `node-cron` and the foundation powering `crondis`.

---

# Installation

```bash
npm install get-cron
```

Requires Node.js 20 or later.

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
| at | String | Yes | A valid JavaScript ISO date. |
| every | String | Yes | The repeat schedule. |

Returns a valid cron expression.

---

# Supported Repeat Options

| Option | Description |
|---------|-------------|
| once | Run only once. |
| daily | Every day. |
| weekly | Every week on the same weekday. |
| monthly | Same day every month. |
| yearly | Same day every year. |
| weekday | Monday through Friday. |
| weekends | Saturday and Sunday. |
| christmas | Every Christmas Day. |
| christmas-eve | Every Christmas Eve. |
| new year | Every New Year's Day. |
| new years-eve | Every New Year's Eve. |
| valentines | Every Valentine's Day. |

---

# Named/Additional Exports

`get-cron` currently exports:

```js
import getCron, {
  parseDate
} from "get-cron";
```

---

## parseDate()

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

# Errors

`get-cron` throws descriptive errors when:

- `at` is not a valid JavaScript ISO date.
- `every` contains an unsupported repeat option.

Example:

```text
TypeError: The "at" property must be a valid ISO date.
```

```text
Error: Unsupported repeat option: "everyday"
```

--- 

# Common Errors 

Example-1: 

```text
getCron({
  at: "2026",
  every: "daily"
});
```

Error:
Invalid ISO date

Example-2: 

```text 
getCron({
  at: "2026-07-14T10:00",
  every: "everyday"
});
```

Error: 
Unsupported repeat option


---

# Why get-cron?

Cron expressions are powerful, but they're difficult to remember and easy to get wrong.

`get-cron` lets you think in JavaScript dates while it handles the cron syntax for you.

---

# Roadmap

Upcoming releases will include:

- Better validation.
- Better error output.
- Improved API. 
- More repeat options.
- TypeScript support.
- Timezone helpers.
- Natural language scheduling.
- Support for briefer dates, e.g time (12:30 or 12:30:00) only for weekly, daily, once, weekends, options, other than 2026-07-14T12:30.
- Timestamp date support (e.g 1829692800)

---

# Contributing

Contributions are welcome.

Feel free to open an Issue or submit a Pull Request.

---

# Changelog

See the full project history in:

```text
changelog.md
```

---

# License

MIT

---

# Author

**Victor Usen**

GitHub

https://github.com/victusen

---

## Related Project

If you're looking for a complete task scheduler built on top of `get-cron`, check out:

- **Crondis** — https://github.com/victusen/crondis

--- 

If `get-cron` saved you time, please consider giving the project a ⭐ on GitHub.

Every star helps more developers discover the project.