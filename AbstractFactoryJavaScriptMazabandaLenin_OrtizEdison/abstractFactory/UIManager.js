import { LinuxGUIFactory } from "../concreteLinux/ILinuxFactory.js";
import { MacOSGUIFactory } from "../concreteMacOs/IMacOSFactory.js";
import { WindowsGUIFactory } from "../concreteWindows/IWindowsFactory.js";


class UIManager {
  constructor() {
   
  }

  createUI() {
    const button = this.factory.createButton();
    const window = this.factory.createWindow();

    button.paint();
    window.render();
  }

  setFactory(factory) {
    this.factory = factory;
  }
}
const  uiManager=new UIManager();


//MAIN
const windowsFactory = new WindowsGUIFactory();
 uiManager.setFactory(windowsFactory);
uiManager.createUI();

const macosFactory = new MacOSGUIFactory();
uiManager.setFactory(macosFactory);
uiManager.createUI();

const linuxFactory = new LinuxGUIFactory();
uiManager.setFactory(linuxFactory);
uiManager.createUI();