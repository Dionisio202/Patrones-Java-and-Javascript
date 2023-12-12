import { Window } from "../abstractFactory/IWindow.js";

export class WindowsWindow extends Window {
  render() {
    const div = document.createElement('div');
    div.innerHTML = 'Renderizando ventana en estilo Windows';
    div.setAttribute('class', 'windows-ui-element');

    document.body.appendChild(div);
    console.log("Renderizando ventana en estilo Windows");
  }
}