import { Window } from "../abstractFactory/IWindow.js";

export class MacOSWindow extends Window {
  render() {
    const div = document.createElement('div');
    div.innerHTML = 'Renderizando ventana en estilo MacOS';
    div.setAttribute('class', 'macos-ui-element');

    document.body.appendChild(div);
    console.log("Renderizando ventana en estilo MacOS");  
  }
}