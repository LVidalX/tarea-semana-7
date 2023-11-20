/*Desarrollar una función que realice la multiplicación utilizando únicamente sumas.
La función recibe como parámetros el multiplicador y el multiplicando, 
utiliza un bucle para realizar sumas sucesivas y devolver el resultado.*/

'use strict'

function Multiplicacion(multiplicador, multiplicando){
    let Suma;

    Suma = 0;
    
    if(multiplicador >= 1 && multiplicando != 0){
        alert("La suma se repetira "+multiplicador+" vez/veces");

        for(let contador = 0; contador < multiplicador ; contador++){
             Suma = Suma+multiplicando;
        }
        
        alert(Suma);

    } else if(multiplicador == 0 || multiplicando == 0 ) { 
            alert("La suma no se repetira");
    } else {
        alert("No has ingresado un valor");
        alert("La suma no se repetira");
    } 
} 

let primerNumero = Number(prompt("Ingresa el primer numero"));
let segundoNumero = Number(prompt("Ingresa el multiplicando"));

Multiplicacion(primerNumero, segundoNumero);

