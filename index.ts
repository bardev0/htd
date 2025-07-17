/**
 * Represents a utility class to calculate and display human-readable time differences 
 * between two time points (start and end), in various units such as seconds, minutes, 
 * hours, days, and years.
 */
export class htd {
  start: number;
  end: number;
  year: number;

  /**
   * Creates an instance of the htd class.
   * @param start - The start time in milliseconds since the epoch.
   * @param end - The end time in milliseconds since the epoch.
   */
  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
    this.year = 365;
  }

  /**
   * Calculates the raw time difference in milliseconds.
   * @returns The raw difference in milliseconds.
   */
  calcRawDiff(): number {
    const diff = this.end - this.start;
    return diff;
  }

  /**
   * Converts the raw time difference to seconds.
   * @returns The time difference in seconds.
   */
  getSeconds(): number {
    return this.calcRawDiff() / 1000;
  }

  /**
   * Converts the raw time difference to minutes, including quotient and remainder.
   * @returns An object containing the quotient (whole minutes) and remainder (remaining seconds).
   */
  getMinutes(): { quoitant: number; remainder: number } {
    return {
      quoitant: Math.floor(this.calcRawDiff() / 1000 / 60),
      remainder: this.calcRawDiff() / 1000 % 60,
    };
  }

  /**
   * Converts the raw time difference to hours, including quotient and remainder.
   * @returns An object containing the quotient (whole hours) and remainder (remaining minutes).
   */
  getHours(): { quoitant: number; remainder: number } {
    return {
      quoitant: Math.floor(this.calcRawDiff() / 1000 / 60 / 60),
      remainder: this.calcRawDiff() / 1000 / 60 % 60,
    };
  }

  /**
   * Converts the raw time difference to days, including quotient and remainder.
   * @returns An object containing the quotient (whole days) and remainder (remaining hours).
   */
  getDays(): { quoitant: number; remainder: number } {
    return {
      quoitant: Math.floor(this.calcRawDiff() / 1000 / 60 / 60 / 24),
      remainder: this.calcRawDiff() / 1000 / 60 / 60 % 24,
    };
  }

  /**
   * Converts the raw time difference to years, including quotient and remainder.
   * @returns An object containing the quotient (whole years) and remainder (remaining days).
   */
  getYears(): { quoitant: number; remainder: number } {
    return {
      quoitant: Math.floor(this.calcRawDiff() / 1000 / 60 / 60 / 24 / this.year),
      remainder: this.calcRawDiff() / 1000 / 60 / 60 / 24 % this.year,
    };
  }

  /**
   * Converts the raw time difference into a human-readable format, displaying the difference
   * in years, days, hours, minutes, seconds, and milliseconds.
   * @returns An object containing the human-readable breakdown of time units.
   */
  getHumanReadable(): { years: number; days: number; minutes: number; seconds: number; milliseconds: number } {
    const years = this.getYears().quoitant;
    const yearsInMs = years * 31536000000;
    const leftAfterYears = this.calcRawDiff() - yearsInMs;

    const days = Math.floor(leftAfterYears / 86400000);
    const daysInMs = days * 86400000;
    const leftAfterDays = this.calcRawDiff() - yearsInMs - daysInMs;

    const hours = Math.floor(leftAfterDays / 3600000);
    const hoursInMs = hours * 3600000;
    const leftAfterHours = this.calcRawDiff() - yearsInMs - daysInMs - hoursInMs;

    const minutes = Math.floor(leftAfterHours / 60000);
    const minutesInMs = minutes * 60000;
    const leftAfterMinutes = this.calcRawDiff() - yearsInMs - daysInMs - hoursInMs - minutesInMs;

    const secs = Math.floor(leftAfterMinutes / 1000);
    const secsInMs = secs * 1000;
    const leftAfterSecs = this.calcRawDiff() - yearsInMs - daysInMs - hoursInMs - minutesInMs - secsInMs;

    const ms = leftAfterSecs;

    return {
      years: years,
      days: days,
      minutes: minutes,
      seconds: secs,
      milliseconds: ms,
    };
  }
}