import { IAccount } from "../IAccount.js";

export class BaseDecorator extends IAccount {
  constructor(cuentaDecorada) {
    super();
    this.cuentaDecorada = cuentaDecorada;
  }

  getCost() {
    return this.cuentaDecorada.getCost();
  }

  setCost(cost) {
    this.cuentaDecorada.setCost(cost);
  }
}