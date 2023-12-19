import { BaseDecorator } from "./BaseDecorator.js";

export class InsuranceDecorator extends BaseDecorator {
  constructor(cuentaDecorada) {
    super(cuentaDecorada);
  }

  openAccount() {
    this.cuentaDecorada.openAccount();
    this.addInsurance();
  }

  addInsurance() {
    const costoSeguro = this.getCost() + 30;
    this.cuentaDecorada.setCost(costoSeguro);
    console.log(
      "Se agregó un seguro a la cuenta. \nCon un costo adicional de $30"
    );
    console.log("Los costos de la cuenta ascienden a: $" + costoSeguro);
  }
}
