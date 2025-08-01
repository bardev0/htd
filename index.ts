
export class htd {
  time: number | Date;

  constructor(timedifference : number | Date) {
    this.time = timedifference;
  }

  private assumeFormat(time: number | Date) {
    if (typeof time === 'number') {
      return time;
    } else if (time instanceof Date) {
      return time.getTime();
    } else {
      throw new Error('Invalid time format');
    }
  }

  getHumanReadable(): { years: number; days: number; minutes: number; seconds: number; milliseconds: number } {

    const time = this.assumeFormat(this.time);

    const years = Math.floor(time / 31536000000);
    const yearsRemainder = years * 31536000000;
    const msAfterYears = time - yearsRemainder;

    const days = Math.floor(msAfterYears / 86400000);
    const daysRemainder = days * 86400000;
    const msAfterDays = msAfterYears - daysRemainder;

    const minutes = Math.floor(msAfterDays / 60000);
    const minutesRemainder = minutes * 60000;
    const msAfterMinutes = msAfterDays - minutesRemainder;

    const secs = Math.floor(msAfterMinutes / 1000);
    const ms = msAfterMinutes - secs * 1000;

    return {
      years: years,
      days: days,
      minutes: minutes,
      seconds: secs,
      milliseconds: ms,
    };
  }
}