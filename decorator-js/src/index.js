import { BaseDecorator } from "./account/decorators/BaseDecorator.js";
import { InsuranceDecorator } from "./account/decorators/InsuranceDecorator.js";
import { PaymentsDecorator } from "./account/decorators/PaymentsDecorator.js";
import { SavingAccount } from "./account/implementations/SavingAccount.js";

const cuentaBase = new SavingAccount("123", "Lenin Mazabanda", 25);
cuentaBase.openAccount();

const cuentaDecorada = new BaseDecorator(cuentaBase);
cuentaDecorada.openAccount();

const cuentaConPagos = new PaymentsDecorator(cuentaDecorada);
cuentaConPagos.openAccount();

const cuentaConSeguro = new InsuranceDecorator(cuentaDecorada);
cuentaConSeguro.openAccount();

const cuentaBaseTwo = new SavingAccount("21", "Edison Ortiz", 25);
cuentaBaseTwo.openAccount();

const cuentaDecoradaTwo = new BaseDecorator(cuentaBase);
cuentaDecoradaTwo.openAccount();

const cuentaConPagosTwo = new PaymentsDecorator(cuentaDecorada);
cuentaConPagosTwo.openAccount();

const cuentaConSeguroTwo = new InsuranceDecorator(cuentaDecorada);
cuentaConSeguroTwo.openAccount();
