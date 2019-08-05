class FuelGouge {
  constructor(amount) {
    this.amount = amount;
  }

  decrease(amount) {
    if (this.amount - amount > FuelGouge.minAmount) {
      this.amount--;
    }
  }

  increase(amount) {
    if (this.amount + amount > FuelGouge.maxAmount) {
      this.amount++;
    }
  }

  report() {
    console.log("Fuel left: " + this.amount + "l");
  }
}

FuelGouge.maxAmount = 70;
FuelGouge.minAmount = 0;

class Odometer {
  constructor(mileage, fuelGouge) {
    this.mileage = mileage;
    this.fuelGouge = fuelGouge;
    this.current = 0;
  }

  report() {
    console.log("You have driven: " + this.mileage + "km");
  }

  increase() {
    if (this.mileage + 1 <= Odometer.maxMileage) {
      this.mileage++;
      this.current++;
      //Reset the odometer if reach maxMileage.
      if(this.mileage === Odometer.maxMileage) {
        this.mileage = 0
      }
    }
    if (this.current >= 10) {
      this.fuelGouge.decrease();
      this.current = 0;
    }
  }
}

Odometer.minMileage = 0;
Odometer.maxMileage = 999999;

const fuelGouge = new FuelGouge(10);
const odometer = new Odometer(100000, fuelGouge);

for (let i = 0; i < 10; i++) {
  console.log("Filling up...");
  fuelGouge.increase();
}

for (let i = 0; i < 100; i++) {
  console.log("Driving...");
  odometer.increase();
}

fuelGouge.report(); //10L in the tank
odometer.report(); //100_000 mileage
