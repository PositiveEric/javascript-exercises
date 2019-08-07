class FuelGauge {
  constructor(amount) {
    this.amount = amount;
  }

  decrease(number) {
    if (this.amount <= FuelGauge.minAmount) {
      throw new Error("You are out of FUEL!");
    } else {
      this.amount -= number;
    }
  }

  increase(number) {
    if (this.amount >= FuelGauge.maxAmount) {
      throw new Error("Your fuel tank is allready full!");
    } else {
      this.amount += number;
    }
  }

  report() {
    console.log(`There are ${this.amount}L of fuel in the tank`);
  }
}

FuelGauge.maxAmount = 70;
FuelGauge.minAmount = 0;

class Odometer {
  constructor(mileage, fuelGauge) {
    this.mileage = mileage;
    this.fuelGauge = fuelGauge;
    this.current = 0;
  }

  report() {
    console.log("Current mileage is " + this.mileage + "km");
  }

  increase() {
    if (this.mileage <= Odometer.maxMileage) {
      this.mileage++;
      this.current++;
      if (this.mileage === Odometer.maxMileage) {
        this.mileage = 0;
        //Reset the odometer if reach maxMileage.
      }
    }
    if (this.current >= 10) {
      this.fuelGauge.decrease(1);
      this.current = 0;
    }
  }
}

Odometer.minMileage = 0;
Odometer.maxMileage = 999999;

const fuelGauge = new FuelGauge(10);
const odometer = new Odometer(100000, fuelGauge);

for (let i = 0; i < 10; i++) {
  // console.log("Filling up...");
  fuelGauge.increase();
}

for (let i = 0; i < 100; i++) {
  // console.log("Driving...");
  odometer.increase();
}

fuelGauge.report(); //10L in the tank
odometer.report(); //100_000 mileage

module.exports = { Odometer, FuelGauge };
