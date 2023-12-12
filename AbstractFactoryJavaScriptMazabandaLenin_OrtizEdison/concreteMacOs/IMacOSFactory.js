import { GUIFactory } from "../abstractFactory/IAbstractFactory.js";
import { MacOSButton } from "./concreteMacOsButton.js";
import { MacOSWindow } from "./concreteMacOsWindow.js";

export class MacOSGUIFactory extends GUIFactory {
  createButton() {
    return new MacOSButton();
  }

  createWindow() {
    return new MacOSWindow();
  }
}