import { Monocycle, Car, Truck } from "./Vehicle.js";

class VehicleFactory {
  createVehicle(wheeler) {
    switch (wheeler) {
      case 1:
        return new Monocycle();
      case 4:
        return new Car();
      case 6:
        return new Truck();
      default:
        console.log("Invalid number of wheels");
    }
  }
}

export {VehicleFactory};