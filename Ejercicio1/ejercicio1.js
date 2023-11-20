/*Crear una función que calcule la edad de una persona. La función toma como parámetro 
el año de nacimiento y devuelve la edad correspondiente. */

'use strict'

function calcularEdad(año){
    let añoActual = 2023;
    let edad = (añoActual - año);
    alert("Edad: "+edad);
}

let añodeNacimiento = Number(prompt("Ingresa tu año de nacimiento"));
calcularEdad(añodeNacimiento);
