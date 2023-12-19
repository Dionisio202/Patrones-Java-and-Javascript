import { IAccount as IAccount } from "../IAccount.js";

export class SavingAccount extends IAccount {
  constructor(id, cliente, costo) {
    super();

    this.id = id;
    this.client = cliente;
    this.cost = costo;
  }

  getId() {
    return id;
  }

  setId(id) {
    this.id = id;
  }

  getClient() {
    return this.client;
  }

  setClient(client) {
    this.client = client;
  }

  openAccount() {
    console.log("*************");
    console.log("Se abrió una cuenta de ahorros");
    console.log("Cliente: " + this.getClient());
    console.log("Costo de apertura:" + this.getCost());

    return this;
  }

  setCost(cost) {
    this.cost = cost;
  }

  getCost() {
    return this.cost;
  }
}
