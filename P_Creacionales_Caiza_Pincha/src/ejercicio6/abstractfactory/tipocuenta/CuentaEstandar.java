/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ejercicio6.abstractfactory.tipocuenta;

import ejercicio6.abstractfactory.ICuenta;

/**
 *
 * @author USUARIO
 */
public class CuentaEstandar implements ICuenta{

    @Override
    public void getPropiedad() {
        System.out.println("0,5 %");
    }

    @Override
    public void generarCuenta() {
        System.out.println("--Generando Cuenta Estandar....");
    }
    
}
