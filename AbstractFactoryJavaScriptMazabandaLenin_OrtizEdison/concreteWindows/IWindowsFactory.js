import { GUIFactory } from "../abstractFactory/IAbstractFactory.js";
import { WindowsButton } from "./ConcreteWindowsButton.js";
import { WindowsWindow } from "./ConcreteWindowsWindow.js";

export class WindowsGUIFactory extends GUIFactory {
  createButton() {
    return new WindowsButton();
  }

  createWindow() {
    return new WindowsWindow();
  }
}