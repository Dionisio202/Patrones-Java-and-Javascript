import { Truck } from "./Vehicle.js";
class TruckCreator {
  createVehicle() {
    return new Truck();
  }
}
export { TruckCreator };