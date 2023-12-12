import { Window } from "../abstractFactory/IWindow.js";


export class LinuxWindow extends Window {
  render() {
    const div = document.createElement('div');
    div.innerHTML = 'Renderizando ventana en estilo Linux';
    div.setAttribute('class', 'linux-ui-element');

    document.body.appendChild(div);
    console.log("Renderizando ventana en estilo Linux");  
  }
}