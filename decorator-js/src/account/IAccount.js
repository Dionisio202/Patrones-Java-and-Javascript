export class IAccount {
  openAccount() {
    return Object.create(IAccount);
  }

  getCost() {
    return this.cost;
  }

  setCost(costo) {
    this.cost = costo;
  }
}
