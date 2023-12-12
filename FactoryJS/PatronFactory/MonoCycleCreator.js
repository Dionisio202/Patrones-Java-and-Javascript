import { Monocycle } from "./Vehicle.js";
class MonoCycleCreator {
  createVehicle() {
    return new Monocycle();
  }
}

export { MonoCycleCreator };