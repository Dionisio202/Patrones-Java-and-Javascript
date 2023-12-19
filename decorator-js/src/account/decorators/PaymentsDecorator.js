import { BaseDecorator } from "./BaseDecorator.js";

export class PaymentsDecorator extends BaseDecorator {
  constructor(cuentaDecorada) {
    super(cuentaDecorada);
  }

  openAccount() {
    this.cuentaDecorada.openAccount();
    this.addPayments();
  }

  addPayments() {
    const costoPagos = this.getCost() + 0.5;
    this.cuentaDecorada.setCost(costoPagos);
    console.log(
      "Se agregó el servicio de Pagos. \nCon un costo adicional de $0.5"
    );
    console.log("Los costos de la cuenta ascienden a: $" + costoPagos);
  }
}
