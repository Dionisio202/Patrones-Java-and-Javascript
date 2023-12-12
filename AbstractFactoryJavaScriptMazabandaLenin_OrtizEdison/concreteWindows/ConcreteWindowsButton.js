import { Button } from "../abstractFactory/IButton.js";

export class WindowsButton extends Button {
  paint() {
    const div = document.createElement('div');
    div.innerHTML = 'Botón específico de Windows';
    div.setAttribute('class', 'windows-ui-element');

    document.body.appendChild(div);
    console.log("Renderizando botón en estilo Windows");
  }
}