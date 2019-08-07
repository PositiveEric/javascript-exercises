/**
 * Clock
 * Implement a clock that handles times without dates.
 *
 * You should be able to add and subtract minutes to it.
 *
 * Two clocks that represent the same time should be equal to each other.
 */

class Clock {
  constructor(hours = 0, minutes = 0) {
    hours += Math.floor(minutes / 60);
    while (hours < 0) {
      hours += 24;
    }
    hours = hours % 24;
    while (minutes < 0) {
      minutes += 60;
    }
    minutes = minutes % 60;
    this.hours = hours;
    this.minutes = minutes;
  }

  toString() {
    return `${this.hours
      .toString()
      .padStart(2, "0")}:${this.minutes.toString().padStart(2, "0")}`;
  }

  plus(minutes) {
    return new Clock(this.hours, this.minutes + minutes);
  }

  minus(minutes) {
    return new Clock(this.hours, this.minutes - minutes);
  }

  equals(otherClock) {
    return (
      otherClock.hours === this.hours && otherClock.minutes === this.minutes
    );
  }
}

module.exports = Clock;
