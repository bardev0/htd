// Human Time Difference

export class htd {
  start: number;
  end: number;
  year: number

  constructor(start: number, end: number) {
    this.start = start
    this.end = end
    this.year = 365
  }

  calcRawDiff() {
    const diff = this.end - this.start
    return diff
  }

  getSeconds() {
    return this.calcRawDiff() / 1000
  }

  getMinutes() {
    return {
      quoitant: Math.floor(this.calcRawDiff() / 1000 / 60),
      remainder: this.calcRawDiff() / 1000 % 60
    }
  }

  getHours() {
    return {
      quoitant: Math.floor(this.calcRawDiff() / 1000 / 60 / 60),
      remainder: this.calcRawDiff() / 1000 / 60 % 60
    }
  }

  getDays() {
    return {
      quoitant: Math.floor(this.calcRawDiff() / 1000 / 60 / 60 / 24),
      remainder: this.calcRawDiff() / 1000 / 60 / 60 % 24
    }
  }

  getYears() {
    return {
      quoitant: Math.floor(this.calcRawDiff() / 1000 / 60 / 60 / 24 / this.year),
      remainder: this.calcRawDiff() / 1000 / 60 / 60 / 24 % this.year
    }
  }

  getHumanReadable() {
    const years = this.getYears().quoitant
    const yearsInMs = years * 31536000000
    const leftAfterYears = this.calcRawDiff() - yearsInMs

    const days = Math.floor(leftAfterYears / 86400000)
    const daysInMs = days * 86400000
    const leftAfterDays = this.calcRawDiff() - yearsInMs - daysInMs

    const hours = Math.floor(leftAfterDays / 3600000)
    const hoursInMs = hours * 3600000
    const leftAfterHours = this.calcRawDiff() - yearsInMs - daysInMs - hoursInMs

    const minutes = Math.floor(leftAfterHours / 60000)
    const minutesInMs = minutes * 60000
    const leftAfterMinutes = this.calcRawDiff() - yearsInMs - daysInMs - hoursInMs - minutesInMs

    const secs = Math.floor(leftAfterMinutes / 1000)
    const secsInMs = secs * 1000
    const leftAfterSecs = this.calcRawDiff() - yearsInMs - daysInMs - hoursInMs - minutesInMs - secsInMs

    const ms = leftAfterSecs

    return {
      years: years,
      days: days,
      minutes: minutes,
      seconds: secs,
      milliseconds: ms,
    }
  }
}