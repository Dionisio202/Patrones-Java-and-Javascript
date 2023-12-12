import { VehicleFactory } from "./VehicleFactory.js";
//Factory con condicionales
// const factory = new VehicleFactory();
// const monocycle = factory.createVehicle(1);
// console.log(monocycle.description());
// const car = factory.createVehicle(4);
// console.log(car.description());
// const truck = factory.createVehicle(6);
// console.log(truck.description());
// const invalid = factory.createVehicle(2);
// console.log(invalid);

//Factory con creadores concretos

import { MonoCycleCreator } from "./MonoCycleCreator.js";
import { CarCreator } from "./CarCreator.js";
import { TruckCreator } from "./TruckCreator.js";
import { VehicleFactoryCreator } from "./VehicleFactoryCreator.js";

const factory = new VehicleFactoryCreator(new MonoCycleCreator());
const monocycle = factory.createVehicle();
monocycle.description();
console.log("**********")
const factory2 = new VehicleFactoryCreator(new CarCreator());
const car = factory2.createVehicle();
car.description();
console.log("**********")
const factory3 = new VehicleFactoryCreator(new TruckCreator());
const truck = factory3.createVehicle();
truck.description();   


