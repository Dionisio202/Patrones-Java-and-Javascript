import { Button } from "../abstractFactory/IButton.js";

export class MacOSButton extends Button {
  paint() {
    const div = document.createElement('div');
    div.innerHTML = 'Botón específico de MacOS';
    div.setAttribute('class', 'macos-ui-element');

    document.body.appendChild(div);
    console.log("Renderizando botón en estilo MacOS");
  }
}

