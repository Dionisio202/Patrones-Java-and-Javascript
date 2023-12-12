import { GUIFactory } from "../abstractFactory/IAbstractFactory.js";
import { LinuxButton } from "./concreteLinuxButton.js";
import { LinuxWindow } from "./concreteLinuxWindow.js";


export class LinuxGUIFactory extends GUIFactory {
  createButton() {
    return new LinuxButton();
  }

  createWindow() {
    return new LinuxWindow();
  }
}