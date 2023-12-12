import { Button } from "../abstractFactory/IButton.js";

export class LinuxButton extends Button {
  paint() {
    const div = document.createElement('div');
    div.innerHTML = 'Botón específico de Linux';
    div.setAttribute('class', 'linux-ui-element');

    document.body.appendChild(div);
    console.log("Renderizando botón en estilo Linux");
  }
}

