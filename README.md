# HTD (Human Time Difference)

A TypeScript utility for calculating and formatting time differences between two timestamps in a human-readable format.

## Publish
```
bun run build
npm publish
```
## Usage

```typescript
import { htd } from 'htd';

// Example 1: Calculate time difference between two dates
const startDate = new Date(2023, 0, 1); // January 1, 2023
const endDate = new Date(2024, 1, 15);  // February 15, 2024
const timeDiff = new htd(startDate.getTime(), endDate.getTime());

// Get human-readable time difference
const readableDiff = timeDiff.getHumanReadable();
console.log(readableDiff);
// Output: { years: 1, days: 45, minutes: 0, seconds: 0, milliseconds: 0 }

// Example 2: Calculate time difference from a past date to now
const pastDate = new Date(2023, 5, 1); // June 1, 2023
const now = new Date();
const timeFromPast = new htd(pastDate.getTime(), now.getTime());
console.log(timeFromPast.getHumanReadable());
```

## API Reference

### Class: htd

The main class for calculating time differences.

#### Constructor

```typescript
constructor(start: number, end: number)
```

- `start`: Timestamp in milliseconds representing the start date
- `end`: Timestamp in milliseconds representing the end date

#### Properties

- `start`: The start timestamp in milliseconds
- `end`: The end timestamp in milliseconds
- `year`: Number of days in a year (default: 365)

#### Methods

##### calcRawDiff()

Returns the raw difference in milliseconds between the end and start timestamps.

```typescript
const diff = timeDiff.calcRawDiff();
console.log(diff); // milliseconds
```

##### getSeconds()

Returns the time difference in seconds.

```typescript
const seconds = timeDiff.getSeconds();
console.log(seconds); // seconds
```

##### getMinutes()

Returns the time difference in minutes with remainder in seconds.

```typescript
const minutes = timeDiff.getMinutes();
console.log(minutes.quoitant); // whole minutes
console.log(minutes.remainder); // remaining seconds
```

##### getHours()

Returns the time difference in hours with remainder in minutes.

```typescript
const hours = timeDiff.getHours();
console.log(hours.quoitant); // whole hours
console.log(hours.remainder); // remaining minutes
```

##### getDays()

Returns the time difference in days with remainder in hours.

```typescript
const days = timeDiff.getDays();
console.log(days.quoitant); // whole days
console.log(days.remainder); // remaining hours
```

##### getYears()

Returns the time difference in years with remainder in days.

```typescript
const years = timeDiff.getYears();
console.log(years.quoitant); // whole years
console.log(years.remainder); // remaining days
```

##### getHumanReadable()

Returns a human-readable object containing the time difference broken down into years, days, minutes, seconds, and milliseconds.

```typescript
const readable = timeDiff.getHumanReadable();
console.log(readable);
// Output: 
// {
//   years: 1,
//   days: 45,
//   minutes: 0,
//   seconds: 0,
//   milliseconds: 0
// }
```

## Example

```typescript
// Calculate how long until a future event
const now = new Date();
const futureEvent = new Date(2024, 11, 31); // December 31, 2024
const timeUntilEvent = new htd(now.getTime(), futureEvent.getTime());

const timeLeft = timeUntilEvent.getHumanReadable();
console.log(`Time until event: ${timeLeft.years} years, ${timeLeft.days} days, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds`);
```